import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ophlhndtmgrbqpyaatag.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9waGxobmR0bWdyYnFweWFhdGFnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY0NTkzNDcsImV4cCI6MTk5MjAzNTM0N30.ZuXrcaVq24uc7FVKJ-pHR3ViZ5-FwPRtUMziGxayW7Y'
);
