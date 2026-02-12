# Accessibility Guide

Comprehensive guide to WCAG 2.1 AA/AAA compliance and inclusive design.

## Table of Contents

1. [Semantic HTML](#semantic-html)
2. [Keyboard Navigation](#keyboard-navigation)
3. [Focus Management](#focus-management)
4. [Color & Contrast](#color--contrast)
5. [ARIA Attributes](#aria-attributes)
6. [Screen Reader Support](#screen-reader-support)
7. [Forms & Validation](#forms--validation)
8. [Motion & Animation](#motion--animation)
9. [Testing Tools](#testing-tools)

## Semantic HTML

### The Foundation of Accessibility

Semantic HTML provides meaning and structure. Always use the appropriate element for the job.

#### Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page Title - Site Name</title>
</head>
<body>
  <!-- Skip link for keyboard users -->
  <a href="#main-content" class="skip-link">Skip to main content</a>

  <header>
    <nav aria-label="Main navigation">
      <!-- Primary navigation -->
    </nav>
  </header>

  <main id="main-content">
    <!-- Primary page content -->
    <h1>Page Heading</h1>

    <article>
      <h2>Article Heading</h2>
      <!-- Article content -->
    </article>

    <aside aria-label="Related information">
      <!-- Sidebar content -->
    </aside>
  </main>

  <footer>
    <nav aria-label="Footer navigation">
      <!-- Footer links -->
    </nav>
  </footer>
</body>
</html>
```

#### Heading Hierarchy

**❌ Wrong:**
```html
<h1>Main Heading</h1>
<h3>Skipped h2!</h3> <!-- Never skip levels -->
<h2>Going backwards</h2> <!-- Out of order -->
```

**✅ Correct:**
```html
<h1>Main Heading</h1>
<h2>Section Heading</h2>
<h3>Subsection Heading</h3>
<h3>Another Subsection</h3>
<h2>Another Section</h2>
```

#### Lists

**❌ Wrong:**
```html
<div>• Item 1</div>
<div>• Item 2</div>
<div>• Item 3</div>
```

**✅ Correct:**
```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

#### Links vs Buttons

**Links** navigate somewhere. **Buttons** perform actions.

```html
<!-- Navigation: use <a> -->
<a href="/jets/catalog">Browse Jets</a>

<!-- Action: use <button> -->
<button type="button" onclick="openModal()">View Details</button>

<!-- Form submission: use <button> -->
<button type="submit">Submit Form</button>

<!-- ❌ Never do this -->
<div onclick="doSomething()">Click me</div>
<a href="#" onclick="doSomething()">Action</a>
```

## Keyboard Navigation

### All functionality must be keyboard accessible

#### Tab Order

```html
<!-- Natural tab order follows DOM order -->
<form>
  <label for="name">Name:</label>
  <input id="name" type="text"> <!-- Tab 1 -->

  <label for="email">Email:</label>
  <input id="email" type="email"> <!-- Tab 2 -->

  <button type="submit">Submit</button> <!-- Tab 3 -->
</form>

<!-- ❌ Don't manipulate tab order with tabindex unless necessary -->
<button tabindex="1">Bad</button> <!-- Breaks natural flow -->

<!-- ✅ Remove from tab order for non-interactive content -->
<div tabindex="-1">Can be focused programmatically but not via Tab</div>

<!-- ✅ Make custom interactive element tabbable -->
<div role="button" tabindex="0">Custom button</div>
```

#### Keyboard Interaction Patterns

**Modal Dialog:**
- **Tab**: Cycle through focusable elements within modal
- **Shift+Tab**: Reverse cycle
- **Escape**: Close modal
- **Focus trap**: Keep focus within modal until closed

**Dropdown Menu:**
- **Tab**: Focus menu button
- **Enter/Space**: Open menu
- **Arrow Down**: Move to next item
- **Arrow Up**: Move to previous item
- **Home**: Move to first item
- **End**: Move to last item
- **Escape**: Close menu
- **Letter keys**: Jump to item starting with letter

**Tabs:**
- **Tab**: Focus active tab panel
- **Arrow Left/Right**: Move between tabs
- **Home**: Move to first tab
- **End**: Move to last tab

#### Skip Links

```html
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- ... navigation ... -->

<main id="main-content" tabindex="-1">
  <!-- Main content -->
</main>
```

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
```

## Focus Management

### Focus Indicators Must Be Visible

```css
/* ❌ NEVER do this without a replacement */
*:focus {
  outline: none;
}

/* ✅ Use :focus-visible for better UX */
button:focus {
  outline: none; /* Remove outline for mouse clicks */
}

button:focus-visible {
  /* Show outline only for keyboard focus */
  outline: 3px solid #4f46e5;
  outline-offset: 2px;
}

/* ✅ Custom focus indicator */
.button {
  position: relative;
}

.button:focus-visible {
  outline: none;
}

.button:focus-visible::after {
  content: '';
  position: absolute;
  inset: -4px;
  border: 3px solid #4f46e5;
  border-radius: inherit;
}
```

### Focus Trapping (Modals)

```javascript
class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableSelector = 'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
  }

  activate() {
    this.previousActiveElement = document.activeElement;
    this.updateFocusableElements();
    this.firstFocusable?.focus();
    this.element.addEventListener('keydown', this.handleKeydown);
  }

  deactivate() {
    this.element.removeEventListener('keydown', this.handleKeydown);
    this.previousActiveElement?.focus();
  }

  updateFocusableElements() {
    const focusable = this.element.querySelectorAll(this.focusableSelector);
    this.firstFocusable = focusable[0];
    this.lastFocusable = focusable[focusable.length - 1];
  }

  handleKeydown = (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable?.focus();
        }
      } else {
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable?.focus();
        }
      }
    }
  };
}
```

## Color & Contrast

### WCAG Contrast Requirements

| Content Type | Level AA | Level AAA |
|--------------|----------|-----------|
| Normal text (< 18pt) | 4.5:1 | 7:1 |
| Large text (≥ 18pt or ≥ 14pt bold) | 3:1 | 4.5:1 |
| UI components & graphics | 3:1 | N/A |

### Testing Contrast

Use tools like:
- Chrome DevTools (Inspect element → Accessibility panel)
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Stark plugin for Figma/Sketch

### Examples

```css
/* ✅ Pass AA: 17:1 ratio */
.high-contrast {
  color: #1a1a1a; /* Near black */
  background: #ffffff; /* White */
}

/* ✅ Pass AA: 4.6:1 ratio */
.medium-contrast {
  color: #666666;
  background: #ffffff;
}

/* ❌ Fail AA: 2.9:1 ratio */
.low-contrast {
  color: #999999; /* Too light */
  background: #ffffff;
}

/* ✅ Brand color adjusted for contrast */
:root {
  --brand-color: #4f46e5; /* Original brand color */
  --brand-color-accessible: #3730a3; /* Darkened for text */
}

.button {
  background: var(--brand-color);
  color: white; /* 4.8:1 ratio - passes AA */
}

.text-link {
  color: var(--brand-color-accessible); /* 7.3:1 ratio - passes AAA */
}
```

### Color Not Sole Indicator

**❌ Wrong:** Only using color to show error
```html
<input type="email" style="border-color: red;">
```

**✅ Correct:** Color + icon + text
```html
<div class="form-field" data-state="error">
  <input
    type="email"
    aria-invalid="true"
    aria-describedby="email-error"
  >
  <span id="email-error" class="error">
    <svg aria-hidden="true"><use href="#icon-error"></svg>
    Please enter a valid email address
  </span>
</div>
```

## ARIA Attributes

### ARIA Authoring Practices Guide (APG)

The first rule of ARIA: **Don't use ARIA if semantic HTML exists.**

### Common ARIA Attributes

#### aria-label
Provides an accessible name when no visible label exists.

```html
<!-- Icon button with no visible text -->
<button aria-label="Close dialog">
  <svg><use href="#icon-close"></svg>
</button>

<!-- Search form -->
<form role="search">
  <input type="search" aria-label="Search private jets">
  <button type="submit">
    <svg aria-hidden="true"><use href="#icon-search"></svg>
    Search
  </button>
</form>
```

#### aria-labelledby
References one or more elements for the label.

```html
<section aria-labelledby="section-heading">
  <h2 id="section-heading">Featured Jets</h2>
  <!-- Content -->
</section>

<!-- Multiple labels -->
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Confirm Booking</h2>
  <p id="dialog-desc">You are about to book Gulfstream G650 for $15,000/hr</p>
  <!-- Dialog content -->
</div>
```

#### aria-describedby
Provides additional description.

```html
<label for="password">Password</label>
<input
  type="password"
  id="password"
  aria-describedby="password-requirements"
>
<div id="password-requirements">
  Must be at least 8 characters with 1 number and 1 special character
</div>
```

#### aria-live
Announces dynamic content changes.

```html
<!-- Polite: announces after current speech -->
<div aria-live="polite" aria-atomic="true" class="status-message"></div>

<!-- Assertive: interrupts current speech -->
<div aria-live="assertive" role="alert" class="error-message"></div>

<!-- Off: not announced -->
<div aria-live="off">Not announced</div>
```

```javascript
// Announcing a status change
const statusEl = document.querySelector('.status-message');
statusEl.textContent = 'Booking confirmed!';
// Screen reader will announce "Booking confirmed!"
```

#### aria-expanded
Indicates expanded/collapsed state.

```html
<button
  aria-expanded="false"
  aria-controls="submenu"
  onclick="toggleMenu()"
>
  Products
  <svg aria-hidden="true"><use href="#icon-chevron"></svg>
</button>

<ul id="submenu" hidden>
  <li><a href="/jets">Jets</a></li>
  <li><a href="/helicopters">Helicopters</a></li>
</ul>
```

```javascript
function toggleMenu() {
  const button = event.currentTarget;
  const menu = document.getElementById('submenu');
  const isExpanded = button.getAttribute('aria-expanded') === 'true';

  button.setAttribute('aria-expanded', !isExpanded);
  menu.hidden = isExpanded;
}
```

#### aria-current
Indicates current item in a set.

```html
<nav aria-label="Main">
  <a href="/">Home</a>
  <a href="/jets" aria-current="page">Jets</a>
  <a href="/about">About</a>
</nav>

<!-- Breadcrumbs -->
<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Home</a></li>
    <li><a href="/jets">Jets</a></li>
    <li><a href="/jets/gulfstream" aria-current="page">Gulfstream</a></li>
  </ol>
</nav>
```

#### aria-invalid & aria-errormessage
Indicates form validation state.

```html
<label for="email">Email</label>
<input
  type="email"
  id="email"
  aria-invalid="true"
  aria-errormessage="email-error"
>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>
```

### ARIA Roles

Only use when semantic HTML doesn't exist.

```html
<!-- ❌ Redundant role -->
<button role="button">Click me</button>
<nav role="navigation">...</nav>

<!-- ✅ Custom widget needs role -->
<div role="button" tabindex="0" onclick="...">Custom button</div>

<!-- ✅ Alertdialog role -->
<div role="alertdialog" aria-labelledby="title" aria-describedby="desc">
  <h2 id="title">Warning</h2>
  <p id="desc">This action cannot be undone</p>
  <button>Confirm</button>
  <button>Cancel</button>
</div>
```

## Screen Reader Support

### Hiding Content

#### Visually Hidden (Screen Reader Only)

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:focus {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

```html
<button>
  <svg aria-hidden="true"><use href="#icon-download"></svg>
  <span class="sr-only">Download PDF</span>
</button>
```

#### Hidden from Everyone

```html
<!-- Hidden from screen readers and visual -->
<div hidden>Not rendered</div>
<div style="display: none">Also not rendered</div>

<!-- Hidden from screen readers only -->
<div aria-hidden="true">Visible but not announced</div>
```

### Testing with Screen Readers

**VoiceOver (macOS):**
- Enable: System Preferences → Accessibility → VoiceOver
- Toggle: Cmd+F5
- Navigate: Ctrl+Option+Arrow keys
- Rotor: Ctrl+Option+U

**NVDA (Windows - Free):**
- Download: https://www.nvaccess.org/
- Toggle: Ctrl+Alt+N
- Navigate: Arrow keys
- Elements List: NVDA+F7

**JAWS (Windows - Paid):**
- Navigate: Arrow keys
- Headings: H
- Links: Tab or Insert+F7

## Forms & Validation

### Accessible Form Example

```html
<form novalidate>
  <!-- Text input with all accessibility features -->
  <div class="form-field">
    <label for="full-name">
      Full Name
      <span aria-label="required" class="required">*</span>
    </label>
    <input
      type="text"
      id="full-name"
      name="full-name"
      required
      aria-required="true"
      aria-describedby="name-help"
      aria-invalid="false"
    >
    <span id="name-help" class="help-text">
      Enter your first and last name
    </span>
    <span id="name-error" class="error" role="alert" hidden>
      Please enter your full name
    </span>
  </div>

  <!-- Error state -->
  <div class="form-field">
    <label for="email">
      Email Address
      <span aria-label="required" class="required">*</span>
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-invalid="true"
      aria-describedby="email-error"
    >
    <span id="email-error" class="error" role="alert">
      Please enter a valid email address
    </span>
  </div>

  <!-- Submit -->
  <button type="submit">
    <span class="button-text">Submit</span>
    <span class="button-loader" aria-hidden="true" hidden></span>
  </button>
</form>
```

### Live Validation

```javascript
function validateField(input) {
  const errorEl = document.getElementById(`${input.id}-error`);
  const isValid = input.checkValidity();

  input.setAttribute('aria-invalid', !isValid);

  if (!isValid) {
    errorEl.textContent = input.validationMessage;
    errorEl.hidden = false;
  } else {
    errorEl.hidden = true;
  }
}

// Validate on blur
input.addEventListener('blur', () => validateField(input));

// Clear error on input
input.addEventListener('input', () => {
  if (input.getAttribute('aria-invalid') === 'true') {
    validateField(input);
  }
});
```

## Motion & Animation

### Respect User Preferences

```css
/* Default: animations enabled */
.modal {
  animation: slideUp 0.3s ease-out;
}

.card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
}

/* Reduced motion: disable or minimize */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .card:hover {
    transform: none; /* No hover lift */
  }
}
```

### Pausable Auto-play

```html
<div class="carousel" aria-roledescription="carousel" aria-label="Featured jets">
  <button
    class="carousel-pause"
    aria-label="Pause carousel"
    aria-pressed="false"
  >
    <svg aria-hidden="true"><use href="#icon-pause"></svg>
  </button>

  <!-- Carousel items -->
</div>
```

## Testing Tools

### Automated Tools

1. **aXe DevTools** (Chrome/Firefox extension)
   - Most accurate automated checker
   - Integrates with DevTools

2. **Lighthouse** (Built into Chrome)
   - Accessibility score
   - Best practices
   - Performance

3. **WAVE** (Browser extension)
   - Visual feedback on page
   - Shows errors inline

4. **Pa11y** (CLI/CI tool)
   ```bash
   npm install -g pa11y
   pa11y https://yoursite.com
   ```

### Manual Testing Checklist

- [ ] Tab through entire page (keyboard only)
- [ ] Test with VoiceOver/NVDA
- [ ] Test at 200% zoom
- [ ] Test color contrast
- [ ] Test with color blindness simulator
- [ ] Test in high contrast mode
- [ ] Test with reduced motion enabled
- [ ] Test form validation
- [ ] Test error messages

### Browser Testing

**Chrome DevTools:**
- Accessibility panel (Elements tab)
- Lighthouse audit (Run → Accessibility)
- Rendering → Emulate vision deficiencies

**Firefox DevTools:**
- Accessibility panel
- Simulate color deficiencies

---

## Quick Reference

### Accessible Name Calculation (Priority)

1. `aria-labelledby`
2. `aria-label`
3. Native label (e.g., `<label for="">`)
4. `placeholder` (not recommended)
5. `title` attribute

### ARIA States & Properties

| Attribute | Values | Use Case |
|-----------|--------|----------|
| `aria-expanded` | true/false | Collapsible content |
| `aria-current` | page/step/location/date/time/true/false | Current item |
| `aria-disabled` | true/false | Disabled element |
| `aria-hidden` | true/false | Hide from screen readers |
| `aria-invalid` | true/false | Form validation |
| `aria-live` | polite/assertive/off | Dynamic content |
| `aria-pressed` | true/false | Toggle button |
| `aria-selected` | true/false | Selected item (tabs, options) |

### Keyboard Shortcuts

| Pattern | Keys |
|---------|------|
| Navigation | Tab, Shift+Tab |
| Activation | Enter, Space |
| Close/Cancel | Escape |
| Lists/Menus | Arrow keys, Home, End |
| Tabs | Arrow Left/Right |
| Type-ahead | Letter keys |
| Scrolling | Arrow keys, Page Up/Down, Space |

Remember: **Accessibility is not a checklist, it's a mindset.** Build inclusive experiences from the start.
