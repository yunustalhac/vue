import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supaBaseClient = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

