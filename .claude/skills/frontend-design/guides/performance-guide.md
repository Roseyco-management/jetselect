# Performance Optimization Guide

Comprehensive guide to building fast, responsive web experiences.

## Core Web Vitals

### Understanding the Metrics

**LCP (Largest Contentful Paint)** - Loading performance
- **Good**: < 2.5 seconds
- **Needs Improvement**: 2.5 - 4.0 seconds
- **Poor**: > 4.0 seconds

**INP (Interaction to Next Paint)** - Interactivity
- **Good**: < 200ms
- **Needs Improvement**: 200 - 500ms
- **Poor**: > 500ms

**CLS (Cumulative Layout Shift)** - Visual stability
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

## Optimizing LCP

### 1. Optimize Images

```html
<!-- ✅ Responsive images with modern formats -->
<picture>
  <source
    srcset="/images/hero-1200.avif 1200w, /images/hero-800.avif 800w"
    type="image/avif"
  />
  <source
    srcset="/images/hero-1200.webp 1200w, /images/hero-800.webp 800w"
    type="image/webp"
  />
  <img
    src="/images/hero-800.jpg"
    srcset="/images/hero-1200.jpg 1200w, /images/hero-800.jpg 800w"
    sizes="(min-width: 1024px) 1200px, 100vw"
    alt="Luxury private jet"
    width="1200"
    height="800"
    fetchpriority="high"
  />
</picture>

<!-- ✅ Lazy load below-the-fold images -->
<img
  src="jet-thumbnail.jpg"
  loading="lazy"
  alt="Gulfstream G650"
  width="400"
  height="300"
/>
```

### 2. Preload Critical Resources

```html
<head>
  <!-- Preload hero image -->
  <link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high">

  <!-- Preload critical fonts -->
  <link
    rel="preload"
    as="font"
    href="/fonts/inter-var.woff2"
    type="font/woff2"
    crossorigin
  />

  <!-- Preconnect to critical third-party origins -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://api.jetselect.com">
</head>
```

### 3. Inline Critical CSS

```html
<head>
  <style>
    /* Critical above-the-fold CSS */
    body {
      margin: 0;
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.5;
    }
    .header {
      background: #fff;
      padding: 1rem;
    }
    .hero {
      min-height: 400px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
    /* ... other critical styles ... */
  </style>

  <!-- Load non-critical CSS asynchronously -->
  <link
    rel="preload"
    as="style"
    href="/styles/main.css"
    onload="this.onload=null;this.rel='stylesheet'"
  />
  <noscript>
    <link rel="stylesheet" href="/styles/main.css">
  </noscript>
</head>
```

### 4. Optimize Web Fonts

```css
/* Use font-display: swap to prevent FOIT */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
}

/* Subset fonts to only needed characters */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-latin.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153;
  font-display: swap;
}

/* Use system fonts for instant render */
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
               'Helvetica Neue', Arial, sans-serif;
}
```

### 5. Server-Side Optimization

```javascript
// Enable compression (gzip/brotli)
app.use(compression());

// Set cache headers
app.use((req, res, next) => {
  if (req.url.match(/\.(jpg|jpeg|png|gif|webp|avif)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  next();
});

// Use CDN for static assets
const cdnUrl = 'https://cdn.jetselect.com';
```

## Optimizing INP (Interactivity)

### 1. Defer Non-Critical JavaScript

```html
<!-- ✅ Defer scripts that don't affect initial render -->
<script src="/js/analytics.js" defer></script>
<script src="/js/chat-widget.js" defer></script>

<!-- ✅ Async for independent scripts -->
<script src="/js/ads.js" async></script>

<!-- ❌ Avoid blocking scripts in <head> -->
<script src="/js/heavy-lib.js"></script> <!-- Blocks rendering -->
```

### 2. Code Splitting

```javascript
// Split code by route
const HomePage = lazy(() => import('./pages/Home'));
const JetsCatalog = lazy(() => import('./pages/JetsCatalog'));

// Split heavy libraries
button.addEventListener('click', async () => {
  const { formatDate } = await import('date-fns');
  console.log(formatDate(new Date()));
});
```

### 3. Debounce & Throttle

```javascript
// Debounce: Wait until user stops typing
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', debounce(async (e) => {
  const results = await fetch(`/api/search?q=${e.target.value}`);
  // Update UI
}, 300));

// Throttle: Limit execution frequency
function throttle(fn, limit) {
  let inThrottle;
  return (...args) => {
    if (!inThrottle) {
      fn(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

window.addEventListener('scroll', throttle(() => {
  // Update scroll position
}, 100));
```

### 4. Optimize Event Handlers

```javascript
// ❌ Don't attach handlers in loops
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.addEventListener('click', handleClick); // Creates N handlers
});

// ✅ Use event delegation
document.querySelector('.item-list').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    handleClick(e);
  }
});
```

### 5. Web Workers for Heavy Computation

```javascript
// main.js
const worker = new Worker('/js/worker.js');

worker.postMessage({ data: largeDataset });

worker.onmessage = (e) => {
  console.log('Result:', e.data);
};

// worker.js
self.onmessage = (e) => {
  const result = expensiveComputation(e.data);
  self.postMessage(result);
};
```

## Optimizing CLS (Layout Shift)

### 1. Reserve Space for Images

```html
<!-- ✅ Always include width and height -->
<img
  src="jet.jpg"
  width="800"
  height="600"
  alt="Private jet"
/>

<!-- ✅ Use aspect-ratio CSS -->
<style>
  .image-container {
    aspect-ratio: 16 / 9;
    width: 100%;
  }

  .image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
```

### 2. Reserve Space for Ads/Embeds

```css
/* Reserve space before ad loads */
.ad-container {
  min-height: 250px;
  background: #f3f4f6;
}

.ad-container::after {
  content: 'Advertisement';
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  color: #9ca3af;
}
```

### 3. Font Loading Strategy

```css
/* Prevent layout shift from font loading */
@font-face {
  font-family: 'CustomFont';
  src: url('/fonts/custom.woff2') format('woff2');
  font-display: swap;
  /* Optionally use size-adjust to match fallback metrics */
  size-adjust: 105%;
}

/* Match fallback font metrics */
body {
  font-family: 'CustomFont', Arial, sans-serif;
}
```

### 4. Skeleton Screens

```html
<div class="card-skeleton" aria-busy="true" aria-label="Loading content">
  <div class="skeleton skeleton-image"></div>
  <div class="skeleton skeleton-title"></div>
  <div class="skeleton skeleton-text"></div>
  <div class="skeleton skeleton-text"></div>
</div>
```

```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
  border-radius: 4px;
}

.skeleton-image {
  width: 100%;
  height: 200px;
  margin-bottom: 12px;
}

.skeleton-title {
  height: 24px;
  width: 60%;
  margin-bottom: 12px;
}

.skeleton-text {
  height: 16px;
  width: 100%;
  margin-bottom: 8px;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

### 5. Avoid Inserting Content Above

```javascript
// ❌ Don't insert content above existing content
function addNotification() {
  const container = document.querySelector('.notifications');
  container.insertBefore(notification, container.firstChild); // Causes shift
}

// ✅ Append to bottom or use fixed positioning
function addNotification() {
  const container = document.querySelector('.notifications');
  container.style.position = 'fixed';
  container.style.top = '20px';
  container.appendChild(notification); // No shift
}
```

## CSS Performance

### 1. Minimize Repaints & Reflows

```css
/* ✅ Transform and opacity are GPU-accelerated */
.element {
  transform: translateY(10px);
  opacity: 0.5;
}

/* ❌ These trigger layout recalculation */
.element {
  top: 10px;      /* Triggers reflow */
  width: 100px;   /* Triggers reflow */
  height: 100px;  /* Triggers reflow */
  margin: 10px;   /* Triggers reflow */
}
```

### 2. Use CSS Containment

```css
/* Isolate component rendering */
.card {
  contain: layout style paint;
}

/* For lists with many items */
.list-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 400px;
}
```

### 3. Efficient Selectors

```css
/* ✅ Efficient selectors */
.button { }
.card__title { }
#header { }

/* ❌ Inefficient selectors */
div > ul > li > a { }                /* Too specific */
[class*="button"] { }                /* Regex matching is slow */
.container * { }                     /* Universal selector */
```

### 4. Avoid Layout Thrashing

```javascript
// ❌ Layout thrashing (read-write-read-write)
elements.forEach(el => {
  const height = el.offsetHeight; // Read (forces layout)
  el.style.height = height + 10 + 'px'; // Write
});

// ✅ Batch reads, then batch writes
const heights = elements.map(el => el.offsetHeight); // Batch reads
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px'; // Batch writes
});
```

### 5. Will-Change Optimization

```css
/* ✅ Use sparingly for elements that will animate */
.modal {
  will-change: transform, opacity;
}

.modal.is-open {
  transform: translateY(0);
  opacity: 1;
}

/* ❌ Don't overuse - creates layers and uses memory */
* {
  will-change: transform; /* Never do this */
}
```

## JavaScript Performance

### 1. Lazy Loading

```javascript
// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.srcset = img.dataset.srcset;
      observer.unobserve(img);
    }
  });
}, {
  rootMargin: '50px' // Start loading 50px before visible
});

document.querySelectorAll('img[data-src]').forEach(img => {
  observer.observe(img);
});
```

### 2. RequestAnimationFrame

```javascript
// ❌ Don't update DOM in loops
for (let i = 0; i < 1000; i++) {
  element.style.top = i + 'px';
}

// ✅ Use requestAnimationFrame
function animate() {
  element.style.top = position + 'px';
  position++;

  if (position < 1000) {
    requestAnimationFrame(animate);
  }
}
requestAnimationFrame(animate);
```

### 3. Passive Event Listeners

```javascript
// ✅ Mark scroll/touch handlers as passive
document.addEventListener('scroll', handleScroll, { passive: true });
document.addEventListener('touchstart', handleTouch, { passive: true });
```

### 4. Virtual Scrolling for Long Lists

```javascript
// Only render visible items
class VirtualList {
  constructor(container, items, itemHeight) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.visibleStart = 0;
    this.visibleEnd = Math.ceil(container.clientHeight / itemHeight);

    this.render();
    container.addEventListener('scroll', () => this.onScroll());
  }

  onScroll() {
    const scrollTop = this.container.scrollTop;
    this.visibleStart = Math.floor(scrollTop / this.itemHeight);
    this.visibleEnd = this.visibleStart + Math.ceil(this.container.clientHeight / this.itemHeight);
    this.render();
  }

  render() {
    const visibleItems = this.items.slice(this.visibleStart, this.visibleEnd);
    this.container.style.height = (this.items.length * this.itemHeight) + 'px';
    this.container.style.paddingTop = (this.visibleStart * this.itemHeight) + 'px';

    this.container.innerHTML = visibleItems.map(item =>
      `<div class="item">${item}</div>`
    ).join('');
  }
}
```

## Image Optimization

### 1. Choose the Right Format

| Format | Use Case | Compression |
|--------|----------|-------------|
| AVIF | Modern browsers, best compression | Lossy/Lossless |
| WebP | Wide support, good compression | Lossy/Lossless |
| JPEG | Photos, gradients | Lossy |
| PNG | Graphics with transparency | Lossless |
| SVG | Icons, logos, simple graphics | Vector |

### 2. Compression Tools

```bash
# ImageOptim (GUI for Mac)
# Install: https://imageoptim.com/

# imagemin (CLI/build tool)
npm install imagemin imagemin-mozjpeg imagemin-pngquant

# Sharp (Node.js library)
npm install sharp
```

```javascript
// Sharp example
const sharp = require('sharp');

await sharp('input.jpg')
  .resize(800, 600, { fit: 'cover' })
  .webp({ quality: 80 })
  .toFile('output.webp');

await sharp('input.jpg')
  .resize(800, 600, { fit: 'cover' })
  .avif({ quality: 60 })
  .toFile('output.avif');
```

### 3. Responsive Images

```html
<!-- Generate multiple sizes -->
<img
  src="jet-400.jpg"
  srcset="
    jet-400.jpg 400w,
    jet-800.jpg 800w,
    jet-1200.jpg 1200w,
    jet-1600.jpg 1600w
  "
  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 80vw, 100vw"
  alt="Gulfstream G650"
  width="800"
  height="600"
  loading="lazy"
/>
```

## Monitoring & Measuring

### 1. Lighthouse CI

```bash
# Install
npm install -g @lhci/cli

# Run audit
lhci autorun --config=lighthouserc.json
```

```json
// lighthouserc.json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000"],
      "numberOfRuns": 3
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.9 }]
      }
    }
  }
}
```

### 2. Real User Monitoring (RUM)

```javascript
// web-vitals library
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id }) {
  fetch('/analytics', {
    method: 'POST',
    body: JSON.stringify({ name, value, id }),
    headers: { 'Content-Type': 'application/json' }
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
```

### 3. Performance Observer API

```javascript
// Monitor long tasks
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.warn('Long task detected:', entry.duration);
  });
});
observer.observe({ entryTypes: ['longtask'] });

// Monitor layout shifts
const clsObserver = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (!entry.hadRecentInput) {
      console.log('Layout shift:', entry.value);
    }
  });
});
clsObserver.observe({ entryTypes: ['layout-shift'] });
```

## Performance Budget

Set and enforce performance budgets:

```json
{
  "budgets": {
    "desktop": {
      "lcp": 2500,
      "fid": 100,
      "cls": 0.1,
      "totalSize": "500kb",
      "imageSize": "300kb",
      "jsSize": "150kb",
      "cssSize": "50kb"
    },
    "mobile": {
      "lcp": 3500,
      "fid": 100,
      "cls": 0.1,
      "totalSize": "350kb",
      "imageSize": "200kb",
      "jsSize": "100kb",
      "cssSize": "50kb"
    }
  }
}
```

## Quick Wins Checklist

- [ ] Add `width` and `height` to all images
- [ ] Use `loading="lazy"` on below-fold images
- [ ] Compress and convert images to WebP/AVIF
- [ ] Inline critical CSS
- [ ] Defer non-critical JavaScript
- [ ] Use `font-display: swap`
- [ ] Enable gzip/brotli compression
- [ ] Add cache headers
- [ ] Preconnect to critical third-party origins
- [ ] Remove unused CSS/JavaScript
- [ ] Use a CDN for static assets
- [ ] Minimize third-party scripts
- [ ] Optimize Google Fonts (use font-display, subset)
- [ ] Use system fonts where possible

Remember: **Performance is a feature, not a bonus.** Fast sites convert better and rank higher.
