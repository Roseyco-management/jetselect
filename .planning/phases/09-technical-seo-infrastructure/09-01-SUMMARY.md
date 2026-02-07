---
phase: 09-technical-seo-infrastructure
plan: 01
subsystem: seo
tags: [schema.org, json-ld, structured-data, rich-snippets, google-search-console]

# Dependency graph
requires:
  - phase: 08-topical-map-content-architecture
    provides: 111-page sitemap with bilingual URLs, 5 pillar page architectures
provides:
  - Organization schema establishing JetSelect business entity
  - LocalBusiness schema defining Netherlands service area
  - BreadcrumbList schema for navigation hierarchy
  - FAQPage schema template for pillar pages
  - Rich snippet eligibility foundation
affects: [10-pillar-pages-core-content, 15-google-search-console-analytics-integration]

# Tech tracking
tech-stack:
  added: [schema.org, json-ld]
  patterns: [structured-data-in-head, commented-templates-for-future-use]

key-files:
  created: []
  modified: [improved/index.html]

key-decisions:
  - "Use separate JSON-LD script blocks for each schema type (easier maintenance vs. single combined context)"
  - "JSON-LD in head over microdata attributes (Google's preferred format, cleaner HTML)"
  - "Template FAQPage as HTML comment for Phase 10 (content doesn't exist yet, template ensures consistency)"

patterns-established:
  - "Schema.org JSON-LD blocks in <head> section for structured data"
  - "Commented templates for future schema implementation"

issues-created: []

# Metrics
duration: 1min
completed: 2026-02-07
---

# Phase 9 Plan 1: Schema.org & Structured Data Summary

**Organization, LocalBusiness, and BreadcrumbList schemas implemented with JSON-LD; FAQPage template created for Phase 10 featured snippet targeting**

## Performance

- **Duration:** 1 min
- **Started:** 2026-02-07T18:55:49Z
- **Completed:** 2026-02-07T18:56:48Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments

- Organization schema establishes JetSelect as recognizable business entity for Google Knowledge Graph
- LocalBusiness schema defines Netherlands service area with luxury pricing tier (€€€€)
- BreadcrumbList schema creates foundation for pillar page navigation hierarchy
- FAQPage schema template ready for Phase 10 content production (targets 11 featured snippets from Phase 7 SERP strategy)

## Task Commits

Each task was committed atomically:

1. **Task 1: Implement core Schema.org JSON-LD markup** - `ae8ac78` (feat)
2. **Task 2: Create reusable FAQPage Schema template** - `fec03ed` (feat)

**Plan metadata:** (to be committed)

## Files Created/Modified

- `improved/index.html` - Added 3 active Schema.org JSON-LD blocks (Organization, LocalBusiness, BreadcrumbList) + 1 commented FAQPage template

## Decisions Made

**Schema format:** Used separate JSON-LD `<script>` blocks for each schema type instead of single combined @graph context. Rationale: Easier to maintain, edit, and extend individual schemas without risk of JSON syntax errors affecting all schemas.

**JSON-LD over microdata:** Selected JSON-LD in `<head>` over microdata attributes in HTML body. Rationale: Google's documented preferred format, doesn't pollute HTML with semantic markup attributes, easier to validate independently.

**FAQPage as template:** Created FAQPage schema as commented HTML template rather than active schema with placeholder content. Rationale: Content doesn't exist yet (Phase 10), template ensures consistency across pillar pages, prevents invalid/empty schema from being indexed.

**Omitted schemas:** Did NOT add Product schema (reserved for individual aircraft pages in Phase 12), did NOT add Review/AggregateRating schema (no reviews yet), did NOT add Event schema (no events planned).

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None

## Next Phase Readiness

- Schema.org foundation ready for Phase 10 pillar page content production
- FAQPage template prepared for featured snippet targeting strategy (11 snippets identified in Phase 7)
- BreadcrumbList ready for expansion when pillar pages are created
- All schemas validate successfully (ready for Google Search Console integration in Phase 15)

---
*Phase: 09-technical-seo-infrastructure*
*Completed: 2026-02-07*
