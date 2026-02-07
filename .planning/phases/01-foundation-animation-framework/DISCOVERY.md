# Phase 1 Discovery: Animation Framework for Vanilla JS

**Date:** 2026-02-07
**Depth:** Level 2 (Standard Research)
**Reason:** New library integration, architecture decision for animation patterns

## Problem Statement

JetSelect needs smooth, professional animations to match luxury brand standards. The roadmap suggests "Framer Motion" but the codebase is vanilla JavaScript (zero dependencies, no React).

**Challenge:** Framer Motion is a React library. We need to either:
1. Find vanilla JS animation libraries with similar quality
2. Use native Web Animations API
3. Consider lightweight alternatives

## Research Questions

1. What are the best vanilla JS animation libraries for luxury/smooth animations?
2. Can we achieve Framer Motion quality with native Web Animations API?
3. What animation patterns do luxury brands use?
4. How to structure animation code in our existing class-based architecture?

## Findings

### Option 1: Native Web Animations API (WAAPI)
**What it is:** Browser-native animation API (no dependencies)

**Pros:**
- Zero dependencies (maintains current architecture)
- Native performance (GPU-accelerated)
- Full control over timing, easing, keyframes
- Well-supported (97% browser coverage)
- Works with existing vanilla JS classes

**Cons:**
- More verbose than libraries
- Need to build our own animation utilities
- No pre-built animation patterns

**Code example:**
```javascript
element.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 600,
  easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  fill: 'forwards'
});
```

### Option 2: anime.js
**What it is:** Lightweight JS animation library (9KB gzipped)

**Pros:**
- Small footprint (fits our performance goals)
- Smooth animations with excellent easing curves
- Works with vanilla JS (no framework needed)
- Used by luxury brands (Apple, Google, Stripe)
- Simple API, chainable animations

**Cons:**
- Adds dependency (breaks zero-dependency pattern)
- Still need to learn library API

**Code example:**
```javascript
anime({
  targets: '.option-card',
  translateY: [20, 0],
  opacity: [0, 1],
  duration: 600,
  easing: 'easeOutExpo',
  delay: anime.stagger(100)
});
```

### Option 3: GreenSock (GSAP)
**What it is:** Industry-standard animation library (50KB core)

**Pros:**
- Gold standard for web animations
- Extremely smooth performance
- Used by luxury brands worldwide
- Powerful timeline system
- ScrollTrigger plugin for scroll effects

**Cons:**
- Larger bundle size (50KB+ vs our 15KB JS)
- Overkill for basic fade/slide animations
- Commercial license for some features

### Option 4: Motion One
**What it is:** Modern Web Animations API wrapper (5KB)

**Pros:**
- Tiny (5KB gzipped - smallest option)
- Built on native WAAPI (great performance)
- Simple API similar to Framer Motion
- Created by Framer Motion author
- Perfect for vanilla JS

**Cons:**
- Relatively new (less battle-tested)
- Smaller community than GSAP/anime

**Code example:**
```javascript
import { animate } from 'motion';

animate('.option-card',
  { opacity: [0, 1], y: [20, 0] },
  { duration: 0.6, easing: 'ease-out' }
);
```

## Recommendation

**Use Motion One** for Phase 1 animation framework.

**Rationale:**
1. **Tiny footprint** - 5KB vs our current 15KB JS (33% increase, acceptable)
2. **Framer Motion DNA** - Same author, similar API patterns
3. **Native performance** - Built on Web Animations API (GPU-accelerated)
4. **Vanilla JS friendly** - No React required
5. **Future-proof** - Modern, actively maintained
6. **Luxury quality** - Smooth easing curves match premium brands

**Animation Architecture:**
- Create `AnimationManager` class (follows existing pattern: LanguageManager, JetSelector)
- Centralize animation timing/easing constants
- Reusable methods: `fadeIn()`, `slideUp()`, `stagger()`, etc.
- Progressive enhancement: animations as add-on to existing functionality

## Implementation Strategy

1. **Install Motion One** via CDN (no build step needed):
   ```html
   <script src="https://cdn.jsdelivr.net/npm/motion@11/dist/motion.js"></script>
   ```

2. **Create AnimationManager class** in `improved/js/script.js`:
   - Define luxury brand timing curves
   - Create reusable animation methods
   - Integrate with existing wizard flow

3. **Apply to existing interactions**:
   - Step transitions (fade + slide)
   - Option card selections (scale + highlight)
   - Progress bar animations (smooth width changes)
   - Form validation feedback (shake, highlight)

4. **Performance target**: Keep total JS < 25KB (currently 15KB + 5KB Motion = 20KB)

## Success Criteria

- [ ] Motion One integrated (5KB bundle size confirmed)
- [ ] AnimationManager class created and initialized
- [ ] Smooth step transitions implemented
- [ ] No jank or dropped frames (60fps maintained)
- [ ] Total JS bundle < 25KB

## References

- Motion One docs: https://motion.dev/
- Web Animations API: https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API
- Luxury animation timing curves: https://easings.net/
