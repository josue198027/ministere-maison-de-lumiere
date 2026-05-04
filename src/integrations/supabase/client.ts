import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ziexlbffekeipezagvkq.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppZXhsYmZmZWtlaXBlemFndmtxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY2NjY4NjAsImV4cCI6MjA4MjI0Mjg2MH0.o0dfFXt4nZxB6wYQTIlJ-9Q80u5sp5zq1XGpFHYmaYI'

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Import the supabase client like this:
// For React:
// import { supabase } from "@/integrations/supabase/client";
// For React Native:
// import { supabase } from "@/src/integrations/supabase/client";
