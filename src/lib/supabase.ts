import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

<<<<<<< HEAD
export const supabase = createClient(supabaseUrl, supabaseAnonKey) 
=======
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
}) 
>>>>>>> 98c9c67ead9145d502e89e9ef460bf7512025a66
