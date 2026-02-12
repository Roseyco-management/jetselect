# Frontend Component Quality Checklist

Comprehensive quality assurance checklist for all UI components.

## Accessibility (WCAG 2.1 AA Compliance)

### Semantic HTML
- [ ] Appropriate semantic elements used (`<button>`, `<nav>`, `<main>`, `<article>`, etc.)
- [ ] Heading hierarchy is logical and sequential (h1 → h2 → h3, no skipped levels)
- [ ] Lists used for grouped content (`<ul>`, `<ol>`, `<dl>`)
- [ ] Tables only for tabular data with proper structure (`<thead>`, `<tbody>`, `<th>`)
- [ ] Forms use `<label>`, `<fieldset>`, and `<legend>` correctly
- [ ] Links (`<a>`) for navigation, buttons (`<button>`) for actions
- [ ] No deprecated or presentational HTML elements

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab key
- [ ] Tab order is logical and follows visual flow
- [ ] Shift+Tab navigates backwards correctly
- [ ] Enter/Space activates buttons and controls
- [ ] Escape closes modals and dropdowns
- [ ] Arrow keys work for appropriate widgets (menus, tabs, sliders)
- [ ] Skip links provided for bypassing navigation
- [ ] No keyboard traps (user can navigate away from any element)
- [ ] Focus management in dynamic content (modals, SPAs)

### Focus Indicators
- [ ] Focus indicators visible on all interactive elements
- [ ] Focus indicators have sufficient contrast (3:1 minimum)
- [ ] `:focus-visible` used to show focus only for keyboard users
- [ ] Custom focus styles meet or exceed browser defaults
- [ ] No `outline: none` without a visible alternative
- [ ] Focus indicators not obscured by other elements

### Color & Contrast
- [ ] Normal text (< 18pt) has 4.5:1 contrast ratio minimum (AA)
- [ ] Large text (≥ 18pt or ≥ 14pt bold) has 3:1 contrast ratio minimum
- [ ] UI components have 3:1 contrast against adjacent colors
- [ ] Color not the only way to convey information
- [ ] Tested with color blindness simulators (protanopia, deuteranopia, tritanopia)
- [ ] Links distinguishable from surrounding text (underline or 3:1 contrast + indicator)
- [ ] Error states indicated by more than just color
- [ ] Dark mode/high contrast mode supported

### ARIA Usage
- [ ] ARIA used only when semantic HTML insufficient
- [ ] `aria-label` or `aria-labelledby` on unlabeled controls
- [ ] `aria-describedby` for additional context
- [ ] `aria-live` regions for dynamic content updates
- [ ] `aria-invalid` and `aria-errormessage` on form errors
- [ ] `aria-expanded` on expandable controls
- [ ] `aria-controls` links control to controlled element
- [ ] `aria-current` on current page/step
- [ ] `role` attribute only when necessary
- [ ] No conflicting ARIA states

### Images & Media
- [ ] All images have alt text
- [ ] Decorative images have empty alt (`alt=""`)
- [ ] Complex images have extended descriptions
- [ ] Icons have accessible labels or are hidden (`aria-hidden="true"`)
- [ ] SVGs have `<title>` and `<desc>` or `aria-label`
- [ ] Videos have captions/transcripts
- [ ] Audio content has transcripts
- [ ] No auto-playing media without user control

### Forms
- [ ] All inputs have associated labels (`for` attribute matches `id`)
- [ ] Required fields indicated visually and programmatically
- [ ] Error messages clear, specific, and associated with fields
- [ ] Error messages announced to screen readers (`role="alert"` or `aria-live`)
- [ ] `aria-invalid` set on invalid fields
- [ ] Input purpose identified (`autocomplete` attribute)
- [ ] Fieldsets and legends used for related inputs
- [ ] Help text associated with `aria-describedby`
- [ ] Validation doesn't rely solely on placeholder text

### Screen Reader Support
- [ ] Tested with NVDA (Windows)
- [ ] Tested with JAWS (Windows) if enterprise
- [ ] Tested with VoiceOver (macOS/iOS)
- [ ] Tested with TalkBack (Android) if mobile
- [ ] Screen reader announces all meaningful content
- [ ] Visually hidden text provided where needed (`.sr-only`)
- [ ] Reading order matches visual order
- [ ] No content read twice
- [ ] Dynamic updates announced appropriately

### Motion & Animation
- [ ] Respects `prefers-reduced-motion` media query
- [ ] No parallax effects in reduced motion mode
- [ ] Animations stay under 5 seconds or have stop control
- [ ] No auto-scrolling without user control
- [ ] No flashing content (max 3 flashes per second)
- [ ] Infinite animations can be paused

## Responsive Design

### Viewport Testing
- [ ] Works at 320px width (iPhone SE)
- [ ] Works at 375px width (iPhone standard)
- [ ] Works at 768px width (iPad portrait)
- [ ] Works at 1024px width (iPad landscape, small laptop)
- [ ] Works at 1280px width (standard laptop)
- [ ] Works at 1920px+ width (desktop monitors)
- [ ] Works at ultra-wide resolutions (2560px+)
- [ ] No content cut off at any breakpoint
- [ ] No horizontal scrolling (except intentional carousels)

### Touch Targets
- [ ] Minimum 48×48px touch target size (iOS/Android standard)
- [ ] Primary actions use 56×56px targets
- [ ] Spacing between targets minimum 8px
- [ ] Links in paragraphs appropriately spaced
- [ ] No adjacent clickable elements without spacing

### Images & Media
- [ ] Images scale appropriately with container
- [ ] `srcset` used for responsive images
- [ ] `<picture>` used for art direction
- [ ] `sizes` attribute optimized
- [ ] Proper `width` and `height` attributes prevent CLS
- [ ] `loading="lazy"` on below-fold images
- [ ] `aspect-ratio` used or calculated
- [ ] WebP with JPEG/PNG fallback

### Typography
- [ ] Text readable at all viewport sizes
- [ ] Line length appropriate (45-75 characters optimal)
- [ ] Font size scales fluidly (`clamp()` or viewport units)
- [ ] Minimum 16px base font size on mobile
- [ ] Line height appropriate for font size (1.5 for body text)
- [ ] No horizontal scrolling for text overflow

### Layout
- [ ] Uses CSS Grid or Flexbox (not floats or tables)
- [ ] Mobile-first media queries
- [ ] Breakpoints based on content, not devices
- [ ] Container queries used where appropriate
- [ ] Logical properties used for i18n (`margin-inline`, etc.)
- [ ] No fixed pixel widths on text containers

### Testing
- [ ] Tested on actual iPhone/Android device
- [ ] Tested in portrait and landscape orientations
- [ ] Tested with iOS Safari
- [ ] Tested with Chrome mobile
- [ ] Tested with browser DevTools device emulation
- [ ] Tested at 200% zoom level

## Performance

### Core Web Vitals
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID (First Input Delay) < 100ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] INP (Interaction to Next Paint) < 200ms
- [ ] Measured with real user conditions (slow 3G)

### Layout Shift Prevention
- [ ] Images have explicit `width` and `height` attributes
- [ ] Fonts load with `font-display: swap`
- [ ] Ad/embed spaces reserved before loading
- [ ] No content shifts after load
- [ ] Skeleton screens used for loading states
- [ ] `aspect-ratio` CSS used for dynamic content

### Images
- [ ] Images optimized (compressed)
- [ ] Next-gen formats used (WebP, AVIF)
- [ ] Appropriate image sizes for viewport
- [ ] Lazy loading on off-screen images
- [ ] No oversized images (serving 4000px image for 400px display)
- [ ] Critical images preloaded

### CSS
- [ ] Critical CSS inlined in `<head>`
- [ ] Non-critical CSS loaded asynchronously
- [ ] CSS minified in production
- [ ] Unused CSS removed
- [ ] CSS containment used (`contain` property)
- [ ] `content-visibility: auto` on long lists
- [ ] No CSS @imports (causes sequential loading)

### JavaScript
- [ ] No render-blocking JavaScript
- [ ] Scripts deferred or async
- [ ] Code split by route/feature
- [ ] Tree shaking removes unused code
- [ ] Event listeners debounced/throttled
- [ ] Long tasks broken up (< 50ms chunks)
- [ ] No memory leaks (event listeners cleaned up)

### Fonts
- [ ] System fonts used or web fonts optimized
- [ ] `font-display: swap` prevents FOIT
- [ ] Font files subset for required characters
- [ ] WOFF2 format used (best compression)
- [ ] Fonts preloaded with `<link rel="preload">`
- [ ] Font fallbacks specified

### Network
- [ ] Critical resources preconnected
- [ ] DNS prefetch for third-party domains
- [ ] Next pages prefetched when likely
- [ ] Compression enabled (gzip/brotli)
- [ ] HTTP/2 or HTTP/3 used
- [ ] CDN used for static assets
- [ ] Cache headers optimized

### Rendering
- [ ] No forced synchronous layouts
- [ ] No layout thrashing in JavaScript
- [ ] Animations use `transform` and `opacity` only
- [ ] `will-change` used sparingly
- [ ] Passive event listeners where appropriate
- [ ] Intersection Observer for lazy loading
- [ ] RequestAnimationFrame for animations

## User Experience

### Interaction States

#### Buttons & Links
- [ ] Default state clearly styled
- [ ] Hover state visible (desktop)
- [ ] Focus state clearly visible (keyboard)
- [ ] Active/pressed state shown during click
- [ ] Disabled state has reduced opacity
- [ ] Loading state prevents double-clicks
- [ ] Cursor changes to `pointer` on hover
- [ ] No hover effects on touch devices

#### Forms
- [ ] Empty/default state
- [ ] Focus state on inputs
- [ ] Filled state
- [ ] Error state (with clear messaging)
- [ ] Success/valid state
- [ ] Disabled state
- [ ] Loading/submitting state
- [ ] Placeholder text not used as labels

### Feedback

#### Loading States
- [ ] Spinner or skeleton shown during load
- [ ] Loading state is accessible (aria-live)
- [ ] Button text changes during loading
- [ ] Loading doesn't block entire interface unnecessarily
- [ ] Progress indication for long operations
- [ ] Timeout handling for failed requests

#### Error States
- [ ] Error messages clear and actionable
- [ ] Errors shown near relevant field/action
- [ ] Errors announced to screen readers
- [ ] Error doesn't just disappear (persistent until fixed)
- [ ] Retry mechanism provided
- [ ] Fallback UI for critical failures

#### Success States
- [ ] Success message shown after action
- [ ] Toast notification or inline confirmation
- [ ] Success state auto-dismisses or allows dismissal
- [ ] Visual confirmation (checkmark, color change)

### Animation & Transitions
- [ ] Transitions smooth (60fps target)
- [ ] Duration appropriate (150-350ms for most UI)
- [ ] Easing feels natural (cubic-bezier)
- [ ] Respects `prefers-reduced-motion`
- [ ] Animations enhance UX, not distract
- [ ] No janky animations (forced repaints)
- [ ] Loading animations loop smoothly

### Content
- [ ] Copy is clear and concise
- [ ] CTAs are actionable ("Save changes" not "Submit")
- [ ] Error messages are helpful, not technical
- [ ] Empty states are informative
- [ ] Placeholder text is helpful hint
- [ ] Required fields clearly marked
- [ ] Character limits shown proactively

### Micro-interactions
- [ ] Button ripple/scale on click
- [ ] Smooth reveal animations
- [ ] Hover elevation on cards
- [ ] Icon animations on state change
- [ ] Smooth transitions between states
- [ ] Satisfying "click" feedback

## Design System Consistency

### Visual Consistency
- [ ] Colors from defined palette (CSS variables)
- [ ] Spacing follows scale (8px base recommended)
- [ ] Typography uses defined scale
- [ ] Border radius consistent
- [ ] Shadows follow elevation system
- [ ] Icons consistent size and style

### Component Patterns
- [ ] Follows established component patterns
- [ ] BEM or consistent naming convention
- [ ] Reusable and composable
- [ ] Props/variants documented
- [ ] No one-off custom styles
- [ ] Consistent with similar components

### Code Quality
- [ ] CSS uses custom properties (variables)
- [ ] No magic numbers (use design tokens)
- [ ] Logical properties for internationalization
- [ ] No `!important` (or justified usage documented)
- [ ] CSS selectors are efficient
- [ ] No overly specific selectors
- [ ] Code is DRY (Don't Repeat Yourself)
- [ ] Comments explain complex or non-obvious code

## Browser & Device Support

### Modern Browsers
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

### Mobile Browsers
- [ ] iOS Safari (latest 2 versions)
- [ ] Chrome mobile (latest 2 versions)
- [ ] Samsung Internet (if targeting Android)

### Progressive Enhancement
- [ ] Works without JavaScript (where possible)
- [ ] Works without CSS (readable HTML structure)
- [ ] Fallbacks for modern CSS features
- [ ] Fallbacks for unsupported images (WebP → JPEG)
- [ ] Vendor prefixes where needed

### Feature Detection
- [ ] `@supports` used for modern CSS
- [ ] Graceful degradation for old browsers
- [ ] No "browser unsupported" pages (progressive enhancement instead)

## Testing & Validation

### Automated Testing
- [ ] HTML validates (W3C validator)
- [ ] CSS validates (W3C validator)
- [ ] Lighthouse score > 90 (all categories)
- [ ] aXe DevTools accessibility scan passes
- [ ] No console errors or warnings

### Manual Testing
- [ ] Keyboard-only navigation tested
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] Mobile device tested (not just DevTools)
- [ ] Slow network tested (3G simulation)
- [ ] Color blindness simulator tested
- [ ] Dark mode tested
- [ ] High contrast mode tested
- [ ] Zoom to 200% tested
- [ ] Different font sizes tested

### Cross-browser Testing
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge
- [ ] Tested on iOS device
- [ ] Tested on Android device

### Internationalization (i18n)
- [ ] RTL (Right-to-Left) layout tested if applicable
- [ ] Logical CSS properties used (`margin-inline`, not `margin-left`)
- [ ] Text overflow handled (long translations)
- [ ] Date/number formats locale-aware
- [ ] No hardcoded text in components

## Security

### XSS Prevention
- [ ] User input sanitized
- [ ] No `dangerouslySetInnerHTML` without sanitization
- [ ] No `eval()` or `Function()` with user input
- [ ] Content Security Policy (CSP) compliant

### Data Handling
- [ ] Sensitive data not in URLs
- [ ] Forms use HTTPS
- [ ] No credentials in client-side code
- [ ] API tokens/keys secured
- [ ] localStorage/sessionStorage used appropriately

## Documentation

### Component Documentation
- [ ] Component purpose documented
- [ ] Props/attributes documented
- [ ] Usage examples provided
- [ ] Accessibility notes included
- [ ] Known issues/limitations documented

### Code Comments
- [ ] Complex logic explained
- [ ] Non-obvious decisions justified
- [ ] TODOs tracked
- [ ] Browser-specific hacks explained
- [ ] Magic numbers explained

---

## Review Sign-off

**Component:** _________________________
**Reviewer:** _________________________
**Date:** _________________________

**Accessibility:** ☐ Pass ☐ Needs Work
**Responsive:** ☐ Pass ☐ Needs Work
**Performance:** ☐ Pass ☐ Needs Work
**UX:** ☐ Pass ☐ Needs Work
**Code Quality:** ☐ Pass ☐ Needs Work

**Overall:** ☐ Approved ☐ Needs Revision

**Notes:**
