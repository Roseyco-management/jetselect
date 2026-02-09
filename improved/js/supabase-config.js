// Supabase Configuration
// Vite automatically loads .env.local and exposes VITE_ prefixed variables
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://qwsnxkmiubhgbhwglpgu.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3c254a21pdWJoZ2Jod2dscGd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NTIzNDcsImV4cCI6MjA4NjIyODM0N30.0JUoOj0aPTGUM87sO5HQJCvWwxYWYJd6AcdCaYqLpJw';

// Initialize Supabase client
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper function to get metadata for form submissions
function getSubmissionMetadata() {
    return {
        ip_address: null, // Will be set by Supabase edge function if needed
        user_agent: navigator.userAgent,
        referrer: document.referrer || null
    };
}
