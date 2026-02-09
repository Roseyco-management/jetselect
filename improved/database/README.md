# JetSelect Database Setup

This directory contains database migrations and documentation for the JetSelect Supabase database.

## Setup Instructions

### 1. Access Supabase Dashboard

Navigate to: https://supabase.com/dashboard/project/qwsnxkmiubhgbhwglpgu/editor

### 2. Run Migrations

Execute the SQL files in the `migrations/` directory in order:

1. **001_create_tool_submissions.sql** - Creates the `tool_submissions` table for storing calculator and tool form submissions

To run a migration:
- Open the Supabase SQL Editor
- Copy the contents of the migration file
- Paste into the editor
- Click "Run"

### 3. Verify Tables

After running migrations, verify tables exist:

```sql
SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public';
```

## Database Tables

### tool_submissions

Stores all submissions from interactive tools (calculators, configurators, etc.)

**Columns:**
- `id` (UUID) - Primary key
- `tool_type` (VARCHAR) - Type of tool (e.g., 'operating_cost_calculator', 'financing_calculator')
- `name` (VARCHAR) - User's name
- `email` (VARCHAR) - User's email
- `phone` (VARCHAR) - User's phone (optional)
- `inputs` (JSONB) - User input data (aircraft type, hours, budget, etc.)
- `results` (JSONB) - Calculated results or configuration output
- `submitted_at` (TIMESTAMPTZ) - When the user submitted the form
- `created_at` (TIMESTAMPTZ) - When the record was created

**Indexes:**
- `idx_tool_submissions_tool_type` - For filtering by tool type
- `idx_tool_submissions_email` - For looking up submissions by email
- `idx_tool_submissions_submitted_at` - For sorting by submission date

**Row Level Security (RLS):**
- Anonymous users can INSERT (submit forms)
- Authenticated users can SELECT (read all submissions)

## Querying Data

### Get all operating cost calculator submissions

```sql
SELECT
    name,
    email,
    phone,
    inputs->>'aircraft' as aircraft,
    inputs->>'annual_hours' as annual_hours,
    results->>'totalAnnualCost' as total_cost,
    submitted_at
FROM tool_submissions
WHERE tool_type = 'operating_cost_calculator'
ORDER BY submitted_at DESC;
```

### Get submission statistics by tool type

```sql
SELECT
    tool_type,
    COUNT(*) as submission_count,
    MIN(submitted_at) as first_submission,
    MAX(submitted_at) as latest_submission
FROM tool_submissions
GROUP BY tool_type
ORDER BY submission_count DESC;
```

### Get high-value leads (>€1M annual costs)

```sql
SELECT
    name,
    email,
    phone,
    inputs->>'aircraft' as aircraft,
    (results->>'totalAnnualCost')::numeric as annual_cost,
    submitted_at
FROM tool_submissions
WHERE
    tool_type = 'operating_cost_calculator'
    AND (results->>'totalAnnualCost')::numeric > 1000000
ORDER BY (results->>'totalAnnualCost')::numeric DESC;
```

## Maintenance

### Backup Data

```sql
-- Export to CSV
COPY tool_submissions TO '/path/to/backup.csv' WITH CSV HEADER;
```

### Delete Old Test Submissions

```sql
-- Delete submissions older than 90 days (adjust as needed)
DELETE FROM tool_submissions
WHERE submitted_at < NOW() - INTERVAL '90 days';
```

## Environment Variables

Make sure your `.env.local` file contains:

```
VITE_SUPABASE_URL=https://qwsnxkmiubhgbhwglpgu.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

These are loaded by `js/supabase-config.js` and used by the calculator pages.
