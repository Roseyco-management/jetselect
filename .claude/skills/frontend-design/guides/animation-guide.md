# Animation & Motion Design Guide

Professional guide to creating performant, accessible animations that enhance user experience.

## Core Principles

1. **Purpose over decoration** - Every animation should serve a purpose
2. **Performance first** - 60fps minimum, use GPU-accelerated properties
3. **Accessibility always** - Respect `prefers-reduced-motion`
4. **Consistency** - Use consistent timing and easing across the site
5. **Subtlety** - Less is more; animations should feel natural, not distracting

## Animation Performance

### GPU-Accelerated Properties

```css
/* ✅ Only animate these properties for smooth 60fps */
.element {
  transform: translateX(100px);  /* ✓ GPU-accelerated */
  opacity: 0.5;                  /* ✓ GPU-accelerated */
}

/* ❌ Avoid animating these (trigger layout/paint) */
.element {
  top: 100px;        /* ✗ Triggers layout */
  left: 100px;       /* ✗ Triggers layout */
  width: 500px;      /* ✗ Triggers layout */
  height: 300px;     /* ✗ Triggers layout */
  margin: 20px;      /* ✗ Triggers layout */
  padding: 20px;     /* ✗ Triggers layout */
  background: blue;  /* ✗ Triggers paint */
  color: red;        /* ✗ Triggers paint */
  box-shadow: ...;   /* ✗ Triggers paint */
}
```

### Transform Instead of Position

```css
/* ❌ Animating position (slow) */
@keyframes slideInSlow {
  from { left: -100px; }
  to { left: 0; }
}

/* ✅ Animating transform (fast) */
@keyframes slideInFast {
  from { transform: translateX(-100px); }
  to { transform: translateX(0); }
}

.element {
  animation: slideInFast 0.3s ease-out;
}
```

### Will-Change Optimization

```css
/* Use sparingly - tells browser to optimize */
.modal {
  will-change: transform, opacity;
}

.modal.is-open {
  transform: translateY(0);
  opacity: 1;
}

/* Remove after animation completes */
.modal.animation-complete {
  will-change: auto;
}
```

```javascript
const modal = document.querySelector('.modal');

modal.addEventListener('transitionend', () => {
  modal.style.willChange = 'auto';
});
```

## Timing & Easing

### Duration Guidelines

| Animation Type | Duration | Use Case |
|----------------|----------|----------|
| Micro-interactions | 100-200ms | Hover, focus, button press |
| Simple transitions | 200-300ms | Fade in/out, slide |
| Complex transitions | 300-500ms | Page transitions, modal open |
| Attention-seeking | 500-1000ms | Loading spinners, success animations |

```css
:root {
  --duration-instant: 50ms;
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 350ms;
  --duration-slower: 500ms;
}
```

### Easing Functions

```css
:root {
  /* Standard easings */
  --ease-linear: cubic-bezier(0, 0, 1, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);        /* Accelerate */
  --ease-out: cubic-bezier(0, 0, 0.2, 1);       /* Decelerate */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);  /* Smooth */

  /* Custom easings */
  --ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bouncy */
  --ease-smooth: cubic-bezier(0.4, 0.0, 0.2, 1);         /* Material Design */
  --ease-snappy: cubic-bezier(0.25, 0.46, 0.45, 0.94);   /* Quick & responsive */
}

/* Usage examples */
.button {
  transition: transform var(--duration-fast) var(--ease-out);
}

.modal {
  transition: opacity var(--duration-normal) var(--ease-in-out);
}

.notification {
  animation: slideIn var(--duration-slow) var(--ease-spring);
}
```

### When to Use Each Easing

- **Ease-out**: Elements entering the screen
- **Ease-in**: Elements leaving the screen
- **Ease-in-out**: Elements moving within the screen
- **Linear**: Loading spinners, progress bars

```css
/* Element entering */
.fade-in {
  animation: fadeIn 0.3s ease-out;
}

/* Element leaving */
.fade-out {
  animation: fadeOut 0.3s ease-in;
}

/* Element moving position */
.slide-across {
  animation: slide 0.3s ease-in-out;
}
```

## Common Animation Patterns

### 1. Fade In/Out

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}

.fade-out {
  animation: fadeOut 0.3s ease-in;
}
```

### 2. Slide In/Out

```css
@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInDown {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.slide-in-up {
  animation: slideInUp 0.3s ease-out;
}
```

### 3. Scale & Zoom

```css
@keyframes scaleIn {
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

.modal {
  animation: scaleIn 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
```

### 4. Rotate & Flip

```css
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes flipIn {
  from {
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
  to {
    transform: perspective(400px) rotateY(0);
    opacity: 1;
  }
}

.spinner {
  animation: rotate 1s linear infinite;
}

.card {
  animation: flipIn 0.6s ease-out;
}
```

### 5. Bounce & Elastic

```css
@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

@keyframes elastic {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.notification {
  animation: bounce 1s;
}

.button:active {
  animation: elastic 0.3s;
}
```

### 6. Shimmer/Skeleton Loading

```css
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite linear;
}
```

### 7. Pulse & Heartbeat

```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes heartbeat {
  0%, 100% {
    transform: scale(1);
  }
  25%, 75% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.95);
  }
}

.loading-indicator {
  animation: pulse 2s infinite;
}

.favorite-button.liked {
  animation: heartbeat 0.6s;
}
```

## Micro-interactions

### Button Press

```css
.button {
  transition: transform 0.1s ease-out, box-shadow 0.1s ease-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Ripple Effect

```css
.button {
  position: relative;
  overflow: hidden;
}

.button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.button:active::after {
  width: 300px;
  height: 300px;
}
```

### Checkbox Animation

```css
.checkbox {
  position: relative;
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  transition: all 0.2s ease-out;
}

input:checked + .checkbox {
  background: #4f46e5;
  border-color: #4f46e5;
  transform: scale(1.1);
}

.checkbox::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg) scale(0);
  transition: transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

input:checked + .checkbox::after {
  transform: rotate(45deg) scale(1);
}
```

### Toggle Switch

```css
.toggle {
  position: relative;
  width: 50px;
  height: 26px;
  background: #ccc;
  border-radius: 13px;
  transition: background 0.3s;
}

.toggle::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 22px;
  height: 22px;
  background: white;
  border-radius: 50%;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

input:checked + .toggle {
  background: #4f46e5;
}

input:checked + .toggle::after {
  transform: translateX(24px);
}
```

## Page Transitions

### Fade Transition

```css
.page-enter {
  opacity: 0;
}

.page-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-out;
}

.page-exit {
  opacity: 1;
}

.page-exit-active {
  opacity: 0;
  transition: opacity 300ms ease-in;
}
```

### Slide Transition

```css
.page-enter {
  transform: translateX(100%);
}

.page-enter-active {
  transform: translateX(0);
  transition: transform 300ms ease-out;
}

.page-exit {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transform: translateX(0);
}

.page-exit-active {
  transform: translateX(-100%);
  transition: transform 300ms ease-in;
}
```

## Scroll Animations

### Intersection Observer

```javascript
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.animate-on-scroll.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Stagger Animation

```css
.list-item {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease-out forwards;
}

.list-item:nth-child(1) { animation-delay: 0.1s; }
.list-item:nth-child(2) { animation-delay: 0.2s; }
.list-item:nth-child(3) { animation-delay: 0.3s; }
.list-item:nth-child(4) { animation-delay: 0.4s; }
.list-item:nth-child(5) { animation-delay: 0.5s; }

/* Dynamic calculation */
@for $i from 1 through 20 {
  .list-item:nth-child(#{$i}) {
    animation-delay: #{$i * 0.1}s;
  }
}
```

## Loading Animations

### Spinner

```css
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #4f46e5;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

### Dots

```css
@keyframes bounce {
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
}

.loading-dots {
  display: flex;
  gap: 8px;
}

.loading-dots span {
  width: 8px;
  height: 8px;
  background: #4f46e5;
  border-radius: 50%;
  animation: bounce 1.4s infinite ease-in-out;
}

.loading-dots span:nth-child(1) {
  animation-delay: -0.32s;
}

.loading-dots span:nth-child(2) {
  animation-delay: -0.16s;
}
```

### Progress Bar

```css
@keyframes progress {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.progress-bar {
  position: relative;
  width: 100%;
  height: 4px;
  background: #e0e0e0;
  overflow: hidden;
}

.progress-bar::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #4f46e5, transparent);
  animation: progress 1.5s infinite;
}
```

## Accessibility: Reduced Motion

```css
/* Default: full animations */
.element {
  animation: slideIn 0.3s ease-out;
  transition: all 0.3s;
}

/* Reduced motion: instant or minimal */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  /* Disable parallax */
  .parallax {
    transform: none !important;
  }

  /* Keep essential animations but simplify */
  .spinner {
    animation: spin 1s linear infinite;
    /* Spinner still spins but OK because it's essential feedback */
  }
}
```

```javascript
// JavaScript detection
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable animations
  document.body.classList.add('reduce-motion');
} else {
  // Enable animations
  document.body.classList.remove('reduce-motion');
}

// Listen for changes
prefersReducedMotion.addEventListener('change', () => {
  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduce-motion');
  } else {
    document.body.classList.remove('reduce-motion');
  }
});
```

## Animation Best Practices

### ✅ Do

- Use GPU-accelerated properties (`transform`, `opacity`)
- Keep animations under 500ms for most UI interactions
- Provide `prefers-reduced-motion` alternatives
- Use `will-change` sparingly and remove after animation
- Test on low-end devices
- Use `requestAnimationFrame` for JavaScript animations
- Provide clear visual feedback for user actions
- Use consistent timing across similar interactions

### ❌ Don't

- Animate `width`, `height`, `top`, `left`, `margin`, `padding`
- Make animations too long (users will wait)
- Auto-play looping animations without pause control
- Use animations just for decoration
- Forget to test on mobile devices
- Use too many simultaneous animations
- Animate on scroll without throttling/debouncing
- Ignore `prefers-reduced-motion`

## Testing Animations

### Browser DevTools

**Chrome DevTools:**
1. Open DevTools → More Tools → Animations
2. Slow down animations to debug
3. Replay and inspect timing

**Firefox DevTools:**
1. Inspector → Animations panel
2. Pause and scrub through animations
3. Adjust timing functions visually

### Performance Testing

```javascript
// Measure animation performance
const start = performance.now();

element.addEventListener('animationend', () => {
  const duration = performance.now() - start;
  console.log(`Animation took ${duration}ms`);
});

// Monitor frame rate
let lastTime = performance.now();
let frames = 0;

function measureFPS() {
  const now = performance.now();
  frames++;

  if (now >= lastTime + 1000) {
    const fps = Math.round((frames * 1000) / (now - lastTime));
    console.log(`FPS: ${fps}`);
    frames = 0;
    lastTime = now;
  }

  requestAnimationFrame(measureFPS);
}

measureFPS();
```

## Animation Library Recommendations

**Lightweight:**
- **anime.js** - 9KB, powerful and flexible
- **GreenSock (GSAP)** - Industry standard, feature-rich
- **Motion One** - 5KB, modern, performant

**React/Framework:**
- **Framer Motion** - Declarative animations for React
- **React Spring** - Physics-based animations
- **Auto Animate** - Zero-config automatic animations

**CSS-based:**
- **Animate.css** - Ready-to-use CSS animations
- **Hover.css** - Hover effects collection

---

**Remember:** Animation should enhance usability, not hinder it. Every animation should have a purpose—whether providing feedback, guiding attention, or establishing spatial relationships. When in doubt, keep it subtle and fast.
