# Školicí centrum CZDC

Webová aplikace pro školení nováčků ve skladu Rossmann CZDC – instruktor (tablet), školitel a admin (PC).

- Frontend: statická stránka (`index.html`, `app.js`, `styles.css`) hostovaná na GitHub Pages
- Data, přihlášení a PDF: Supabase (`supabase/schema.sql`, `supabase/seed.sql`, funkce `supabase/functions/admin-users`)
- Nasazení krok za krokem: [NAVOD.md](NAVOD.md)

Do `config.js` patří jen **Project URL** a veřejný klíč **anon**. Klíč `service_role` sem nikdy nedávejte.
