-- =====================================================================
-- Školicí centrum CZDC – databáze pro Supabase
-- Spusťte celý soubor v Supabase: SQL Editor → New query → Run.
-- Soubor lze spustit opakovaně (je idempotentní).
-- =====================================================================

-- ---------- Tabulky ----------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  login       text unique not null,
  name        text not null,
  role        text not null check (role in ('admin','skolitel','instruktor')),
  skolitel_id uuid references public.profiles(id),
  active      boolean not null default true,
  created_at  timestamptz not null default now()
);

create table if not exists public.settings (
  id   text primary key,
  data jsonb not null default '{}'
);

create table if not exists public.processes (
  id   text primary key,
  data jsonb not null default '{}'            -- {name:{cs,uk}, icon, order}
);

create table if not exists public.tiles (
  id         text primary key,
  process_id text not null references public.processes(id) on delete cascade,
  data       jsonb not null default '{}'      -- {type, name:{cs,uk}, icon, order, pdf:{cs,uk}, form:{threshold,questions}, version}
);

create table if not exists public.trainings (
  id            text primary key,
  mdt           text not null,
  process_id    text references public.processes(id) on delete set null,
  tile_id       text references public.tiles(id) on delete set null,
  instruktor_id uuid references public.profiles(id),
  skolitel_id   uuid references public.profiles(id),
  data          jsonb not null default '{}'   -- {at}
);

create table if not exists public.tests (
  id            text primary key,              -- '<tileId>__<mdt>' = jeden pokus na test
  mdt           text not null,
  process_id    text references public.processes(id) on delete set null,
  tile_id       text references public.tiles(id) on delete set null,
  instruktor_id uuid references public.profiles(id),
  skolitel_id   uuid references public.profiles(id),
  data          jsonb not null default '{}'   -- {at, lang, answers, questions, formVersion, score, passed, wrong, retrained}
);

create table if not exists public.checklists (
  id            text primary key,              -- '<tileId>__<mdt>'
  mdt           text not null,
  process_id    text references public.processes(id) on delete set null,
  tile_id       text references public.tiles(id) on delete set null,
  instruktor_id uuid references public.profiles(id),
  skolitel_id   uuid references public.profiles(id),
  data          jsonb not null default '{}'   -- {status, createdAt, answers, at, questions, formVersion, score, passed, wrong, retrained}
);

create table if not exists public.audit (
  id   text primary key,
  at   timestamptz not null default now(),
  by   uuid references public.profiles(id),
  data jsonb not null default '{}'            -- {byName, role, action, detail}
);

create index if not exists trainings_mdt_idx  on public.trainings(mdt);
create index if not exists trainings_instr_idx on public.trainings(instruktor_id);
create index if not exists trainings_sk_idx    on public.trainings(skolitel_id);
create index if not exists tests_instr_idx     on public.tests(instruktor_id);
create index if not exists tests_sk_idx        on public.tests(skolitel_id);
create index if not exists checklists_instr_idx on public.checklists(instruktor_id);
create index if not exists checklists_sk_idx   on public.checklists(skolitel_id);
create index if not exists audit_at_idx        on public.audit(at desc);

-- ---------- Pomocné funkce ----------
create or replace function public.my_role() returns text
language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid() and active
$$;

create or replace function public.my_skolitel() returns uuid
language sql stable security definer set search_path = public as $$
  select case when role = 'instruktor' then skolitel_id else id end
  from public.profiles where id = auth.uid() and active
$$;

-- Vyhodnocení testu / checklistu na serveru (klient nemůže výsledek podvrhnout)
create or replace function public.eval_form(qs jsonb, ans jsonb, thr int,
  out score int, out passed boolean, out wrong jsonb)
language plpgsql immutable as $$
declare
  q jsonb; a jsonb; good boolean; total int := 0; ok int := 0; crit boolean := false;
  correct_ids jsonb; given jsonb;
begin
  wrong := '[]'::jsonb;
  for q in select value from jsonb_array_elements(coalesce(qs, '[]'::jsonb)) loop
    if q->>'type' = 'note' then continue; end if;
    total := total + 1;
    a := coalesce(ans, '{}'::jsonb) -> (q->>'id');
    good := false;
    if q->>'type' = 'single' then
      good := a is not null and jsonb_typeof(a) = 'string' and exists (
        select 1 from jsonb_array_elements(coalesce(q->'options','[]'::jsonb)) o
        where o.value->>'id' = (a #>> '{}') and coalesce((o.value->>'correct')::boolean, false));
    elsif q->>'type' = 'multi' then
      select coalesce(jsonb_agg(o.value->>'id' order by o.value->>'id'), '[]'::jsonb) into correct_ids
        from jsonb_array_elements(coalesce(q->'options','[]'::jsonb)) o
        where coalesce((o.value->>'correct')::boolean, false);
      if a is not null and jsonb_typeof(a) = 'array' then
        select coalesce(jsonb_agg(x order by x), '[]'::jsonb) into given from jsonb_array_elements_text(a) x;
        good := given = correct_ids;
      end if;
    elsif q->>'type' = 'yesno' then
      good := a is not null and (a #>> '{}') in ('yes','no')
              and ((a #>> '{}') = 'yes') = coalesce((q->>'correctYes')::boolean, true);
    end if;
    if good then ok := ok + 1;
    else
      wrong := wrong || to_jsonb(q->>'id');
      if coalesce((q->>'critical')::boolean, false) then crit := true; end if;
    end if;
  end loop;
  score  := case when total = 0 then 100 else round(ok * 100.0 / total)::int end;
  passed := score >= coalesce(thr, 80) and not crit;
end $$;

-- Stav nováčka pro skenování (instruktor nevidí záznamy kolegů, ale potřebuje vědět,
-- zda už test existuje a zda byl nováček v procesu zaškolen)
create or replace function public.mdt_status(p_mdt text, p_tile text)
returns jsonb language sql stable security definer set search_path = public as $$
  select case when public.my_role() is null then null else jsonb_build_object(
    'testAt',  (select data->>'at' from public.tests where id = p_tile || '__' || p_mdt),
    'clDone',  (select data->>'status' = 'done' from public.checklists where id = p_tile || '__' || p_mdt),
    'trained', exists (select 1 from public.trainings t join public.tiles x on x.id = p_tile
                       where t.mdt = p_mdt and t.process_id = x.process_id)
  ) end
$$;

-- ---------- Triggery: identitu a výsledky určuje server ----------
create or replace function public.trg_record_identity() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  if public.my_role() is null then raise exception 'Nepřihlášený nebo deaktivovaný uživatel'; end if;
  new.instruktor_id := auth.uid();
  new.skolitel_id   := public.my_skolitel();
  if new.tile_id is not null then
    select process_id into new.process_id from public.tiles where id = new.tile_id;
  end if;
  return new;
end $$;

create or replace function public.trg_tests_insert() returns trigger
language plpgsql security definer set search_path = public as $$
declare t public.tiles; e record;
begin
  select * into t from public.tiles where id = new.tile_id;
  if t.id is null then raise exception 'Neznámá dlaždice'; end if;
  new.data := coalesce(new.data, '{}'::jsonb) || jsonb_build_object(
    'at', now(), 'questions', coalesce(t.data->'form'->'questions', '[]'::jsonb),
    'formVersion', coalesce((t.data->>'version')::int, 1), 'retrained', null);
  select * into e from public.eval_form(new.data->'questions', new.data->'answers', coalesce((t.data->'form'->>'threshold')::int, 80));
  new.data := new.data || jsonb_build_object('score', e.score, 'passed', e.passed, 'wrong', e.wrong);
  return new;
end $$;

create or replace function public.trg_tests_update() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- po odeslání lze změnit jen záznam o přeškolení
  new.data := old.data || jsonb_build_object('retrained', new.data->'retrained');
  new.mdt := old.mdt; new.tile_id := old.tile_id; new.process_id := old.process_id;
  new.instruktor_id := old.instruktor_id; new.skolitel_id := old.skolitel_id;
  return new;
end $$;

create or replace function public.trg_checklists_insert() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  new.data := coalesce(new.data, '{}'::jsonb) || jsonb_build_object('status', 'open', 'createdAt', now());
  return new;
end $$;

create or replace function public.trg_checklists_update() returns trigger
language plpgsql security definer set search_path = public as $$
declare t public.tiles; e record;
begin
  new.mdt := old.mdt; new.tile_id := old.tile_id; new.process_id := old.process_id;
  new.instruktor_id := old.instruktor_id; new.skolitel_id := old.skolitel_id;
  if old.data->>'status' = 'done' then
    new.data := old.data || jsonb_build_object('retrained', new.data->'retrained');
  elsif new.data->>'status' = 'done' then
    select * into t from public.tiles where id = old.tile_id;
    new.data := old.data || jsonb_build_object('answers', new.data->'answers', 'status', 'done', 'at', now(),
      'questions', coalesce(t.data->'form'->'questions', '[]'::jsonb),
      'formVersion', coalesce((t.data->>'version')::int, 1), 'retrained', null);
    select * into e from public.eval_form(new.data->'questions', new.data->'answers', coalesce((t.data->'form'->>'threshold')::int, 80));
    new.data := new.data || jsonb_build_object('score', e.score, 'passed', e.passed, 'wrong', e.wrong);
  else
    new.data := old.data || jsonb_build_object('answers', new.data->'answers');
  end if;
  return new;
end $$;

create or replace function public.trg_tiles_update() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  -- školitel smí měnit jen obsah (PDF, formulář), ne název, typ, ikonu ani pořadí
  if public.my_role() = 'skolitel' then
    new.process_id := old.process_id;
    new.data := new.data || jsonb_build_object('name', old.data->'name', 'type', old.data->'type',
                                               'icon', old.data->'icon', 'order', old.data->'order');
  end if;
  return new;
end $$;

create or replace function public.trg_audit_insert() returns trigger
language plpgsql security definer set search_path = public as $$
declare p public.profiles;
begin
  new.at := now();
  if auth.uid() is not null then  -- zápis z aplikace; serverová funkce (služební klíč) vyplňuje sama
    select * into p from public.profiles where id = auth.uid();
    new.by := auth.uid();
    new.data := coalesce(new.data, '{}'::jsonb) || jsonb_build_object('byName', p.name, 'role', p.role);
  end if;
  return new;
end $$;

drop trigger if exists t_trainings_identity on public.trainings;
create trigger t_trainings_identity before insert on public.trainings for each row execute function public.trg_record_identity();
drop trigger if exists t_tests_identity on public.tests;
create trigger t_tests_identity before insert on public.tests for each row execute function public.trg_record_identity();
drop trigger if exists t_tests_insert on public.tests;
create trigger t_tests_insert before insert on public.tests for each row execute function public.trg_tests_insert();
drop trigger if exists t_tests_update on public.tests;
create trigger t_tests_update before update on public.tests for each row execute function public.trg_tests_update();
drop trigger if exists t_checklists_identity on public.checklists;
create trigger t_checklists_identity before insert on public.checklists for each row execute function public.trg_record_identity();
drop trigger if exists t_checklists_insert on public.checklists;
create trigger t_checklists_insert before insert on public.checklists for each row execute function public.trg_checklists_insert();
drop trigger if exists t_checklists_update on public.checklists;
create trigger t_checklists_update before update on public.checklists for each row execute function public.trg_checklists_update();
drop trigger if exists t_tiles_update on public.tiles;
create trigger t_tiles_update before update on public.tiles for each row execute function public.trg_tiles_update();
drop trigger if exists t_audit_insert on public.audit;
create trigger t_audit_insert before insert on public.audit for each row execute function public.trg_audit_insert();

-- ---------- Pravidla přístupu (Row Level Security) ----------
alter table public.profiles   enable row level security;
alter table public.settings   enable row level security;
alter table public.processes  enable row level security;
alter table public.tiles      enable row level security;
alter table public.trainings  enable row level security;
alter table public.tests      enable row level security;
alter table public.checklists enable row level security;
alter table public.audit      enable row level security;

do $$ declare r record; begin
  for r in select policyname, tablename from pg_policies where schemaname = 'public'
    and tablename in ('profiles','settings','processes','tiles','trainings','tests','checklists','audit') loop
    execute format('drop policy %I on public.%I', r.policyname, r.tablename);
  end loop;
end $$;

-- profily: číst může každý přihlášený; zakládání a změny jen přes serverovou funkci admin-users
create policy profiles_read on public.profiles for select to authenticated using (public.my_role() is not null or id = auth.uid());

-- konfigurace: číst všichni, měnit admin (dlaždice i školitel – omezeno triggerem)
create policy settings_read  on public.settings  for select to authenticated using (public.my_role() is not null);
create policy settings_write on public.settings  for all    to authenticated using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
create policy processes_read  on public.processes for select to authenticated using (public.my_role() is not null);
create policy processes_write on public.processes for all    to authenticated using (public.my_role() = 'admin') with check (public.my_role() = 'admin');
create policy tiles_read   on public.tiles for select to authenticated using (public.my_role() is not null);
create policy tiles_insert on public.tiles for insert to authenticated with check (public.my_role() = 'admin');
create policy tiles_delete on public.tiles for delete to authenticated using (public.my_role() = 'admin');
create policy tiles_update on public.tiles for update to authenticated using (public.my_role() in ('admin','skolitel')) with check (public.my_role() in ('admin','skolitel'));

-- záznamy školení / testů / checklistů:
--   instruktor = své, školitel = svého týmu, admin = vše; mazat smí školitel (svůj tým) a admin
do $$ declare tb text; begin
  foreach tb in array array['trainings','tests','checklists'] loop
    execute format($f$create policy %1$s_read on public.%1$s for select to authenticated using (
      public.my_role() = 'admin' or instruktor_id = auth.uid() or (public.my_role() = 'skolitel' and skolitel_id = auth.uid()))$f$, tb);
    execute format($f$create policy %1$s_insert on public.%1$s for insert to authenticated with check (
      public.my_role() is not null and instruktor_id = auth.uid())$f$, tb);
    execute format($f$create policy %1$s_update on public.%1$s for update to authenticated using (
      public.my_role() = 'admin' or instruktor_id = auth.uid() or (public.my_role() = 'skolitel' and skolitel_id = auth.uid()))$f$, tb);
    execute format($f$create policy %1$s_delete on public.%1$s for delete to authenticated using (
      public.my_role() = 'admin' or (public.my_role() = 'skolitel' and skolitel_id = auth.uid()))$f$, tb);
  end loop;
end $$;
revoke update on public.trainings from authenticated;  -- záznam o školení se nemění, jen maže

-- historie změn
create policy audit_insert on public.audit for insert to authenticated with check (public.my_role() is not null);
create policy audit_read on public.audit for select to authenticated using (
  public.my_role() = 'admin' or by = auth.uid()
  or (public.my_role() = 'skolitel' and by in (select id from public.profiles where skolitel_id = auth.uid())));

grant execute on function public.mdt_status(text, text) to authenticated;

-- ---------- Úložiště PDF ----------
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('materials', 'materials', false, 52428800, array['application/pdf'])
on conflict (id) do update set public = false, file_size_limit = 52428800, allowed_mime_types = array['application/pdf'];

drop policy if exists materials_read   on storage.objects;
drop policy if exists materials_insert on storage.objects;
drop policy if exists materials_update on storage.objects;
drop policy if exists materials_delete on storage.objects;
create policy materials_read   on storage.objects for select to authenticated using (bucket_id = 'materials' and public.my_role() is not null);
create policy materials_insert on storage.objects for insert to authenticated with check (bucket_id = 'materials' and public.my_role() in ('admin','skolitel'));
create policy materials_update on storage.objects for update to authenticated using (bucket_id = 'materials' and public.my_role() in ('admin','skolitel'));
create policy materials_delete on storage.objects for delete to authenticated using (bucket_id = 'materials' and public.my_role() in ('admin','skolitel'));

-- ---------- Živé aktualizace (realtime) ----------
do $$ declare tb text; begin
  foreach tb in array array['profiles','settings','processes','tiles','trainings','tests','checklists','audit'] loop
    begin
      execute format('alter publication supabase_realtime add table public.%I', tb);
    exception when duplicate_object then null; when undefined_object then null;
    end;
  end loop;
end $$;
