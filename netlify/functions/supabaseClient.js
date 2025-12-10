const { createClient } = require('@supabase/supabase-js');

// Server-side Supabase client for Netlify functions.
// Uses the explicit project URL and reads a service key from env vars.
const SUPABASE_URL = 'https://pxxckrnupzsmqdvqtlgn.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

if (!SUPABASE_KEY) {
  console.warn('Warning: SUPABASE_KEY / SUPABASE_SERVICE_ROLE_KEY is not set. Server-side Supabase operations will fail until the key is configured in environment variables.');
}

const supabaseAdmin = createClient(SUPABASE_URL, SUPABASE_KEY, {
  // This client will be used server-side; disable realtime websockets.
  realtime: { enabled: false },
});

module.exports = supabaseAdmin;
