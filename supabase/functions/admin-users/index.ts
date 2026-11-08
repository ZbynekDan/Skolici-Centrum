// Školicí centrum CZDC – správa uživatelů (Supabase Edge Function "admin-users")
// Zakládání účtů, změna hesla a (de)aktivace. Běží na serveru se služebním klíčem,
// oprávnění volajícího se kontroluje zde:
//   admin    – může vše
//   skolitel – jen instruktory, kteří patří pod něj
import { createClient } from "npm:@supabase/supabase-js@2.117.3";

const LOGIN_DOMAIN = "skoleni.local"; // musí odpovídat config.js (LOGIN_DOMAIN)

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
// Nové klíče Supabase (sb_secret_…) přicházejí v SUPABASE_SECRET_KEYS jako JSON {název: klíč};
// starší projekty mají SUPABASE_SERVICE_ROLE_KEY.
function secretKey(): string | undefined {
  const raw = Deno.env.get("SUPABASE_SECRET_KEYS");
  if (raw) {
    try { const keys = JSON.parse(raw); return keys.default ?? Object.values(keys)[0] as string; } catch { /* fall through */ }
  }
  return Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? undefined;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { ...cors, "Content-Type": "application/json" } });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Použijte POST." }, 405);

  const url = Deno.env.get("SUPABASE_URL")!;
  const service = secretKey();
  if (!service) return json({ error: "Funkci chybí serverový klíč (SUPABASE_SECRET_KEYS)." }, 500);
  const token = (req.headers.get("Authorization") ?? "").replace(/^Bearer\s+/i, "");

  const admin = createClient(url, service, { auth: { persistSession: false, autoRefreshToken: false } });
  // ověření přihlášeného uživatele podle jeho přihlašovacího tokenu
  if (!token) return json({ error: "Nejste přihlášen." }, 401);
  const { data: { user } } = await admin.auth.getUser(token);
  if (!user) return json({ error: "Nejste přihlášen." }, 401);
  const { data: me } = await admin.from("profiles").select("*").eq("id", user.id).single();
  if (!me || !me.active || !["admin", "skolitel"].includes(me.role)) return json({ error: "Nemáte oprávnění spravovat uživatele." }, 403);

  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return json({ error: "Neplatný požadavek." }, 400); }

  const canManage = (target: { role: string; skolitel_id: string | null }) =>
    me.role === "admin" || (target.role === "instruktor" && target.skolitel_id === me.id);

  async function audit(action: string, detail: string) {
    await admin.from("audit").insert({ id: crypto.randomUUID(), by: me.id, data: { byName: me.name, role: me.role, action, detail } });
  }

  if (body.action === "create") {
    const login = String(body.login ?? "").trim().toLowerCase();
    const name = String(body.name ?? "").trim();
    const password = String(body.password ?? "");
    let role = String(body.role ?? "instruktor");
    let skolitelId = (body.skolitel_id as string) || null;
    if (me.role === "skolitel") { role = "instruktor"; skolitelId = me.id; }
    if (!/^[a-z0-9._-]{3,40}$/.test(login)) return json({ error: "Přihlašovací jméno: 3–40 znaků, jen malá písmena bez diakritiky, číslice, tečka, pomlčka." }, 400);
    if (!name || password.length < 6) return json({ error: "Vyplňte jméno a heslo (aspoň 6 znaků)." }, 400);
    if (!["admin", "skolitel", "instruktor"].includes(role)) return json({ error: "Neplatná role." }, 400);
    if (role !== "instruktor") skolitelId = null;

    const { data: exists } = await admin.from("profiles").select("id").eq("login", login).maybeSingle();
    if (exists) return json({ error: "Toto přihlašovací jméno už existuje." }, 409);

    const { data: created, error } = await admin.auth.admin.createUser({ email: `${login}@${LOGIN_DOMAIN}`, password, email_confirm: true });
    if (error || !created.user) return json({ error: "Účet se nepodařilo vytvořit: " + (error?.message ?? "") }, 400);
    const { error: pErr } = await admin.from("profiles").insert({ id: created.user.id, login, name, role, skolitel_id: skolitelId, active: true });
    if (pErr) { await admin.auth.admin.deleteUser(created.user.id); return json({ error: "Profil se nepodařilo uložit: " + pErr.message }, 400); }
    await audit("Nový uživatel", `${name} (${role})`);
    return json({ ok: true, id: created.user.id });
  }

  const targetId = String(body.id ?? "");
  const { data: target } = await admin.from("profiles").select("*").eq("id", targetId).single();
  if (!target) return json({ error: "Uživatel nenalezen." }, 404);
  if (!canManage(target)) return json({ error: "Tohoto uživatele nemůžete spravovat." }, 403);

  if (body.action === "set_password") {
    const password = String(body.password ?? "");
    if (password.length < 6) return json({ error: "Heslo musí mít aspoň 6 znaků." }, 400);
    const { error } = await admin.auth.admin.updateUserById(targetId, { password });
    if (error) return json({ error: error.message }, 400);
    await audit("Změna hesla", target.name);
    return json({ ok: true });
  }

  if (body.action === "set_active") {
    if (targetId === me.id) return json({ error: "Sami sebe deaktivovat nemůžete." }, 400);
    const active = Boolean(body.active);
    await admin.from("profiles").update({ active }).eq("id", targetId);
    await admin.auth.admin.updateUserById(targetId, { ban_duration: active ? "none" : "876000h" });
    await audit(active ? "Aktivace uživatele" : "Deaktivace uživatele", target.name);
    return json({ ok: true });
  }

  return json({ error: "Neznámá akce." }, 400);
});
