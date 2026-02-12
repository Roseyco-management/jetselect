/**
 * Frontend Utilities
 * Production-ready JavaScript utilities for common frontend tasks
 */

// ============================================================================
// ACCESSIBILITY UTILITIES
// ============================================================================

/**
 * Focus Trap for Modals
 * Traps keyboard focus within an element (e.g., modal dialog)
 */
export class FocusTrap {
  constructor(element) {
    this.element = element;
    this.focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), ' +
      'select:not([disabled]), textarea:not([disabled]), ' +
      '[tabindex]:not([tabindex="-1"])';
    this.previousActiveElement = null;
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

/**
 * Announce to Screen Readers
 * Creates a live region to announce dynamic content changes
 */
export function announce(message, priority = 'polite') {
  const liveRegion = document.createElement('div');
  liveRegion.setAttribute('role', priority === 'assertive' ? 'alert' : 'status');
  liveRegion.setAttribute('aria-live', priority);
  liveRegion.className = 'sr-only';
  liveRegion.textContent = message;
  document.body.appendChild(liveRegion);
  setTimeout(() => liveRegion.remove(), 1000);
}

// ============================================================================
// PERFORMANCE UTILITIES
// ============================================================================

/**
 * Debounce
 * Delays function execution until after wait time has elapsed since last call
 */
export function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}

/**
 * Throttle
 * Limits function execution to once per specified time period
 */
export function throttle(fn, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Lazy Load Images
 * Uses Intersection Observer to lazy load images
 */
export function lazyLoadImages(selector = 'img[data-src]', options = {}) {
  const defaultOptions = {
    rootMargin: '50px',
    threshold: 0.01
  };

  const observerOptions = { ...defaultOptions, ...options };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        if (img.dataset.srcset) {
          img.srcset = img.dataset.srcset;
          img.removeAttribute('data-srcset');
        }
        observer.unobserve(img);
      }
    });
  }, observerOptions);

  document.querySelectorAll(selector).forEach(img => {
    observer.observe(img);
  });

  return observer;
}

/**
 * Preload Image
 * Preloads an image and returns a promise
 */
export function preloadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

// ============================================================================
// ANIMATION UTILITIES
// ============================================================================

/**
 * Check Reduced Motion Preference
 * Returns true if user prefers reduced motion
 */
export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Animate Element
 * Simple animation utility using Web Animations API
 */
export function animate(element, keyframes, options = {}) {
  if (prefersReducedMotion()) {
    options.duration = 1;
  }

  const animation = element.animate(keyframes, {
    duration: 300,
    easing: 'ease-out',
    fill: 'forwards',
    ...options
  });

  return animation;
}

/**
 * Fade In
 * Fades element in with optional callback
 */
export async function fadeIn(element, duration = 300) {
  const animation = animate(element, [
    { opacity: 0 },
    { opacity: 1 }
  ], { duration });

  await animation.finished;
  return element;
}

/**
 * Fade Out
 * Fades element out with optional callback
 */
export async function fadeOut(element, duration = 300) {
  const animation = animate(element, [
    { opacity: 1 },
    { opacity: 0 }
  ], { duration });

  await animation.finished;
  return element;
}

/**
 * Slide Up
 * Slides element up into view
 */
export async function slideUp(element, duration = 300) {
  const animation = animate(element, [
    { transform: 'translateY(20px)', opacity: 0 },
    { transform: 'translateY(0)', opacity: 1 }
  ], { duration });

  await animation.finished;
  return element;
}

// ============================================================================
// RESPONSIVE UTILITIES
// ============================================================================

/**
 * Get Viewport Size
 * Returns current viewport dimensions
 */
export function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

/**
 * Check Breakpoint
 * Checks if viewport matches a specific breakpoint
 */
export function matchesBreakpoint(breakpoint) {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  return window.innerWidth >= breakpoints[breakpoint];
}

/**
 * On Breakpoint Change
 * Executes callback when breakpoint changes
 */
export function onBreakpointChange(breakpoint, callback) {
  const breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  };

  const mediaQuery = window.matchMedia(`(min-width: ${breakpoints[breakpoint]}px)`);

  callback(mediaQuery.matches);

  mediaQuery.addEventListener('change', (e) => callback(e.matches));

  return () => mediaQuery.removeEventListener('change', callback);
}

// ============================================================================
// FORM UTILITIES
// ============================================================================

/**
 * Validate Form Field
 * Validates a form field and shows error message
 */
export function validateField(input) {
  const errorId = `${input.id}-error`;
  let errorEl = document.getElementById(errorId);

  if (!errorEl) {
    errorEl = document.createElement('span');
    errorEl.id = errorId;
    errorEl.className = 'form-error';
    errorEl.setAttribute('role', 'alert');
    input.parentElement.appendChild(errorEl);
  }

  const isValid = input.checkValidity();
  input.setAttribute('aria-invalid', !isValid);

  if (!isValid) {
    errorEl.textContent = input.validationMessage;
    errorEl.hidden = false;
    input.setAttribute('aria-describedby', errorId);
  } else {
    errorEl.hidden = true;
    input.removeAttribute('aria-describedby');
  }

  return isValid;
}

/**
 * Auto-resize Textarea
 * Automatically resizes textarea to fit content
 */
export function autoResizeTextarea(textarea) {
  function resize() {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }

  textarea.addEventListener('input', resize);
  resize();

  return () => textarea.removeEventListener('input', resize);
}

// ============================================================================
// UI UTILITIES
// ============================================================================

/**
 * Create Toast Notification
 * Creates and shows a toast notification
 */
export function showToast(message, type = 'info', duration = 3000) {
  const container = document.querySelector('.toast-container') || createToastContainer();

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML = `
    <div class="toast__icon"></div>
    <div class="toast__content">
      <div class="toast__message">${message}</div>
    </div>
    <button class="toast__close" aria-label="Dismiss notification">×</button>
  `;

  const closeBtn = toast.querySelector('.toast__close');
  closeBtn.addEventListener('click', () => removeToast(toast));

  container.appendChild(toast);

  // Announce to screen readers
  announce(message);

  // Auto-remove after duration
  if (duration > 0) {
    setTimeout(() => removeToast(toast), duration);
  }

  return toast;
}

function createToastContainer() {
  const container = document.createElement('div');
  container.className = 'toast-container';
  container.setAttribute('aria-live', 'polite');
  container.setAttribute('aria-atomic', 'true');
  document.body.appendChild(container);
  return container;
}

async function removeToast(toast) {
  await fadeOut(toast, 200);
  toast.remove();
}

/**
 * Create Modal Dialog
 * Creates and opens a modal dialog
 */
export class Modal {
  constructor(options = {}) {
    this.options = {
      title: '',
      content: '',
      closeOnBackdrop: true,
      closeOnEscape: true,
      ...options
    };

    this.focusTrap = null;
    this.create();
  }

  create() {
    this.modal = document.createElement('div');
    this.modal.className = 'modal';
    this.modal.setAttribute('role', 'dialog');
    this.modal.setAttribute('aria-modal', 'true');
    this.modal.setAttribute('hidden', '');

    const titleId = `modal-title-${Date.now()}`;
    this.modal.setAttribute('aria-labelledby', titleId);

    this.modal.innerHTML = `
      <div class="modal__backdrop"></div>
      <div class="modal__container">
        <div class="modal__content">
          <header class="modal__header">
            <h2 id="${titleId}" class="modal__title">${this.options.title}</h2>
            <button class="modal__close" aria-label="Close dialog">×</button>
          </header>
          <div class="modal__body">${this.options.content}</div>
        </div>
      </div>
    `;

    document.body.appendChild(this.modal);

    this.backdrop = this.modal.querySelector('.modal__backdrop');
    this.closeBtn = this.modal.querySelector('.modal__close');

    this.closeBtn.addEventListener('click', () => this.close());

    if (this.options.closeOnBackdrop) {
      this.backdrop.addEventListener('click', () => this.close());
    }

    if (this.options.closeOnEscape) {
      this.handleEscape = (e) => {
        if (e.key === 'Escape') this.close();
      };
    }

    this.focusTrap = new FocusTrap(this.modal);
  }

  async open() {
    this.modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';

    if (this.options.closeOnEscape) {
      document.addEventListener('keydown', this.handleEscape);
    }

    this.focusTrap.activate();

    await Promise.all([
      fadeIn(this.backdrop, 200),
      slideUp(this.modal.querySelector('.modal__container'), 300)
    ]);
  }

  async close() {
    if (this.options.closeOnEscape) {
      document.removeEventListener('keydown', this.handleEscape);
    }

    this.focusTrap.deactivate();

    await Promise.all([
      fadeOut(this.backdrop, 200),
      fadeOut(this.modal.querySelector('.modal__container'), 200)
    ]);

    this.modal.setAttribute('hidden', '');
    document.body.style.overflow = '';

    this.options.onClose?.();
  }

  destroy() {
    this.modal.remove();
  }
}

// ============================================================================
// STORAGE UTILITIES
// ============================================================================

/**
 * Local Storage with JSON
 * Save and retrieve JSON data from localStorage
 */
export const storage = {
  get(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return defaultValue;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error('Error writing to localStorage:', error);
      return false;
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  }
};

// ============================================================================
// SCROLL UTILITIES
// ============================================================================

/**
 * Scroll to Element
 * Smoothly scrolls to an element with optional offset
 */
export function scrollToElement(element, offset = 0) {
  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth'
  });
}

/**
 * Detect Scroll Direction
 * Detects scroll direction and calls callbacks
 */
export function onScrollDirection(callbacks = {}) {
  let lastScrollTop = 0;

  const handleScroll = throttle(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      callbacks.down?.();
    } else if (scrollTop < lastScrollTop) {
      callbacks.up?.();
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  }, 100);

  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => window.removeEventListener('scroll', handleScroll);
}

// ============================================================================
// EXPORTS
// ============================================================================

export default {
  // Accessibility
  FocusTrap,
  announce,

  // Performance
  debounce,
  throttle,
  lazyLoadImages,
  preloadImage,

  // Animation
  prefersReducedMotion,
  animate,
  fadeIn,
  fadeOut,
  slideUp,

  // Responsive
  getViewportSize,
  matchesBreakpoint,
  onBreakpointChange,

  // Forms
  validateField,
  autoResizeTextarea,

  // UI
  showToast,
  Modal,

  // Storage
  storage,

  // Scroll
  scrollToElement,
  onScrollDirection
};
