// src/plugins/supaBaseClient.ts
import {createClient} from '@supabase/supabase-js';

const supaBaseClient = createClient("https://vjscubdslsskiromsajp.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqc2N1YmRzbHNza2lyb21zYWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ2ODA2MDgsImV4cCI6MjAyMDI1NjYwOH0.VsDs-4onIawwxq6z1Opo-xvOMOd4rUbTzxRSJgN_UDs");

export default supaBaseClient;
