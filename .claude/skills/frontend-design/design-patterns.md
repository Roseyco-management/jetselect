# Frontend Design Patterns

Production-ready component patterns for common UI elements.

## Navigation Patterns

### Accessible Main Navigation

```html
<nav class="nav" aria-label="Main navigation">
  <div class="nav__container">
    <a href="/" class="nav__logo">
      <img src="/logo.svg" alt="JetSelect - Private Jet Sales" width="180" height="40">
    </a>

    <button
      class="nav__toggle"
      aria-expanded="false"
      aria-controls="nav-menu"
      aria-label="Toggle navigation menu"
    >
      <span class="nav__toggle-icon"></span>
    </button>

    <ul id="nav-menu" class="nav__menu">
      <li class="nav__item">
        <a href="/jets" class="nav__link" aria-current="page">
          Browse Jets
        </a>
      </li>
      <li class="nav__item">
        <a href="/about" class="nav__link">About</a>
      </li>
      <li class="nav__item">
        <a href="/contact" class="nav__link">Contact</a>
      </li>
      <li class="nav__item">
        <button class="nav__lang-toggle" aria-label="Switch to French">
          FR
        </button>
      </li>
    </ul>

    <div class="nav__cta">
      <a href="/quote" class="btn btn--primary">Get Quote</a>
    </div>
  </div>
</nav>
```

```css
.nav {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
}

.nav__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: var(--space-4) var(--space-6);
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

.nav__logo {
  flex-shrink: 0;
}

.nav__toggle {
  display: none;
  background: none;
  border: none;
  padding: var(--space-2);
  cursor: pointer;
}

.nav__menu {
  display: flex;
  gap: var(--space-6);
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__link {
  color: var(--color-gray-700);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  transition: all var(--duration-fast);
  position: relative;
}

.nav__link:hover {
  color: var(--color-primary-600);
  background: var(--color-primary-50);
}

.nav__link:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

.nav__link[aria-current="page"] {
  color: var(--color-primary-600);
  font-weight: var(--font-weight-semibold);
}

.nav__link[aria-current="page"]::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: var(--space-3);
  right: var(--space-3);
  height: 2px;
  background: var(--color-primary-600);
}

.nav__cta {
  margin-left: auto;
}

/* Mobile navigation */
@media (max-width: 768px) {
  .nav__toggle {
    display: block;
    margin-left: auto;
  }

  .nav__menu {
    position: fixed;
    top: 73px;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    flex-direction: column;
    padding: var(--space-6);
    gap: var(--space-2);
    transform: translateX(100%);
    transition: transform var(--duration-normal);
  }

  .nav__toggle[aria-expanded="true"] + .nav__menu {
    transform: translateX(0);
  }

  .nav__cta {
    margin-left: 0;
  }
}
```

## Button Patterns

### Primary Button with All States

```html
<button class="btn btn--primary" type="button">
  <span class="btn__icon" aria-hidden="true">→</span>
  <span class="btn__text">Book Now</span>
</button>

<button class="btn btn--primary" type="button" data-loading="true">
  <span class="btn__text">Processing...</span>
  <span class="btn__spinner" aria-hidden="true"></span>
</button>

<button class="btn btn--primary" type="button" disabled>
  <span class="btn__text">Sold Out</span>
</button>
```

```css
.btn {
  /* Reset */
  appearance: none;
  border: none;
  background: none;
  font: inherit;
  cursor: pointer;

  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  border-radius: var(--radius-lg);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  white-space: nowrap;
  position: relative;

  /* Transitions */
  transition: all var(--duration-fast) var(--ease-in-out);

  /* Touch target */
  min-height: 48px;
  min-width: 48px;
}

/* Primary variant */
.btn--primary {
  background: var(--color-primary-600);
  color: white;
  box-shadow: var(--shadow-sm);
}

.btn--primary:hover:not(:disabled) {
  background: var(--color-primary-700);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn--primary:active:not(:disabled) {
  background: var(--color-primary-800);
  transform: translateY(0);
  box-shadow: var(--shadow-sm);
}

.btn--primary:focus-visible {
  outline: 3px solid var(--color-primary-600);
  outline-offset: 3px;
}

.btn--primary:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
}

/* Secondary variant */
.btn--secondary {
  background: white;
  color: var(--color-primary-600);
  border: 2px solid var(--color-primary-600);
}

.btn--secondary:hover:not(:disabled) {
  background: var(--color-primary-50);
  border-color: var(--color-primary-700);
}

/* Ghost variant */
.btn--ghost {
  background: transparent;
  color: var(--color-gray-700);
}

.btn--ghost:hover:not(:disabled) {
  background: var(--color-gray-100);
}

/* Size variants */
.btn--sm {
  padding: var(--space-2) var(--space-4);
  font-size: 14px;
  min-height: 36px;
}

.btn--lg {
  padding: var(--space-4) var(--space-8);
  font-size: 18px;
  min-height: 56px;
}

/* Loading state */
.btn[data-loading="true"] {
  color: transparent;
  pointer-events: none;
}

.btn__spinner {
  display: none;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

.btn[data-loading="true"] .btn__spinner {
  display: block;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Icon button */
.btn--icon {
  padding: var(--space-3);
  aspect-ratio: 1;
}

/* Full width */
.btn--block {
  width: 100%;
}
```

## Form Patterns

### Accessible Form with Validation

```html
<form class="form" novalidate>
  <!-- Text input -->
  <div class="form-field">
    <label for="name" class="form-label">
      Full Name
      <span class="form-required" aria-label="required">*</span>
    </label>
    <input
      id="name"
      type="text"
      class="form-input"
      name="name"
      required
      aria-required="true"
      aria-describedby="name-help"
    />
    <span id="name-help" class="form-help">
      Enter your first and last name
    </span>
    <span id="name-error" class="form-error" role="alert"></span>
  </div>

  <!-- Email input -->
  <div class="form-field" data-state="error">
    <label for="email" class="form-label">
      Email Address
      <span class="form-required" aria-label="required">*</span>
    </label>
    <input
      id="email"
      type="email"
      class="form-input"
      name="email"
      required
      aria-required="true"
      aria-invalid="true"
      aria-describedby="email-error"
    />
    <span id="email-error" class="form-error" role="alert">
      Please enter a valid email address
    </span>
  </div>

  <!-- Select dropdown -->
  <div class="form-field">
    <label for="jet-type" class="form-label">Jet Type</label>
    <select id="jet-type" class="form-select" name="jet-type">
      <option value="">Select a type</option>
      <option value="light">Light Jet</option>
      <option value="midsize">Midsize Jet</option>
      <option value="super-midsize">Super Midsize</option>
      <option value="heavy">Heavy Jet</option>
      <option value="ultra-long">Ultra Long Range</option>
    </select>
  </div>

  <!-- Textarea -->
  <div class="form-field">
    <label for="message" class="form-label">Message</label>
    <textarea
      id="message"
      class="form-textarea"
      name="message"
      rows="4"
      placeholder="Tell us about your requirements..."
    ></textarea>
  </div>

  <!-- Checkbox -->
  <div class="form-field">
    <label class="form-checkbox">
      <input type="checkbox" name="newsletter" />
      <span class="form-checkbox__box"></span>
      <span class="form-checkbox__label">
        Subscribe to our newsletter for exclusive jet listings
      </span>
    </label>
  </div>

  <!-- Radio buttons -->
  <fieldset class="form-fieldset">
    <legend class="form-legend">Preferred Contact Method</legend>
    <div class="form-radio-group">
      <label class="form-radio">
        <input type="radio" name="contact-method" value="email" checked />
        <span class="form-radio__button"></span>
        <span class="form-radio__label">Email</span>
      </label>
      <label class="form-radio">
        <input type="radio" name="contact-method" value="phone" />
        <span class="form-radio__button"></span>
        <span class="form-radio__label">Phone</span>
      </label>
      <label class="form-radio">
        <input type="radio" name="contact-method" value="whatsapp" />
        <span class="form-radio__button"></span>
        <span class="form-radio__label">WhatsApp</span>
      </label>
    </div>
  </fieldset>

  <!-- Submit button -->
  <div class="form-actions">
    <button type="submit" class="btn btn--primary btn--block">
      Submit Inquiry
    </button>
  </div>
</form>
```

```css
.form {
  max-width: 600px;
}

.form-field {
  margin-bottom: var(--space-6);
}

.form-label {
  display: block;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  margin-bottom: var(--space-2);
}

.form-required {
  color: var(--color-error);
  margin-left: var(--space-1);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 2px solid var(--color-gray-300);
  border-radius: var(--radius-md);
  font: inherit;
  color: var(--color-gray-900);
  background: white;
  transition: all var(--duration-fast);
}

.form-input:hover,
.form-select:hover,
.form-textarea:hover {
  border-color: var(--color-gray-400);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 3px var(--color-primary-100);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-gray-400);
}

/* Error state */
.form-field[data-state="error"] .form-input,
.form-field[data-state="error"] .form-select,
.form-field[data-state="error"] .form-textarea {
  border-color: var(--color-error);
  background: #fef2f2;
}

.form-field[data-state="error"] .form-input:focus {
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.form-help {
  display: block;
  font-size: 14px;
  color: var(--color-gray-600);
  margin-top: var(--space-2);
}

.form-error {
  display: none;
  font-size: 14px;
  color: var(--color-error);
  margin-top: var(--space-2);
}

.form-field[data-state="error"] .form-error {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.form-field[data-state="error"] .form-error::before {
  content: '⚠';
  font-size: 16px;
}

/* Custom checkbox */
.form-checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.form-checkbox input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.form-checkbox__box {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-gray-400);
  border-radius: var(--radius-sm);
  background: white;
  transition: all var(--duration-fast);
  position: relative;
}

.form-checkbox input:checked + .form-checkbox__box {
  background: var(--color-primary-600);
  border-color: var(--color-primary-600);
}

.form-checkbox input:checked + .form-checkbox__box::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 6px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.form-checkbox input:focus-visible + .form-checkbox__box {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

.form-checkbox:hover .form-checkbox__box {
  border-color: var(--color-primary-600);
}

/* Custom radio */
.form-radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.form-radio {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  cursor: pointer;
  user-select: none;
}

.form-radio input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.form-radio__button {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  border: 2px solid var(--color-gray-400);
  border-radius: 50%;
  background: white;
  transition: all var(--duration-fast);
  position: relative;
}

.form-radio input:checked + .form-radio__button {
  border-color: var(--color-primary-600);
}

.form-radio input:checked + .form-radio__button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--color-primary-600);
}

.form-radio input:focus-visible + .form-radio__button {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

.form-fieldset {
  border: none;
  padding: 0;
  margin: 0 0 var(--space-6);
}

.form-legend {
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-900);
  margin-bottom: var(--space-3);
}

.form-actions {
  margin-top: var(--space-8);
}
```

## Card Patterns

### Jet Listing Card

```html
<article class="card" itemscope itemtype="http://schema.org/Product">
  <div class="card__media">
    <img
      class="card__image"
      src="/jets/gulfstream-g650-thumb.jpg"
      srcset="
        /jets/gulfstream-g650-thumb-400.jpg 400w,
        /jets/gulfstream-g650-thumb-800.jpg 800w
      "
      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      alt="Gulfstream G650 exterior view"
      width="800"
      height="600"
      loading="lazy"
      itemprop="image"
    />
    <div class="card__badges">
      <span class="badge badge--new">New Arrival</span>
      <span class="badge badge--featured">Featured</span>
    </div>
    <button class="card__favorite" aria-label="Add to favorites">
      <svg width="24" height="24" aria-hidden="true">
        <use href="#icon-heart"></use>
      </svg>
    </button>
  </div>

  <div class="card__content">
    <div class="card__header">
      <h3 class="card__title" itemprop="name">Gulfstream G650</h3>
      <div class="card__price" itemprop="offers" itemscope itemtype="http://schema.org/Offer">
        <span class="card__price-value" itemprop="price" content="65000000">$65M</span>
        <meta itemprop="priceCurrency" content="USD">
      </div>
    </div>

    <p class="card__description" itemprop="description">
      Ultra-long-range business jet with unmatched performance and luxury
    </p>

    <dl class="card__specs">
      <div class="card__spec">
        <dt class="card__spec-label">Range</dt>
        <dd class="card__spec-value">7,000 nm</dd>
      </div>
      <div class="card__spec">
        <dt class="card__spec-label">Passengers</dt>
        <dd class="card__spec-value">19</dd>
      </div>
      <div class="card__spec">
        <dt class="card__spec-label">Speed</dt>
        <dd class="card__spec-value">Mach 0.925</dd>
      </div>
      <div class="card__spec">
        <dt class="card__spec-label">Year</dt>
        <dd class="card__spec-value">2023</dd>
      </div>
    </dl>
  </div>

  <div class="card__actions">
    <a href="/jets/gulfstream-g650" class="btn btn--primary btn--block">
      View Details
    </a>
    <button type="button" class="btn btn--secondary btn--block">
      Compare
    </button>
  </div>
</article>
```

```css
.card {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  overflow: hidden;
  transition: all var(--duration-normal);
  height: 100%;
}

.card:hover {
  box-shadow: var(--shadow-xl);
  transform: translateY(-4px);
}

.card__media {
  position: relative;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--color-gray-100);
}

.card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--duration-slow);
}

.card:hover .card__image {
  transform: scale(1.05);
}

.card__badges {
  position: absolute;
  top: var(--space-4);
  left: var(--space-4);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.badge {
  display: inline-block;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: var(--font-weight-semibold);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.badge--new {
  background: var(--color-success);
  color: white;
}

.badge--featured {
  background: var(--color-primary-600);
  color: white;
}

.card__favorite {
  position: absolute;
  top: var(--space-4);
  right: var(--space-4);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(8px);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all var(--duration-fast);
}

.card__favorite:hover {
  background: white;
  transform: scale(1.1);
}

.card__favorite:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

.card__content {
  flex: 1;
  padding: var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--space-4);
}

.card__title {
  margin: 0;
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
  line-height: var(--line-height-tight);
}

.card__price {
  flex-shrink: 0;
  font-size: 20px;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-600);
}

.card__description {
  margin: 0;
  color: var(--color-gray-600);
  line-height: var(--line-height-normal);
}

.card__specs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
  margin: 0;
  padding: var(--space-4) 0;
  border-top: 1px solid var(--color-gray-200);
}

.card__spec {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.card__spec-label {
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-gray-500);
  font-weight: var(--font-weight-medium);
}

.card__spec-value {
  margin: 0;
  font-size: 16px;
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
}

.card__actions {
  padding: 0 var(--space-6) var(--space-6);
  display: flex;
  gap: var(--space-3);
  margin-top: auto;
}

@media (max-width: 640px) {
  .card__actions {
    flex-direction: column;
  }
}
```

## Modal/Dialog Patterns

### Accessible Modal Dialog

```html
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" hidden>
  <div class="modal__backdrop"></div>
  <div class="modal__container">
    <div class="modal__content">
      <header class="modal__header">
        <h2 id="modal-title" class="modal__title">Request a Quote</h2>
        <button class="modal__close" aria-label="Close dialog">
          <svg width="24" height="24" aria-hidden="true">
            <use href="#icon-close"></use>
          </svg>
        </button>
      </header>

      <div class="modal__body">
        <!-- Modal content goes here -->
        <form class="form">
          <!-- Form fields -->
        </form>
      </div>

      <footer class="modal__footer">
        <button type="button" class="btn btn--secondary">Cancel</button>
        <button type="submit" class="btn btn--primary">Submit</button>
      </footer>
    </div>
  </div>
</div>
```

```css
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: var(--z-modal);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-4);
}

.modal[hidden] {
  display: none;
}

.modal__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  animation: fadeIn var(--duration-normal);
}

.modal__container {
  position: relative;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow: auto;
  animation: slideUp var(--duration-normal);
}

.modal__content {
  background: white;
  border-radius: var(--radius-2xl);
  box-shadow: var(--shadow-2xl);
  display: flex;
  flex-direction: column;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6);
  border-bottom: 1px solid var(--color-gray-200);
}

.modal__title {
  margin: 0;
  font-size: 24px;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
}

.modal__close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--color-gray-600);
  transition: all var(--duration-fast);
}

.modal__close:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-900);
}

.modal__close:focus-visible {
  outline: 2px solid var(--color-primary-600);
  outline-offset: 2px;
}

.modal__body {
  padding: var(--space-6);
  overflow-y: auto;
}

.modal__footer {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-6);
  border-top: 1px solid var(--color-gray-200);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .modal__backdrop,
  .modal__container {
    animation: none;
  }
}
```

```javascript
// Focus trap for modal accessibility
class Modal {
  constructor(element) {
    this.modal = element;
    this.focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.previouslyFocused = null;
  }

  open() {
    this.previouslyFocused = document.activeElement;
    this.modal.removeAttribute('hidden');

    const focusable = this.modal.querySelectorAll(this.focusableElements);
    this.firstFocusable = focusable[0];
    this.lastFocusable = focusable[focusable.length - 1];

    this.firstFocusable?.focus();

    this.modal.addEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = 'hidden';
  }

  close() {
    this.modal.setAttribute('hidden', '');
    this.modal.removeEventListener('keydown', this.handleKeydown);
    document.body.style.overflow = '';
    this.previouslyFocused?.focus();
  }

  handleKeydown = (e) => {
    if (e.key === 'Escape') {
      this.close();
    }

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

## Toast Notification Pattern

```html
<div class="toast-container" aria-live="polite" aria-atomic="true"></div>

<!-- Toast template -->
<template id="toast-template">
  <div class="toast" role="status">
    <div class="toast__icon"></div>
    <div class="toast__content">
      <div class="toast__title"></div>
      <div class="toast__message"></div>
    </div>
    <button class="toast__close" aria-label="Dismiss notification">×</button>
  </div>
</template>
```

```css
.toast-container {
  position: fixed;
  top: var(--space-6);
  right: var(--space-6);
  z-index: var(--z-toast);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  pointer-events: none;
}

.toast {
  pointer-events: auto;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
  min-width: 300px;
  max-width: 500px;
  padding: var(--space-4);
  background: white;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border-left: 4px solid var(--color-primary-600);
  animation: slideInRight var(--duration-normal);
}

.toast--success {
  border-left-color: var(--color-success);
}

.toast--error {
  border-left-color: var(--color-error);
}

.toast--warning {
  border-left-color: var(--color-warning);
}

.toast__icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.toast--success .toast__icon {
  background: var(--color-success);
  color: white;
}

.toast--success .toast__icon::before {
  content: '✓';
}

.toast--error .toast__icon {
  background: var(--color-error);
  color: white;
}

.toast--error .toast__icon::before {
  content: '!';
}

.toast__content {
  flex: 1;
}

.toast__title {
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin-bottom: var(--space-1);
}

.toast__message {
  font-size: 14px;
  color: var(--color-gray-600);
}

.toast__close {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: var(--color-gray-500);
  font-size: 20px;
  line-height: 1;
  transition: all var(--duration-fast);
}

.toast__close:hover {
  background: var(--color-gray-100);
  color: var(--color-gray-900);
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .toast-container {
    left: var(--space-4);
    right: var(--space-4);
  }

  .toast {
    min-width: 0;
    max-width: none;
  }
}
```

This is the foundation. The supporting guides and examples are next!
