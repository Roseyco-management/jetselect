# Operating Cost Calculator - Deployment Checklist

## Pre-Deployment

### 1. Database Setup
- [ ] Open Supabase dashboard: https://supabase.com/dashboard/project/qwsnxkmiubhgbhwglpgu/editor
- [ ] Copy SQL from `database/migrations/001_create_tool_submissions.sql`
- [ ] Execute in SQL Editor
- [ ] Verify table created: `SELECT * FROM tool_submissions LIMIT 1;`
- [ ] Test RLS policies: Anonymous INSERT, Authenticated SELECT

### 2. Environment Variables
- [ ] Verify `.env.local` exists
- [ ] Check VITE_SUPABASE_URL is correct
- [ ] Check VITE_SUPABASE_ANON_KEY is correct
- [ ] DO NOT commit `.env.local` to git

### 3. Local Testing
```bash
# Start dev server
npm run dev

# Test calculator
open http://localhost:5173/tools/operating-cost-calculator/

# Test checklist:
- [ ] Page loads without errors
- [ ] All 8 aircraft selections work
- [ ] Changing hours updates calculations
- [ ] All 7 cost categories display
- [ ] Cost bars animate
- [ ] Total cost displays correctly
- [ ] Lead form appears
- [ ] Form validation works
- [ ] Submit button disables during submission
```

### 4. Test Form Submission
- [ ] Fill out lead form with test data
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check Supabase for new record:
```sql
SELECT * FROM tool_submissions ORDER BY submitted_at DESC LIMIT 1;
```

## Deployment

### 5. Build for Production
```bash
# Build optimized version
npm run build

# Verify build
ls -lh dist/tools/operating-cost-calculator/
```

### 6. Upload to Server
- [ ] Upload `dist/` contents to production server
- [ ] Verify URL structure: `https://jetselect.nl/tools/operating-cost-calculator/`
- [ ] Check file permissions (readable by web server)

### 7. DNS & SSL
- [ ] Verify HTTPS enabled
- [ ] Check SSL certificate valid
- [ ] Test URL loads: `curl -I https://jetselect.nl/tools/operating-cost-calculator/`

## Post-Deployment Testing

### 8. Functional Testing
Production URL: https://jetselect.nl/tools/operating-cost-calculator/

- [ ] Page loads (no 404/500 errors)
- [ ] All images load
- [ ] Fonts load correctly (Playfair Display, Poppins)
- [ ] Calculator functions work
- [ ] All 8 aircraft options available
- [ ] Cost calculations accurate
- [ ] Lead form appears
- [ ] Form submission works

### 9. Mobile Testing
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Responsive layout works
- [ ] Form inputs work on mobile
- [ ] Touch interactions smooth

### 10. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### 11. SEO Verification
- [ ] View page source, verify meta tags present
- [ ] Test with Google Rich Results: https://search.google.com/test/rich-results
- [ ] Verify Schema.org markup valid
- [ ] Check robots.txt allows crawling
- [ ] Submit to Google Search Console

### 12. Tracking Verification

**Meta Pixel:**
- [ ] Install Meta Pixel Helper extension
- [ ] Load calculator page
- [ ] Verify PageView event fires
- [ ] Make calculation
- [ ] Verify ViewContent event fires
- [ ] Submit lead form
- [ ] Verify Lead event fires

**Google Analytics:**
- [ ] Open GA Debugger
- [ ] Load page, verify pageview
- [ ] Submit form, verify conversion
- [ ] Check Real-Time reports in GA

**Microsoft Clarity:**
- [ ] Verify session recording starts
- [ ] Check heatmap data after 24 hours

### 13. Database Monitoring
```sql
-- Check submissions are being saved
SELECT
    COUNT(*) as total_submissions,
    MAX(submitted_at) as latest_submission
FROM tool_submissions
WHERE tool_type = 'operating_cost_calculator';

-- Check for errors (null values, malformed JSON)
SELECT *
FROM tool_submissions
WHERE
    tool_type = 'operating_cost_calculator'
    AND (
        inputs IS NULL
        OR results IS NULL
        OR name IS NULL
        OR email IS NULL
    );
```

## Marketing Launch

### 14. Content Preparation
- [ ] Write announcement email (see MARKETING.md)
- [ ] Create social media posts (LinkedIn, Instagram)
- [ ] Prepare blog post: "Introducing Our Cost Calculator"
- [ ] Design social media graphics
- [ ] Record video tutorial (optional)

### 15. Distribution Channels
- [ ] Send email to existing customer list
- [ ] Post on LinkedIn company page
- [ ] Post on Instagram
- [ ] Submit to aviation forums/communities
- [ ] Update website navigation (add link to calculator)
- [ ] Add to email signatures

### 16. Paid Advertising (Optional)
- [ ] Set up Google Ads campaign
- [ ] Create Meta Ads (Facebook/Instagram)
- [ ] Set daily budget: €50-100
- [ ] Define target audience
- [ ] Create conversion tracking

## Monitoring & Optimization

### 17. Week 1 Metrics
After 7 days, check:
- [ ] Total page views
- [ ] Unique visitors
- [ ] Lead form submissions
- [ ] Conversion rate (views → submissions)
- [ ] Average cost calculated
- [ ] Most popular aircraft

Query for Week 1 report:
```sql
SELECT
    COUNT(DISTINCT email) as unique_leads,
    COUNT(*) as total_calculations,
    inputs->>'aircraft' as aircraft,
    COUNT(*) as selections,
    AVG((results->>'totalAnnualCost')::numeric) as avg_cost
FROM tool_submissions
WHERE
    tool_type = 'operating_cost_calculator'
    AND submitted_at >= CURRENT_DATE - INTERVAL '7 days'
GROUP BY inputs->>'aircraft'
ORDER BY selections DESC;
```

### 18. Lead Follow-up
- [ ] Set up auto-reply email
- [ ] Assign leads to sales team
- [ ] Track lead quality (how many convert to meetings)
- [ ] Create follow-up sequence (see MARKETING.md)

### 19. User Feedback
- [ ] Monitor support emails for calculator issues
- [ ] Check social media comments
- [ ] Review Clarity session recordings
- [ ] Identify common user patterns
- [ ] Note frequent questions

### 20. Optimization
Based on Week 1 data:
- [ ] A/B test form headline
- [ ] Adjust aircraft order if needed
- [ ] Add clarifying text to confusing fields
- [ ] Fix any reported bugs
- [ ] Improve mobile experience if issues found

## Maintenance

### Monthly Tasks
- [ ] Check database for growth (disk space)
- [ ] Review top-performing aircraft
- [ ] Export lead data for CRM
- [ ] Update cost data if market changes
- [ ] Check tracking still works (pixels/GA)

### Quarterly Tasks
- [ ] Review and update aircraft cost data
- [ ] Add new aircraft models if available
- [ ] Refresh fuel prices (if significant market changes)
- [ ] Update crew salary data
- [ ] Review and optimize ad campaigns

### Annual Tasks
- [ ] Full cost data review (all aircraft)
- [ ] Update year references (2026 → 2027)
- [ ] Refresh design if needed
- [ ] Review ROI and adjust strategy

## Troubleshooting

### Issue: Form submissions not saving
**Check:**
1. Console errors in browser
2. Network tab for failed API calls
3. Supabase table exists
4. RLS policies correct
5. Supabase anon key valid

**Fix:**
```sql
-- Verify RLS policies
SELECT * FROM pg_policies WHERE tablename = 'tool_submissions';

-- Test manual insert
INSERT INTO tool_submissions (tool_type, name, email, inputs, results)
VALUES (
    'operating_cost_calculator',
    'Test User',
    'test@example.com',
    '{"aircraft": "Citation CJ3+"}',
    '{"totalAnnualCost": 725000}'
);
```

### Issue: Tracking not firing
**Check:**
1. Meta Pixel ID correct (2158285721691560)
2. Google Analytics ID correct (G-8GN5XT44Y5)
3. Scripts loaded (check Network tab)
4. Ad blockers disabled for testing

**Fix:**
- Verify script tags in `<head>`
- Test with incognito/private window
- Use browser extensions (Pixel Helper, GA Debugger)

### Issue: Calculator not updating
**Check:**
1. JavaScript errors in console
2. Event listeners attached
3. Calculation function working

**Fix:**
- Check browser console for errors
- Verify `updateDisplay()` function called
- Test with different aircraft/hours

### Issue: Mobile layout broken
**Check:**
1. CSS media queries
2. Viewport meta tag
3. Font sizes readable
4. Touch targets large enough

**Fix:**
- Test on real device (not just emulator)
- Use Chrome DevTools device mode
- Adjust breakpoints in CSS

## Success Criteria

Calculator is successful if:
- [ ] 100+ page views per month
- [ ] 15-25% conversion rate (views → submissions)
- [ ] 5%+ sales conversion (leads → purchases)
- [ ] Average lead value >€1M
- [ ] Positive user feedback
- [ ] Sales team finds tool useful

## Support Contacts

**Technical Issues:**
- Development team
- Supabase support (for database issues)

**Marketing Questions:**
- Marketing team (see MARKETING.md)

**General:**
- Contact@jetselect.nl

## Sign-off

Deployment approved by:

- [ ] Development Lead: _______________  Date: ____
- [ ] Marketing Manager: _______________  Date: ____
- [ ] Sales Director: _______________  Date: ____

---

**Last Updated:** 2026-02-09
**Version:** 1.0
**Status:** Ready for deployment
