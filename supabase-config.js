const SUPABASE_URL = "https://dtqlnkyeiqmozypapjnc.supabase.co";

const SUPABASE_ANON_KEY = "sb_publishable_oVc4sLz6k3cB3ILthZRWVg_8F6Re6PO";

const supabaseClient = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;
