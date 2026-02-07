# Phase 7: SEO Tools Configuration

## SerpBear - Rank Tracking Tool

**Location:** `/Users/baileybarry/Resources/repos/seo/serpbear/`

**Status:** Installed and built, ready for use

**Access:**
- Run `npm run dev` from the SerpBear directory to start the app
- Access at: http://localhost:3000
- Default credentials (from `.env.local`):
  - Username: `admin`
  - Password: `0123456789`

**Configuration:**
- Database: SQLite (auto-created on first run)
- Environment: `.env.local` (configured)

**Setup Instructions:**

1. Start the development server:
   ```bash
   cd /Users/baileybarry/Resources/repos/seo/serpbear
   npm run dev
   ```

2. Access SerpBear at http://localhost:3000

3. Login with default credentials (admin / 0123456789)

4. **IMPORTANT - SERP API Required:** SerpBear needs a third-party SERP scraping API to track rankings. Free option:
   - Go to https://scrapingrobot.com and sign up for free account (5000 lookups/month)
   - Get your API key
   - In SerpBear Settings, add the ScrapingRobot API key

   Alternative free option:
   - Use Serply.io free tier (https://serply.io)

5. Add Domain:
   - Domain: `jetselect.nl` (or current production domain)
   - Notification settings: Optional

6. Add Keywords for Tracking (Netherlands - Google.nl):
   - "privéjet kopen"
   - "privéjet Nederland"
   - "zakelijk vliegtuig kopen"

   **Location Settings:**
   - Country: Netherlands
   - Search Engine: Google.nl
   - Language: Dutch (nl)

7. Set up Daily Tracking Schedule:
   - Go to Settings > Scraping Settings
   - Enable automatic scraping
   - Set schedule to daily

**Keywords Being Tracked:**

| Keyword | Search Engine | Location | Status |
|---------|--------------|----------|--------|
| privéjet kopen | Google.nl | Netherlands | Pending API key |
| privéjet Nederland | Google.nl | Netherlands | Pending API key |
| zakelijk vliegtuig kopen | Google.nl | Netherlands | Pending API key |

**Notes:**
- SerpBear cannot track rankings without a SERP scraping API configured
- Free tier from ScrapingRobot provides 5000 lookups/month (sufficient for 3-10 keywords with daily tracking)
- Historical rank data will accumulate over time
- Notifications can be configured via email (SMTP settings required)

---

## python-seo-analyzer - On-Page SEO Analysis

**Location:** Installed globally via pip

**Status:** ✓ Installed and ready for use

**Installation:**
```bash
pip3 install pyseoanalyzer
```

**Usage:**
```bash
# Analyze a competitor website
python-seo-analyzer https://example.com/

# With HTML output
python-seo-analyzer https://example.com/ --output-format html > analysis.html

# With sitemap
python-seo-analyzer https://example.com/ --sitemap https://example.com/sitemap.xml
```

**Purpose:**
- Analyze competitor on-page SEO factors
- Extract heading structure (H1-H6)
- Check meta tags, alt text, keyword density
- Validate technical SEO elements
- Crawl websites to analyze multiple pages

**Output Format:**
- JSON (default) or HTML format
- Console output with SEO score and recommendations
- Detailed breakdown of SEO factors per page

**Note:** This tool is designed for URL-based analysis (website crawling), not local HTML files. Use Lighthouse CLI or DevTools for local file analysis.

---

## Lighthouse - Technical SEO Auditor

**Location:** Lighthouse CLI installed at `/Users/baileybarry/.npm-global/bin/lighthouse`

**Status:** ⚠️ Requires Chrome browser installation

**Installation Check:**
- Lighthouse CLI: ✓ Installed
- Chrome Browser: ✗ Not found
- Chromium-based browser required for Lighthouse CLI to function

**CLI Usage (when Chrome is installed):**
```bash
# Analyze local file
lighthouse file:///path/to/index.html --output json --output-path report.json

# Analyze remote URL
lighthouse https://example.com --output json --output-path report.json

# With specific categories
lighthouse https://example.com --only-categories=performance,seo,accessibility
```

**DevTools Usage (Alternative):**
1. Install Chrome browser
2. Open `/Users/baileybarry/jetselect/improved/index.html` in Chrome
3. Open DevTools (Cmd+Option+I)
4. Go to "Lighthouse" tab
5. Select categories: Performance, Accessibility, Best Practices, SEO
6. Click "Analyze page load"
7. Export report as JSON

**Baseline Audit:**
- Report location: `.planning/phases/07-competitive-analysis-keyword-research/baseline-lighthouse.json`
- Status: Pending - requires Chrome browser installation
- Purpose: Track technical SEO improvements over time

**Core Web Vitals Tracked:**
- Largest Contentful Paint (LCP)
- First Input Delay (FID) / Interaction to Next Paint (INP)
- Cumulative Layout Shift (CLS)

**Blocker:** Chrome browser must be installed to run Lighthouse audits. User action required.

---

## Manual SERP Analysis Tools

**Browser-based Research:**
- Google.nl in Incognito mode for unbiased results
- Chrome extensions: None required (manual analysis)

**Data Collection Templates:**
- KEYWORDS.md - Keyword database
- COMPETITORS.md - Competitor profiles
- SERP-FEATURES.md - SERP feature tracking
- OPPORTUNITIES.md - Content gap analysis

---

## API Keys & Credentials Summary

| Tool | Credential Type | Status | Required For |
|------|----------------|--------|--------------|
| SerpBear Login | Username/Password | ✓ Configured | Accessing dashboard |
| SerpBear API | APIKEY | ✓ Set (local only) | API access (optional) |
| ScrapingRobot | API Key | ⚠️ User must obtain | Rank tracking |
| Google Search Console | OAuth | Not configured | Search analytics (optional) |
| Google Ads | OAuth | Not configured | Keyword volume (optional) |

---

## Next Steps

1. **Task 1 Complete:** ✓ SerpBear installed and configured (pending SERP API key)
2. **Task 2 In Progress:**
   - ✓ python-seo-analyzer installed and ready for competitor URL analysis
   - ⚠️ Lighthouse baseline audit pending Chrome installation
3. **Task 3 Pending:** Create data collection templates (KEYWORDS.md, COMPETITORS.md, etc.)

## Blockers & User Actions Required

1. **SerpBear Rank Tracking:** Obtain free ScrapingRobot API key (https://scrapingrobot.com)
2. **Lighthouse Audits:** Install Chrome browser for automated audits (optional - can use DevTools manually)
