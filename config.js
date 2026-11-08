// Nastavení připojení k Supabase. Hodnoty najdete v Supabase:
// Project Settings → API (Project URL a klíč "anon public").
// Klíč "anon" je veřejný z principu – data chrání pravidla v databázi (schema.sql).
// NIKDY sem nevkládejte klíč "service_role".
window.SKOLENI_CONFIG = {
  SUPABASE_URL: "https://VAS-PROJEKT.supabase.co",
  SUPABASE_ANON_KEY: "VLOZTE-ANON-KLIC",
  LOGIN_DOMAIN: "skoleni.local"   // musí odpovídat LOGIN_DOMAIN v supabase/functions/admin-users/index.ts
};
