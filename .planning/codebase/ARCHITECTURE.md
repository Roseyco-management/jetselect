# Architecture

**Analysis Date:** 2026-01-27

## Pattern Overview

**Overall:** Static Site with Client-Side Application

**Key Characteristics:**
- Zero server-side logic (pure static HTML/CSS/JS)
- Two-class JavaScript architecture (LanguageManager + JetSelector)
- Multi-step wizard workflow with client-side state
- Bilingual support (Dutch/English) with localStorage persistence
- 94% smaller than original WordPress version (192KB vs 628KB)

## Layers

**Presentation Layer:**
- Purpose: User interface and semantic structure
- Contains: HTML markup with data attributes for i18n
- Location: `improved/index.html`
- Depends on: Styling layer, Business logic layer
- Used by: End users via browser

**Styling Layer:**
- Purpose: Visual design and responsive layout
- Contains: CSS custom properties, Grid/Flexbox layouts, animations
- Location: `improved/css/style.css`
- Depends on: Google Fonts API (external)
- Used by: HTML presentation layer

**Business Logic Layer:**
- Purpose: Wizard workflow, language switching, form handling
- Contains: Two main classes (LanguageManager, JetSelector)
- Location: `improved/js/script.js`
- Depends on: DOM APIs, localStorage
- Used by: Event handlers bound to HTML elements

**Data/State Layer:**
- Purpose: Client-side state management
- Contains: `translations` object, `selections` object, localStorage
- Location: In-memory JavaScript objects
- Depends on: Nothing (pure data structures)
- Used by: Business logic layer

## Data Flow

**Page Load & Initialization:**

1. Browser loads `improved/index.html`
2. CSS and JavaScript resources load
3. DOMContentLoaded event fires
4. LanguageManager.init() - loads saved language from localStorage
5. JetSelector.init() - binds event handlers to wizard
6. User sees Step 1 of wizard with current language applied

**Wizard Flow:**

1. User clicks option card (e.g., "Short distance")
2. `handleOptionSelect()` captures selection → updates `selections` object
3. Auto-advance after 500ms → `nextStep()` called
4. `showStep()` toggles `.active` class on step containers
5. `updateProgress()` animates progress bar
6. Steps 1-5: Collect selections
7. Step 6: Display form with summary of selections
8. Step 7: Success confirmation after submission

**Language Switching:**

1. User clicks language button (NL/EN)
2. `switchLanguage(lang)` called
3. Save to localStorage: `localStorage.setItem('jetselect-lang', lang)`
4. `applyLanguage(lang)` - traverses DOM for `[data-i18n]` attributes
5. Replace text content with translation from `translations` object
6. Update active button styling

**Form Submission (Current):**

1. User submits form at Step 6
2. `handleFormSubmit(e)` prevents default
3. Collect FormData + merge with `selections` object
4. `console.log()` the data (no backend integration)
5. Show success notification
6. Advance to Step 7 (success screen)

## Key Abstractions

**LanguageManager:**
- Purpose: Encapsulate i18n logic
- Examples: `improved/js/script.js`, lines 283-353
- Pattern: Singleton-like class (single instance via `window.languageManager`)
- Methods: `init()`, `setupLanguageToggle()`, `switchLanguage()`, `applyLanguage()`

**JetSelector:**
- Purpose: Wizard workflow orchestration
- Examples: `improved/js/script.js`, lines 355-676
- Pattern: Singleton-like class (single instance)
- Methods: `init()`, `handleOptionSelect()`, `nextStep()`, `prevStep()`, `showStep()`, `updateProgress()`, `handleFormSubmit()`

**Translations Object:**
- Purpose: Bilingual content dictionary
- Examples: `improved/js/script.js`, lines 9-280
- Pattern: Nested object with `translations[lang][section][key]` structure
- Languages: `nl` (Dutch), `en` (English)

**Selections Object:**
- Purpose: Track user choices through wizard
- Location: `this.selections` in JetSelector class
- Pattern: Simple key-value object
- Keys: `range`, `passengers`, `priority`, `runway`, `budget`

## Entry Points

**HTML Entry:**
- Location: `improved/index.html`
- Triggers: User navigates to site URL
- Responsibilities: Define structure, load CSS/JS, render initial state

**JavaScript Entry:**
- Location: DOMContentLoaded event listener in `improved/js/script.js`, line 680
- Triggers: DOM fully loaded
- Responsibilities: Initialize LanguageManager and JetSelector instances

## Error Handling

**Strategy:** Minimal error handling currently

**Patterns:**
- No try/catch blocks in current implementation
- Console logging for debugging (`console.log()` at lines 606, 697, 713)
- Commented-out fetch error handling (lines 627-629 in `improved/js/script.js`)

**Missing:**
- No user-facing error messages for failed operations
- No graceful degradation if localStorage unavailable
- No validation error display for form fields

## Cross-Cutting Concerns

**Logging:**
- Console logging for development
- No production logging service integrated

**Validation:**
- HTML5 validation attributes (`required`, `type="email"`, `type="tel"`)
- Client-side only (no server-side validation)

**Internationalization:**
- Data attribute system: `[data-i18n="nav.home"]`
- LanguageManager applies translations on language switch
- Supported: Dutch (nl), English (en)

---

*Architecture analysis: 2026-01-27*
*Update when major patterns change*
