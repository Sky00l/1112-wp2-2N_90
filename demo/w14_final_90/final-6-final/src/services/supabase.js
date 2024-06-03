import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ophlhndtmgrbqpyaatag.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGxobmR0bWdyYnFweWFhdGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzNDcsImV4cCI6MTk5MjAzNTM0N30.ZuXrcaVq24uc7FVKJ-pHR3ViZ5-FwPRtUMziGxayW7Y";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// https://dclaevazetcjjkrzczpc.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY