const {createClient} = require("@supabase/supabase-js");

const { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY } = process.env;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
    throw new Error(
        "Missing Supabase configuration. Set SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY in backend/.env."
    );
}

const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false,
        }
    }
);

module.exports = supabase;