import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nhdvtqhrifwnpwiaknnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oZHZ0cWhyaWZ3bnB3aWFrbm5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NDA2MjksImV4cCI6MjA2NjQxNjYyOX0.ns0UADfRUy8qFawRurcj6dkILWMVUR1tTRVou_o1JKw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
