# Školicí centrum CZDC – nasazení (Supabase + GitHub Pages)

Aplikace je obyčejná webová stránka (soubory `index.html`, `app.js`, `styles.css`, `config.js`).
Data, přihlašování a PDF drží **Supabase**. Stránku hostuje **GitHub Pages**. Žádný vlastní server není potřeba.

Celé nastavení zabere asi 30–45 minut. Postupujte v tomto pořadí.

---

## Co je v balíčku

| Soubor | K čemu je |
|---|---|
| `index.html`, `app.js`, `styles.css` | samotná aplikace |
| `config.js` | adresa a veřejný klíč vašeho Supabase projektu (doplníte v kroku 6) |
| `.nojekyll` | technický soubor pro GitHub Pages, nechte ho tam |
| `supabase/schema.sql` | databáze: tabulky, pravidla přístupu, výpočet výsledků testů |
| `supabase/seed.sql` | výchozí obsah: 9 procesů, dlaždice, ukázkový test a checklist pro Pick v PT |
| `supabase/functions/admin-users/index.ts` | serverová funkce pro zakládání uživatelů, změnu hesla a deaktivaci |

---

## Část A – Supabase

### 1. Založte projekt
1. Na [supabase.com](https://supabase.com) se přihlaste (ideálně firemním e-mailem) a dejte **New project**.
2. **Region: Central EU (Frankfurt)** – kvůli GDPR musí data zůstat v EU.
3. Zvolte silné heslo databáze a uložte si ho (do aplikace ho nezadáváte).

### 2. Nastavte přihlašování
**Authentication → Sign In / Providers → Email**
- **Enable Email provider:** zapnuto
- **Confirm email:** **vypnout** (aplikace nepoužívá skutečné e-maily)

**Authentication → Sign In / Providers** (nebo **Auth settings**)
- **Allow new users to sign up:** **vypnout** – účty zakládá jen admin a školitelé přímo v aplikaci.

### 3. Vytvořte databázi
**SQL Editor → New query**
1. Vložte celý obsah `supabase/schema.sql` → **Run**. Má skončit hláškou *Success*.
2. Nový dotaz, vložte `supabase/seed.sql` → **Run**.

### 4. Nasaďte serverovou funkci pro správu uživatelů
**Edge Functions → Deploy a new function → Via Editor**
1. Název funkce: **`admin-users`** (přesně takto).
2. Obsah editoru nahraďte celým souborem `supabase/functions/admin-users/index.ts`.
3. **Deploy function**. Volbu *Verify JWT* nechte zapnutou.

### 5. Vytvořte prvního administrátora
1. **Authentication → Users → Add user → Create new user**
   - Email: `admin@skoleni.local` (část před `@` je přihlašovací jméno v aplikaci)
   - Password: silné heslo
   - **Auto Confirm User:** zaškrtnout
2. U nového uživatele zkopírujte **User UID**.
3. **SQL Editor → New query** a spusťte (UID a jméno nahraďte):
   ```sql
   insert into public.profiles (id, login, name, role)
   values ('SEM-VLOZTE-USER-UID', 'admin', 'Jméno Příjmení', 'admin');
   ```
Další uživatele (školitele, instruktory) už zakládáte přímo v aplikaci.

### 6. Opište připojení do `config.js`
**Project Settings → API**
- **Project URL** → do `SUPABASE_URL`
- klíč **anon public** → do `SUPABASE_ANON_KEY`

> Klíč *anon* je veřejný z principu, data chrání pravidla v databázi.
> **Klíč `service_role` nikdy nevkládejte do `config.js` ani nikam na GitHub.**

---

## Část B – GitHub Pages

### 7. Nahrajte aplikaci na GitHub
1. Na [github.com](https://github.com) → **New repository**, název např. `skolici-centrum`.
2. **Add file → Upload files** a nahrajte: `index.html`, `app.js`, `styles.css`, `config.js`, `.nojekyll`
   (složku `supabase` nahrávat nemusíte – je jen pro nastavení databáze).
3. **Commit changes**.

> **Veřejný nebo soukromý repozitář?** GitHub Pages ze *soukromého* repozitáře vyžaduje placený GitHub (Pro/Team).
> Veřejný repozitář je v pořádku: v kódu nejsou žádná hesla ani data, jen veřejný klíč. Data jsou v Supabase za přihlášením.
> Pokud chcete repozitář soukromý zdarma, místo GitHub Pages použijte **Netlify** nebo **Cloudflare Pages** (napojí se na GitHub stejně jednoduše).

### 8. Zapněte stránku
**Settings → Pages**
- **Source:** Deploy from a branch
- **Branch:** `main`, složka `/ (root)` → **Save**

Za 1–2 minuty bude aplikace na adrese `https://VAS-UCET.github.io/skolici-centrum/`.

---

## Část C – První spuštění

1. Otevřete adresu, zvolte jazyk a přihlaste se jako `admin`.
2. **Uživatelé** → založte školitele (role Školitel).
3. Školitelé se přihlásí a v sekci **Instruktoři** založí své instruktory.
4. U každého procesu přes tužku nahrajte PDF (CZ a UA) a upravte test a checklist.
   Ukázkový test a checklist u **Pick v PT** před ostrým použitím zkontrolujte nebo nahraďte.
5. Na tabletu otevřete adresu v Chrome a dejte **Přidat na plochu** – aplikace se pak spouští jako ikona.

**Skenování:** tlačítko **Skenovat kamerou** použije zadní kameru tabletu (při prvním použití povolte přístup ke kameře).
Funguje i Bluetooth/USB čtečka čárových kódů – stačí mít kurzor v poli pro osobní číslo.

---

## Provoz

| Téma | Doporučení |
|---|---|
| **Tarif** | Pilot: Free. Ostrý provoz: **Pro** – bezplatný projekt se po týdnu nečinnosti uspí a nemá denní zálohy. |
| **GDPR** | Osobní čísla a výsledky testů jsou osobní údaje. Region EU, v Supabase si stáhněte a nechte podepsat **DPA** (smlouvu o zpracování). Před ostrým provozem odsouhlasit s IT / pověřencem. |
| **Zálohy** | Tarif Pro má denní zálohy. Export přehledu do Excelu je v aplikaci (Přehledy → Export). |
| **Úpravy aplikace** | Změněný soubor nahrajte na GitHub (Upload files) – stránka se sama aktualizuje do 1–2 minut. |
| **Změna databáze** | `schema.sql` lze spustit znovu, data nesmaže. |

## Co hlídá databáze (nejde obejít z prohlížeče)
- Instruktor vidí jen své záznamy, školitel záznamy svých instruktorů, admin vše.
- Výsledek testu a checklistu (body, prošel/neprošel, chybné otázky) **počítá databáze** z uložených otázek – nelze ho podvrhnout.
- Test lze odeslat jen jednou na osobní číslo; po odeslání se dá změnit jen záznam o přeškolení.
- Dokončený checklist je zamčený.
- Školitel může u dlaždic měnit jen obsah (PDF, otázky), ne název, typ, ikonu ani pořadí. Procesy spravuje jen admin.
- Účty zakládá a deaktivuje jen serverová funkce: admin kohokoli, školitel jen své instruktory.

## Když něco nejde
| Problém | Řešení |
|---|---|
| „Aplikace není nastavená“ | Doplňte `config.js` (krok 6) a nahrajte ho znovu na GitHub. |
| „Tento účet nemá v aplikaci profil“ | U prvního admina chybí řádek v `profiles` (krok 5.3). |
| Zakládání uživatelů hlásí chybu | Zkontrolujte, že funkce se jmenuje přesně `admin-users` a je nasazená (krok 4). |
| Přihlášení nejde, i když heslo sedí | Ověřte, že je vypnuté *Confirm email* (krok 2). |
| Kamera se nespustí | Stránka musí běžet přes `https://` (GitHub Pages ano). V prohlížeči povolte kameru pro tuto stránku. |
| Aplikace po týdnu „spí“ | Free tarif uspává neaktivní projekty – v Supabase dejte *Restore project*, pro provoz přejděte na Pro. |
