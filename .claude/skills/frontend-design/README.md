# Frontend Design Skill

Professional frontend design guidance for building accessible, performant, and beautiful web experiences.

## What This Skill Does

This skill provides expert-level frontend design consultation, including:

- **Accessibility** - WCAG 2.1 AA/AAA compliance, semantic HTML, ARIA, keyboard navigation
- **Responsive Design** - Mobile-first patterns, fluid typography, container queries
- **Performance** - Core Web Vitals optimization, image optimization, CSS/JS best practices
- **User Experience** - Interaction states, micro-interactions, loading states, error handling
- **Design Systems** - CSS architecture, naming conventions, design tokens
- **Modern CSS** - Grid, Flexbox, custom properties, logical properties
- **Animation** - Performant animations, reduced motion support

## How to Use

### Direct Invocation

```bash
# Review a specific component
/frontend-design src/components/Button.tsx

# Focus on a specific aspect
/frontend-design src/components/Header.tsx accessibility
/frontend-design src/components/Card.tsx performance
/frontend-design src/pages/Home.tsx responsive

# General consultation
/frontend-design
```

### Automatic Invocation

Just ask questions naturally, and the skill will automatically activate:

```
"How should I design an accessible modal dialog?"
"Review the card component for accessibility issues"
"What's the best way to implement responsive navigation?"
"How can I optimize the performance of this page?"
```

## File Structure

```
frontend-design/
├── SKILL.md                        # Main skill instructions
├── README.md                       # This file
├── design-patterns.md              # Common component patterns
├── component-checklist.md          # Quality assurance checklist
├── guides/
│   ├── accessibility-guide.md      # WCAG compliance deep dive
│   ├── performance-guide.md        # Performance optimization
│   ├── responsive-patterns.md      # Responsive design patterns
│   └── animation-guide.md          # Animation best practices
└── examples/
    └── jet-card-component.html     # Production-ready examples
```

## Key Features

### 1. Comprehensive Accessibility Support

- WCAG 2.1 AA/AAA guidelines
- Semantic HTML patterns
- ARIA attribute usage
- Keyboard navigation patterns
- Screen reader testing
- Color contrast checking
- Focus management
- Motion sensitivity

### 2. Performance-First Approach

- Core Web Vitals optimization
- Image optimization strategies
- CSS/JS performance patterns
- Layout shift prevention
- Loading strategies
- Caching recommendations
- Real User Monitoring (RUM)

### 3. Responsive Design Patterns

- Mobile-first methodology
- Fluid typography with `clamp()`
- Container queries
- Responsive images with `srcset`
- Touch-friendly interactions
- Viewport unit strategies
- Safe area insets

### 4. Design System Architecture

- CSS custom properties (design tokens)
- BEM naming convention
- Component composition patterns
- Consistent spacing scales
- Typography systems
- Color palettes
- Z-index management

### 5. Modern CSS Techniques

- CSS Grid layouts
- Flexbox patterns
- CSS containment
- Logical properties (i18n)
- Modern selectors (`:is()`, `:has()`)
- Custom scrollbars
- Scroll snap

### 6. Animation Excellence

- GPU-accelerated animations
- Performance-optimized timing
- Reduced motion support
- Loading animations
- Micro-interactions
- Page transitions
- Scroll-triggered animations

## Quality Standards

Every component reviewed or created follows these standards:

✅ **Accessibility**
- WCAG 2.1 AA minimum compliance
- Keyboard accessible
- Screen reader compatible
- Sufficient color contrast
- Motion preferences respected

✅ **Performance**
- LCP < 2.5s
- FID < 100ms
- CLS < 0.1
- Optimized images
- Minimal JavaScript

✅ **Responsive**
- Works 320px - 2560px+
- Touch targets 48×48px minimum
- Tested on real devices
- Adaptive layouts
- Fluid typography

✅ **User Experience**
- All 5 states defined (default, hover, focus, active, disabled)
- Clear loading states
- Helpful error messages
- Success feedback
- Smooth animations

✅ **Code Quality**
- Consistent naming (BEM)
- Design tokens (CSS variables)
- No magic numbers
- DRY principles
- Well-commented

## Example Use Cases

### Component Review

```
You: /frontend-design src/components/ContactForm.tsx

Skill: Reviewing ContactForm component...

Accessibility Issues:
- Missing label associations (use `for` attribute)
- Error messages not announced to screen readers (add `role="alert"`)
- Submit button needs aria-live feedback

Performance Recommendations:
- Form validation triggers unnecessary reflows
- Use debouncing for real-time validation

UX Improvements:
- Show loading state on submit button
- Provide clear success confirmation
- Error messages should appear inline, not as alerts

Responsive Considerations:
- Form inputs need larger touch targets on mobile (min 48px)
- Consider stacking fields vertically on mobile
```

### Design Consultation

```
You: How should I implement a responsive navigation menu?

Skill: For responsive navigation, I recommend:

1. Mobile-First Approach:
   - Start with hamburger menu for mobile
   - Expand to horizontal navigation on tablet+
   - Use aria-expanded for accessibility

2. Implementation Pattern:
   [Provides code example]

3. Accessibility Considerations:
   - Keyboard navigation with Tab/Shift+Tab
   - Close on Escape key
   - Focus trap when menu is open
   - Screen reader announcements

4. Performance:
   - No layout shift when opening
   - GPU-accelerated animations
   - Respect prefers-reduced-motion
```

## Resources Included

### Guides

1. **Accessibility Guide** - Complete WCAG 2.1 AA/AAA reference
2. **Performance Guide** - Core Web Vitals and optimization techniques
3. **Responsive Patterns** - Mobile-first design patterns
4. **Animation Guide** - Performant animation best practices

### Patterns

- Navigation (mobile & desktop)
- Buttons (all states & variants)
- Forms (accessible & validated)
- Cards (responsive & interactive)
- Modals (accessible dialogs)
- Toasts (notifications)

### Examples

- Production-ready jet card component
- Fully accessible forms
- Responsive navigation
- Loading states
- Error handling

## Testing Tools Recommended

**Accessibility:**
- aXe DevTools
- WAVE
- Lighthouse
- VoiceOver/NVDA

**Performance:**
- Lighthouse
- WebPageTest
- Chrome DevTools Performance panel
- web-vitals library

**Responsive:**
- Chrome DevTools Device Mode
- Responsively App
- BrowserStack
- Real devices

**Cross-browser:**
- BrowserStack
- LambdaTest
- Manual testing (Chrome, Firefox, Safari, Edge)

## Design Tokens

The skill includes a complete design token system:

```css
:root {
  /* Colors */
  --color-primary-600: #4f46e5;
  --color-success: #10b981;
  --color-error: #ef4444;

  /* Spacing (8px base) */
  --space-2: 0.5rem;  /* 8px */
  --space-4: 1rem;    /* 16px */
  --space-6: 1.5rem;  /* 24px */

  /* Typography */
  --font-size-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);

  /* Shadows */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  /* Animations */
  --duration-fast: 150ms;
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
}
```

## Browser Support

Components are designed to work in:

✅ Chrome/Edge (latest 2 versions)
✅ Firefox (latest 2 versions)
✅ Safari (latest 2 versions)
✅ iOS Safari (latest 2 versions)
✅ Chrome Mobile (latest 2 versions)

With progressive enhancement for:
- CSS Grid
- Flexbox
- CSS custom properties
- Container queries
- Modern viewport units

## Contributing

As you build components for JetSelect, you can add new patterns to this skill:

1. Add patterns to `design-patterns.md`
2. Create examples in `examples/`
3. Update guides with learnings
4. Extend the checklist

## Quick Reference

### Color Contrast

- Normal text: 4.5:1 (AA), 7:1 (AAA)
- Large text: 3:1 (AA), 4.5:1 (AAA)
- UI components: 3:1

### Touch Targets

- Minimum: 48×48px
- Preferred: 56×56px
- Spacing: 8px minimum

### Performance Budget

- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Total size: < 500KB

### Animation Duration

- Micro: 100-200ms
- Simple: 200-300ms
- Complex: 300-500ms

---

**Philosophy:** Build accessible, performant experiences from the start. Accessibility is not optional, performance is not a bonus, and good design should be invisible.

For questions or issues with this skill, review the comprehensive guides in the `guides/` directory or examine the working examples in `examples/`.
