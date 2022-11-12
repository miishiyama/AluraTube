import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://zaaehcvkxlaiupwgtlwm.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InphYWVoY3ZreGxhaXVwd2d0bHdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDE0ODcsImV4cCI6MTk4Mzc3NzQ4N30.eFugIJljcG9sQUvfQ46slugJsFmzujAiW9rMiYPr2yc";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase
                .from("video")
                .select("*");
        },
    };
};