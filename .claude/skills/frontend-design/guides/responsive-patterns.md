# Responsive Design Patterns

Advanced responsive design techniques and patterns for modern web applications.

## Mobile-First Philosophy

Start with mobile, enhance for larger screens.

```css
/* ❌ Desktop-first (requires overriding) */
.container {
  width: 1200px;
  padding: 40px;
}

@media (max-width: 768px) {
  .container {
    width: 100%;
    padding: 16px;
  }
}

/* ✅ Mobile-first (progressive enhancement) */
.container {
  width: 100%;
  padding: 16px;
}

@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px;
  }
}
```

## Breakpoint Strategy

### Standard Breakpoints

```css
:root {
  /* Mobile first breakpoints */
  --breakpoint-sm: 640px;   /* Small tablets, large phones */
  --breakpoint-md: 768px;   /* Tablets */
  --breakpoint-lg: 1024px;  /* Laptops */
  --breakpoint-xl: 1280px;  /* Desktops */
  --breakpoint-2xl: 1536px; /* Large desktops */
}

/* Base: Mobile (320px - 639px) */
.component {
  padding: 16px;
}

/* Small (640px+) */
@media (min-width: 640px) {
  .component {
    padding: 20px;
  }
}

/* Medium (768px+) */
@media (min-width: 768px) {
  .component {
    padding: 24px;
  }
}

/* Large (1024px+) */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
  }
}

/* XL (1280px+) */
@media (min-width: 1280px) {
  .component {
    padding: 40px;
  }
}
```

### Content-Based Breakpoints

```css
/* Let content dictate breakpoints */
.navigation {
  display: flex;
  flex-direction: column;
}

/* Break when content needs more space, not at arbitrary device width */
@media (min-width: 45em) { /* ~720px */
  .navigation {
    flex-direction: row;
  }
}
```

## Responsive Layout Patterns

### 1. The Sidebar Pattern

```css
.layout {
  display: grid;
  gap: 2rem;
}

/* Sidebar appears on larger screens */
@media (min-width: 768px) {
  .layout {
    grid-template-columns: 250px 1fr;
  }
}

/* Wide sidebar on desktop */
@media (min-width: 1024px) {
  .layout {
    grid-template-columns: 300px 1fr;
  }
}
```

### 2. The Pancake Stack

```css
/* Stack vertically on mobile */
.pancake {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}

.header { grid-area: header; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

### 3. Holy Grail Layout

```css
.holy-grail {
  display: grid;
  gap: 1rem;
  grid-template-areas:
    "header"
    "nav"
    "main"
    "aside"
    "footer";
  min-height: 100vh;
}

@media (min-width: 768px) {
  .holy-grail {
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: auto 1fr auto;
  }
}
```

### 4. Auto-Responsive Grid

```css
/* Grid that automatically adjusts columns */
.grid {
  display: grid;
  gap: 1.5rem;
  /* Min 250px, max 1fr, as many columns as fit */
  grid-template-columns: repeat(auto-fit, minmax(min(250px, 100%), 1fr));
}

/* With container queries */
.grid-container {
  container-type: inline-size;
}

.grid {
  display: grid;
  gap: 1rem;
}

@container (min-width: 400px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@container (min-width: 600px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@container (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

### 5. RAM (Repeat, Auto, Minmax)

```css
.ram-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

/* Responsive without media queries! */
```

### 6. Line Length Control

```css
/* Maintain readable line length */
.content {
  max-width: 65ch; /* 65 characters wide */
  margin: 0 auto;
  padding: 0 1rem;
}

/* For wider content areas */
.wide-content {
  max-width: min(90ch, 90%);
  margin: 0 auto;
}
```

## Container Queries

```css
/* Define container */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* Card layout changes based on container size, not viewport */
.card {
  display: flex;
  flex-direction: column;
}

@container card (min-width: 400px) {
  .card {
    flex-direction: row;
  }

  .card__image {
    width: 40%;
  }

  .card__content {
    width: 60%;
  }
}

@container card (min-width: 600px) {
  .card {
    gap: 2rem;
  }

  .card__title {
    font-size: 2rem;
  }
}
```

## Fluid Typography

### Clamp-Based Scaling

```css
:root {
  /* Fluid typography using clamp() */
  --font-size-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --font-size-lg: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --font-size-xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --font-size-2xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --font-size-3xl: clamp(2.5rem, 2rem + 2.5vw, 4rem);
}

h1 {
  font-size: var(--font-size-3xl);
  line-height: 1.1;
}

h2 {
  font-size: var(--font-size-2xl);
  line-height: 1.2;
}

body {
  font-size: var(--font-size-base);
  line-height: 1.6;
}
```

### Calculate Fluid Values

```
clamp(MIN, PREFERRED, MAX)

Formula for PREFERRED:
MIN_REM + (MAX_REM - MIN_REM) * ((100vw - MIN_WIDTH) / (MAX_WIDTH - MIN_WIDTH))

Example:
- Min size: 16px (1rem) at 320px viewport
- Max size: 24px (1.5rem) at 1920px viewport
- PREFERRED = 1rem + (1.5 - 1) * ((100vw - 320px) / (1920 - 320))
- Simplified: 1rem + 0.5 * ((100vw - 320px) / 1600)
- Even simpler: 1rem + 0.031vw

Result: clamp(1rem, 1rem + 0.5vw, 1.5rem)
```

### Fluid Spacing

```css
:root {
  /* Fluid spacing */
  --space-xs: clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem);
  --space-sm: clamp(0.75rem, 0.6rem + 0.75vw, 1rem);
  --space-md: clamp(1rem, 0.8rem + 1vw, 1.5rem);
  --space-lg: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --space-xl: clamp(2rem, 1.5rem + 2.5vw, 3rem);
  --space-2xl: clamp(3rem, 2rem + 5vw, 5rem);
}

.section {
  padding-block: var(--space-xl);
  padding-inline: var(--space-md);
}
```

## Responsive Images

### Art Direction with `<picture>`

```html
<!-- Different crops for different screen sizes -->
<picture>
  <!-- Desktop: wide landscape -->
  <source
    media="(min-width: 1024px)"
    srcset="
      jet-wide-1920.webp 1920w,
      jet-wide-1280.webp 1280w
    "
    sizes="100vw"
  />

  <!-- Tablet: standard landscape -->
  <source
    media="(min-width: 768px)"
    srcset="
      jet-medium-1024.webp 1024w,
      jet-medium-768.webp 768w
    "
    sizes="100vw"
  />

  <!-- Mobile: portrait crop -->
  <img
    src="jet-mobile-640.jpg"
    srcset="
      jet-mobile-640.webp 640w,
      jet-mobile-480.webp 480w
    "
    sizes="100vw"
    alt="Gulfstream G650 on runway"
    width="640"
    height="427"
  />
</picture>
```

### Resolution Switching

```html
<!-- Same image, different resolutions -->
<img
  src="jet-800.jpg"
  srcset="
    jet-400.jpg 400w,
    jet-800.jpg 800w,
    jet-1200.jpg 1200w,
    jet-1600.jpg 1600w,
    jet-2400.jpg 2400w
  "
  sizes="(min-width: 1024px) 50vw, (min-width: 768px) 80vw, 100vw"
  alt="Luxury jet interior"
  width="800"
  height="600"
  loading="lazy"
/>
```

### Background Images

```css
.hero {
  background-image: url('hero-mobile.jpg');
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .hero {
    background-image: url('hero-tablet.jpg');
  }
}

@media (min-width: 1024px) {
  .hero {
    background-image: url('hero-desktop.jpg');
  }
}

/* High DPI displays */
@media (min-width: 1024px) and (-webkit-min-device-pixel-ratio: 2),
       (min-width: 1024px) and (min-resolution: 192dpi) {
  .hero {
    background-image: url('hero-desktop-2x.jpg');
  }
}

/* Modern: image-set() */
.hero {
  background-image: image-set(
    'hero.webp' 1x,
    'hero-2x.webp' 2x
  );
}
```

## Responsive Navigation

### Mobile Menu Pattern

```html
<nav class="nav">
  <a href="/" class="nav__logo">JetSelect</a>

  <button
    class="nav__toggle"
    aria-expanded="false"
    aria-controls="nav-menu"
    aria-label="Toggle navigation"
  >
    <span class="nav__hamburger"></span>
  </button>

  <ul id="nav-menu" class="nav__menu" hidden>
    <li><a href="/jets">Browse Jets</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

/* Mobile menu hidden by default */
.nav__menu {
  position: fixed;
  top: 72px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 2rem;
  transform: translateX(100%);
  transition: transform 0.3s;
  list-style: none;
}

.nav__toggle[aria-expanded="true"] ~ .nav__menu {
  transform: translateX(0);
}

.nav__toggle {
  display: block;
}

/* Desktop: show inline */
@media (min-width: 768px) {
  .nav__toggle {
    display: none;
  }

  .nav__menu {
    position: static;
    display: flex;
    gap: 2rem;
    padding: 0;
    transform: none;
    background: transparent;
  }

  .nav__menu[hidden] {
    display: flex;
  }
}
```

## Touch-Friendly Interactions

### Minimum Touch Target Size

```css
/* Ensure 48x48px minimum tap target */
.button,
.link {
  min-height: 48px;
  min-width: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
}

/* Increase spacing between touch targets */
.button-group {
  display: flex;
  gap: 12px; /* Minimum 8px, 12px preferred */
}

/* Expand touch area without changing visual size */
.icon-button {
  position: relative;
  width: 24px;
  height: 24px;
}

.icon-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 48px;
  min-height: 48px;
}
```

### Hover vs Touch

```css
/* Only show hover effects on devices that support hover */
@media (hover: hover) {
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
}

/* Touch devices: use :active instead */
@media (hover: none) {
  .card:active {
    opacity: 0.9;
  }
}
```

## Viewport Units & Safe Areas

### Safe Area Insets (for iPhone notch, etc.)

```css
.header {
  padding-top: env(safe-area-inset-top);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

.footer {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Combine with custom padding */
.container {
  padding: calc(1rem + env(safe-area-inset-top))
           calc(1rem + env(safe-area-inset-right))
           calc(1rem + env(safe-area-inset-bottom))
           calc(1rem + env(safe-area-inset-left));
}
```

### Modern Viewport Units

```css
/* Traditional viewport units */
.hero {
  height: 100vh; /* Problem: doesn't account for mobile browser UI */
}

/* Modern: dynamic viewport units */
.hero {
  height: 100dvh; /* Dynamic viewport height - adjusts as browser UI shows/hides */
}

.modal {
  height: 100svh; /* Small viewport height - always visible area */
}

.fullscreen {
  height: 100lvh; /* Large viewport height - maximum height */
}
```

## Orientation Detection

```css
/* Portrait orientation */
@media (orientation: portrait) {
  .gallery {
    grid-template-columns: 1fr;
  }
}

/* Landscape orientation */
@media (orientation: landscape) {
  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Specific mobile landscape */
@media (max-height: 500px) and (orientation: landscape) {
  .nav {
    padding: 0.5rem;
  }

  .hero {
    min-height: auto;
  }
}
```

## Print Styles

```css
@media print {
  /* Hide navigation, ads, etc. */
  .nav,
  .footer,
  .sidebar,
  .ad,
  .social-share {
    display: none;
  }

  /* Expand containers */
  .container {
    max-width: 100%;
    margin: 0;
    padding: 0;
  }

  /* Ensure black text on white */
  body {
    color: #000;
    background: #fff;
  }

  /* Show link URLs */
  a[href]::after {
    content: " (" attr(href) ")";
  }

  /* Prevent page breaks inside elements */
  h1, h2, h3, h4, h5, h6 {
    page-break-after: avoid;
  }

  img {
    max-width: 100%;
    page-break-inside: avoid;
  }

  /* Optimize for printing */
  * {
    background: transparent !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
}
```

## Logical Properties (i18n)

```css
/* Traditional (LTR only) */
.element {
  margin-left: 1rem;
  padding-right: 2rem;
  border-left: 2px solid;
}

/* Logical (works for RTL and LTR) */
.element {
  margin-inline-start: 1rem;  /* Left in LTR, right in RTL */
  padding-inline-end: 2rem;   /* Right in LTR, left in RTL */
  border-inline-start: 2px solid; /* Left in LTR, right in RTL */
}

/* Block axis (vertical) */
.element {
  margin-block-start: 1rem;   /* Top */
  margin-block-end: 1rem;     /* Bottom */
  padding-block: 2rem;        /* Top and bottom */
}

/* Inline axis (horizontal) */
.element {
  margin-inline-start: 1rem;  /* Start edge */
  margin-inline-end: 1rem;    /* End edge */
  padding-inline: 2rem;       /* Start and end */
}
```

## Responsive Testing Checklist

### Viewport Sizes

- [ ] 320px - iPhone SE (smallest common mobile)
- [ ] 375px - iPhone standard
- [ ] 414px - iPhone Plus
- [ ] 768px - iPad portrait
- [ ] 1024px - iPad landscape, small laptops
- [ ] 1280px - Standard laptop
- [ ] 1920px - Desktop monitor
- [ ] 2560px+ - Large desktop, ultra-wide

### Device Testing

- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Android tablet (Chrome)
- [ ] Desktop (Chrome, Firefox, Safari, Edge)

### Orientation Testing

- [ ] Portrait mode
- [ ] Landscape mode
- [ ] Landscape on mobile (special case)

### Zoom Testing

- [ ] 100% zoom (default)
- [ ] 200% zoom (accessibility requirement)
- [ ] 400% zoom (WCAG AAA)

### Feature Testing

- [ ] Touch interactions
- [ ] Keyboard navigation
- [ ] Mouse/trackpad
- [ ] Stylus (if applicable)

---

**Key Principle:** Design for the smallest screen first, then enhance progressively. Content should be accessible and usable at any size.
