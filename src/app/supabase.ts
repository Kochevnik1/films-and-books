import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lujzsrzfetwkdqxrfuij.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1anpzcnpmZXR3a2RxeHJmdWlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIzNjcxNjgsImV4cCI6MjAxNzk0MzE2OH0.o57C1oPKBmt4IlmM5l26Iv3bzTIOmFPojU2hlRRhWHI';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
