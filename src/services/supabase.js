import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://pozinqxsdxzydybbsdwr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBvemlucXhzZHh6eWR5YmJzZHdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczMTg0NTEsImV4cCI6MjAyMjg5NDQ1MX0.tTK21wTpNH6Qf-rDckQUs0tog7AVu35j2t8tFSJzLUk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
