// Nastavení připojení k Supabase (Project Settings → API Keys).
// Publishable klíč je veřejný z principu – data chrání pravidla v databázi (schema.sql).
// NIKDY sem nevkládejte secret klíč (sb_secret_…) ani service_role.
window.SKOLENI_CONFIG = {
  SUPABASE_URL: "https://rnxvmtpdvvpbjtxwbzlo.supabase.co",
  SUPABASE_ANON_KEY: "sb_publishable_so2L2r2avH3JXHjWJAfqWA_HnsIv6_7",
  LOGIN_DOMAIN: "skoleni.local"   // musí odpovídat LOGIN_DOMAIN v supabase/functions/admin-users/index.ts
};
