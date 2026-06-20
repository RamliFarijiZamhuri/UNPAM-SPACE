const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Validasi environment variables
if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SECRET_KEY in .env');
}

// Pakai service_role key di backend — JANGAN pernah expose ke frontend
// RLS dimatikan, backend memegang kendali penuh
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SECRET_KEY
);

module.exports = supabase;