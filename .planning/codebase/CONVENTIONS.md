# Coding Conventions

**Analysis Date:** 2026-01-27

## Naming Patterns

**Files:**
- kebab-case for all files (style.css, script.js, index.html)
- UPPERCASE.md for important documentation (README.md, COMPARISON.md)
- No test files present (no convention established)

**Functions:**
- camelCase for all functions and methods
- Event handlers: handleEventName pattern (handleOptionSelect, handleFormSubmit)
- No async prefix (async functions use camelCase like sync functions)

**Variables:**
- camelCase for all variables (currentStep, selections, languageManager)
- No UPPER_SNAKE_CASE constants (all lowercase/camelCase)
- No private markers (no _ prefix or # syntax)

**Types:**
- Not applicable - vanilla JavaScript (no TypeScript)
- Class names: PascalCase (LanguageManager, JetSelector)

## Code Style

**Formatting:**
- Indentation: 4 spaces (consistent across HTML, CSS, JS)
- Quotes: Single quotes for strings in JavaScript
- Semicolons: Required (present on all statements)
- Line length: No strict limit (generally reasonable)

**Linting:**
- Not configured - no .eslintrc or linting tools
- No Prettier configuration
- Code style maintained manually

## Import Organization

**Order:**
- Not applicable - no module system or imports
- All JavaScript in single file (`improved/js/script.js`)
- Script loaded at bottom of HTML (line 450 in `improved/index.html`)

**Grouping:**
- Not applicable (no imports)

**Path Aliases:**
- Not applicable (no build system)

## Error Handling

**Patterns:**
- Minimal error handling currently implemented
- No try/catch blocks in production code
- Commented-out error handling: `improved/js/script.js`, lines 627-629

**Error Types:**
- Console logging for debugging: `console.log()` at lines 606, 697, 713
- No custom error classes
- No structured error messages for users

## Logging

**Framework:**
- Console logging only
- Levels: console.log (no debug, info, warn, error distinction)

**Patterns:**
- Log form submissions: `console.log('Form submitted:', data)` at line 606
- Log contact form: `console.log('Contact form:', formData)` at line 697
- Log callback form: `console.log('Callback request:', formData)` at line 713
- No production logging service

## Comments

**When to Comment:**
- Section separators: Banner-style comments with `========` (lines 1-3, 282-284)
- File headers: Banner with component name
- Section headers: UPPERCASE comments for CSS sections

**JSDoc/TSDoc:**
- Not used - no function documentation comments
- Methods are self-documenting through descriptive names

**TODO Comments:**
- None found in codebase
- Planned work documented in external files (README, QUICKSTART)

## Function Design

**Size:**
- Functions range from small (5-10 lines) to medium (30-50 lines)
- Largest method: `applyLanguage()` ~40 lines
- No functions exceed 100 lines

**Parameters:**
- Low parameter counts (0-2 parameters typical)
- Object parameters not used (simple primitives)
- Event parameters: Standard `event` or `e`

**Return Values:**
- Explicit returns where needed
- Many methods return `undefined` (perform side effects only)
- No guard clause pattern consistently applied

## Module Design

**Exports:**
- Not applicable - no module system
- Classes attached to window: `window.languageManager`, `window.jetSelector` (implicit global)

**Barrel Files:**
- Not applicable (single-file architecture)

## Specific Patterns Observed

**Class Structure:**
```javascript
class ClassName {
    constructor() {
        // Initialize properties
    }

    init() {
        // Setup method called after construction
    }

    methodName() {
        // Instance methods
    }
}
```

**Event Handling:**
```javascript
element.addEventListener('click', () => {
    this.methodName();
});
```

**DOM Queries:**
- `document.querySelector()` for single elements
- `document.querySelectorAll()` for collections
- Store references in variables when used multiple times

**CSS Naming:**
- kebab-case classes: `.option-card`, `.step-container`, `.nav-links`
- BEM-like patterns: `.option-card.selected`, `.step-container.active`
- State classes: `.active`, `.selected`, `.completed`

**Data Attributes:**
- `data-step` for wizard steps
- `data-value` for option values
- `data-i18n` for translation keys
- `data-lang` for language indicators

---

*Convention analysis: 2026-01-27*
*Update when patterns change*
