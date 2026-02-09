-- Create tool_submissions table for storing calculator and tool form submissions
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/qwsnxkmiubhgbhwglpgu/editor

CREATE TABLE IF NOT EXISTS tool_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    tool_type VARCHAR(100) NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    inputs JSONB NOT NULL,
    results JSONB NOT NULL,
    submitted_at TIMESTAMPTZ DEFAULT NOW(),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_tool_submissions_tool_type ON tool_submissions(tool_type);
CREATE INDEX IF NOT EXISTS idx_tool_submissions_email ON tool_submissions(email);
CREATE INDEX IF NOT EXISTS idx_tool_submissions_submitted_at ON tool_submissions(submitted_at DESC);

-- Add RLS (Row Level Security) policies
ALTER TABLE tool_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anonymous inserts (for form submissions)
CREATE POLICY "Allow anonymous inserts" ON tool_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Policy: Allow authenticated users to read all submissions
CREATE POLICY "Allow authenticated reads" ON tool_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Add comments for documentation
COMMENT ON TABLE tool_submissions IS 'Stores all submissions from interactive tools (calculators, configurators, etc.)';
COMMENT ON COLUMN tool_submissions.tool_type IS 'Type of tool: operating_cost_calculator, financing_calculator, etc.';
COMMENT ON COLUMN tool_submissions.inputs IS 'User input data (aircraft type, hours, budget, etc.)';
COMMENT ON COLUMN tool_submissions.results IS 'Calculated results or configuration output';
COMMENT ON COLUMN tool_submissions.submitted_at IS 'Timestamp when user submitted the form';
