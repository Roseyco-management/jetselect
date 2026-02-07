# Phase 7: Competitive Analysis & Keyword Research - Discovery

## Discovery Level: Standard (Level 2)

**Why discovery needed:**
- Manual SERP analysis techniques (no Perplexity API available)
- SerpBear configuration for rank tracking
- Local SEO tool selection from /baileybarry/Resources/repos/seo/
- Competitor backlink profiling approach

## Available Tools Assessment

### From /baileybarry/Resources/repos/seo/

**Rank Tracking:**
- ✓ **SerpBear** - Self-hosted rank tracking (Next.js app)
  - Features: Track keywords on Google, Bing, Yahoo
  - Supports location-specific tracking (Netherlands)
  - Historical data and notifications
  - **Decision:** Primary rank tracking tool

**Technical Analysis:**
- ✓ **Lighthouse** - Google's performance/SEO auditor
  - Core Web Vitals, accessibility, SEO basics
  - **Decision:** Use for technical SEO baseline

- ✓ **python-seo-analyzer** - Python-based SEO analysis
  - On-page SEO factors, meta tags, headings
  - **Decision:** Use for competitor on-page analysis

**Page Auditing:**
- ✓ **page-auditor** - Comprehensive page audits
- ✓ **seo-auditor** - SEO-specific audits
- ✓ **seonaut** - Crawling and technical SEO

**Decision:** python-seo-analyzer for quick competitor analysis, Lighthouse for our site.

## Manual SERP Analysis Approach

**Without Perplexity API, manual Google.nl analysis:**

### Method 1: Browser-based Manual Analysis ✓ SELECTED
1. Open incognito window
2. Search Google.nl for target keywords
3. Analyze top 10 results manually:
   - Domain authority signals (DR not available without API)
   - Content depth (word count estimation)
   - Content type (guide, product page, comparison)
   - User intent match (informational, transactional, navigational)
   - Structured data presence (rich snippets)
   - Page speed perception (load time feel)

**Pros:** Free, accurate for Netherlands Google results, captures real SERP features
**Cons:** Time-consuming, no automation, subjective analysis

### Method 2: SerpBear for Historical Tracking (Post-analysis)
- After identifying competitors, track their rankings over time
- Monitor keyword position changes
- Alert on ranking movements

**Pros:** Automated ongoing monitoring, historical data
**Cons:** Doesn't help with initial competitive analysis

**Decision:** Use Method 1 for initial competitive analysis, set up Method 2 for ongoing monitoring.

## Keyword Research Strategy

**Without Keyword Planner API or Ahrefs:**

### Seed Keywords (from roadmap)
- Primary: "privéjet kopen", "privéjet Nederland", "zakelijk vliegtuig kopen"
- Derived from business domain knowledge

### Expansion Techniques

**1. Google Autocomplete** ✓ SELECTED
- Type seed keyword into Google.nl
- Capture autocomplete suggestions
- Iterate with variations (city names, aircraft types)

**2. "People Also Ask" Boxes** ✓ SELECTED
- Extract questions from SERP features
- Indicates user intent and long-tail opportunities

**3. Related Searches** ✓ SELECTED
- Bottom of Google SERP
- Google's semantic clustering

**4. Competitor Content Mining** ✓ SELECTED
- Extract keywords from competitor headings (H1-H6)
- Identify topics they're targeting
- Use python-seo-analyzer to extract heading structure

**5. Semantic Expansion**
- Manual brainstorming based on:
  - Aircraft models (Gulfstream, Bombardier, Cessna)
  - Cities (Amsterdam, Rotterdam, Utrecht)
  - Routes (Amsterdam-London, Amsterdam-Dubai)
  - Topics (financing, maintenance, regulations)

## Backlink Analysis Approach

**Without Ahrefs/SEMrush API:**

### Method: Manual Link Discovery
1. **Search operators:**
   - `site:competitor.com -site:competitor.com` (who links to them)
   - `"competitor.com"` (mentions)

2. **Common link sources to check:**
   - Dutch business directories (KvK, Bedrijvengids)
   - Aviation industry sites (LVNL, EASA listings)
   - Industry publications (Aviation Week, Business Jet Traveler)
   - Local media (Het Financieele Dagblad)

3. **Document findings manually:**
   - Link source domain
   - Link type (directory, editorial, partnership)
   - Relevance score (1-5)

**Limitation:** Can't get comprehensive backlink count or Domain Rating, but can identify quality link sources to replicate.

## Competitor Identification

**Target competitors for "privéjet kopen":**

Will manually search Google.nl and identify:
- Top 3 direct competitors (private jet brokers/sellers in Netherlands)
- Top 3 informational sites (content/guides ranking well)
- International players ranking in NL market

**Analysis per competitor:**
- Content depth (page count estimation via `site:domain.com`)
- Content types (guides, product pages, location pages)
- On-page SEO (via python-seo-analyzer)
- Link sources (via manual discovery)
- SERP features they own (PAA, featured snippets)

## Data Organization

**Create structured spreadsheet/markdown for:**

1. **Keywords Database**
   - Keyword | Search Intent | Difficulty (Low/Med/High) | Priority | Notes

2. **Competitor Profile**
   - Competitor | Domain | Content Strategy | Strengths | Weaknesses | Link Sources

3. **SERP Features**
   - Keyword | Featured Snippet | PAA | Local Pack | Image Pack | Video

4. **Opportunity Map**
   - Keyword | Current Top 3 | Content Gap | Our Angle | Priority

## Timeline Estimate

- SERP analysis (3 keywords × top 10): ~2 hours
- Keyword expansion (autocomplete, PAA, related): ~1.5 hours
- Competitor deep dive (top 3): ~2 hours
- Backlink discovery (top 3 competitors): ~1.5 hours
- Data synthesis and opportunity mapping: ~1 hour

**Total:** ~8 hours of manual research work

## Success Criteria

- ✓ Top 10 competitors identified and profiled for 3 primary keywords
- ✓ 50+ keyword opportunities documented with intent classification
- ✓ Competitor content strategies mapped
- ✓ Top 20 link sources identified for replication
- ✓ SerpBear configured and tracking primary keywords
- ✓ Opportunity map created prioritizing Phase 8 content architecture

## Tools Setup Required

1. **SerpBear:**
   - Install dependencies: `cd /Users/baileybarry/Resources/repos/seo/serpbear && npm install`
   - Configure for Google.nl location
   - Add primary keywords for tracking

2. **python-seo-analyzer:**
   - Verify Python environment
   - Test on competitor URLs

3. **Lighthouse:**
   - Already available via Chrome DevTools
   - Run baseline audit on jetselect.nl

## Notes

- This is manual, labor-intensive research without API access
- Quality over quantity - deep analysis of top competitors better than shallow analysis of many
- Document everything in markdown for Phase 8 planning
- SerpBear tracking starts now, but data accumulates over weeks/months
