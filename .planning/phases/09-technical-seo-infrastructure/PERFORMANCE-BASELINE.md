# Performance Baseline Audit

**Date:** 2026-02-07
**Tool:** Manual assessment (Chrome/Lighthouse unavailable)
**Page:** improved/index.html

## Current State Analysis

### Page Weight
- **HTML:** 32KB (30,662 bytes)
- **CSS:** 24KB (style.css)
- **Images:** 116KB total (7 image files)
- **Total Page Size:** ~172KB
- **Context:** Already optimized from 628KB WordPress original (per STATE.md)

### Image Analysis
| File | Size | Usage | Lazy Loading |
|------|------|-------|--------------|
| Tot-5-edited-1.jpg | 40KB | Below fold (wizard step) | ✅ Yes |
| Afgelegen.jpg | 28KB | Below fold (wizard step) | ✅ Yes |
| Jetselect-logo1.jpeg | 12KB | Header + footer | ❌ No (critical) |
| Tot-5-edited-1-300x300.jpg | 12KB | Thumbnail | Not used in HTML |
| Afgelegen-300x204.jpg | 12KB | Thumbnail | Not used in HTML |
| Tot-5-edited-1-150x150.jpg | 8KB | Thumbnail | Not used in HTML |
| Favicon-Jetselect.png | 4KB | Favicon | ❌ No (critical) |

**Images in use:** 4 images in HTML (2 with lazy loading already implemented)
**Unused thumbnails:** 3 smaller versions (44KB total) - candidates for removal or responsive srcset

### External Resources
- **Google Fonts:** Playfair Display (400/600/700), Poppins (300/400/500/600)
- **Resource Hints:** Already implemented
  - ✅ `preconnect` to fonts.googleapis.com
  - ✅ `preconnect` to fonts.gstatic.com (with crossorigin)
- **Preload:** Hero image (Tot-5-edited-1.jpg) preloaded

### Technical SEO Infrastructure (from Phase 9 Plans 1-3)
- ✅ Schema.org: Organization, LocalBusiness, BreadcrumbList (JSON-LD)
- ✅ Hreflang: nl-NL, en-NL, x-default
- ✅ Open Graph: Complete tags (1200x630 image format)
- ✅ Canonical URL: Self-referencing
- ✅ Favicon: PNG format

### Estimated Core Web Vitals (Manual Assessment)
**Note:** Official Lighthouse audit requires Chrome. These are estimates based on page analysis.

- **LCP (Largest Contentful Paint):**
  - Likely candidate: Hero image (Tot-5-edited-1.jpg, 40KB)
  - Preloaded via `<link rel="preload">` in head
  - Estimate: <2.0s (Good) - small image size + preload

- **FID (First Input Delay):**
  - Minimal JavaScript observed
  - Estimate: <50ms (Good) - simple interactions only

- **CLS (Cumulative Layout Shift):**
  - Images have dimensions in CSS
  - Risk: Unknown - need to verify layout stability
  - Estimate: <0.1 (Good) - static layout

### Performance Strengths
1. **Small page weight:** 172KB total (well below 500KB recommended)
2. **Lazy loading:** Already implemented on below-fold images
3. **Resource hints:** Google Fonts preconnect already optimized
4. **Image preload:** Hero image preloaded for fast LCP
5. **Minimal external dependencies:** Only Google Fonts

### Optimization Opportunities Identified
1. **Unused thumbnails:** 3 thumbnail images (44KB) not referenced in HTML - can be removed
2. **dns-prefetch fallback:** Add dns-prefetch hints for older browser support (in addition to preconnect)
3. **Font weight reduction:** 7 font weights loaded - audit if all are actually used in CSS
4. **Image optimization:** Main images (40KB + 28KB) could potentially be optimized further with compression
5. **Responsive images:** Consider srcset for large images to serve smaller versions on mobile

### Chrome Availability
**Status:** Chrome not available on this system
**Impact:** Cannot run official Lighthouse audit for precise Core Web Vitals scores
**Workaround:** Manual assessment completed. Full Lighthouse audit can be run later when Chrome is available or in CI/CD pipeline
**Deferred to:** Phase 15 (Analytics & Monitoring Setup) for automated performance monitoring

### Baseline Performance Estimate
**Estimated Score:** 85-90/100 (based on current optimizations)

**Rationale:**
- ✅ Fast page load (small size)
- ✅ Lazy loading implemented
- ✅ Resource hints present
- ✅ Minimal JavaScript
- ⚠️ Some room for image optimization
- ⚠️ Unused thumbnail files
- ⚠️ Font weight reduction potential

**Target:** 90+ performance score after optimizations in Tasks 2-3
