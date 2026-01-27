# Testing Patterns

**Analysis Date:** 2026-01-27

## Test Framework

**Runner:**
- Not configured - no test framework present

**Assertion Library:**
- Not configured

**Run Commands:**
```bash
# No test commands available
```

## Test File Organization

**Location:**
- No test files present
- No test directories (`__tests__/`, `tests/`, `spec/`)

**Naming:**
- No naming convention established (no tests exist)

**Structure:**
```
improved/
  ├── js/
  │   └── script.js          # No co-located tests
  └── css/
      └── style.css          # No style tests
```

## Test Structure

**Suite Organization:**
- Not applicable (no tests)

**Patterns:**
- Not established

## Mocking

**Framework:**
- Not applicable (no test framework)

**Patterns:**
- Not established

**What to Mock:**
- Recommendations for future:
  - localStorage operations
  - DOM manipulation
  - Form submission (when backend added)
  - Google Fonts API (external dependency)

## Fixtures and Factories

**Test Data:**
- Not present

**Location:**
- Not established

## Coverage

**Requirements:**
- No coverage target set

**Configuration:**
- No coverage tools configured

**View Coverage:**
```bash
# No coverage tooling available
```

## Test Types

**Unit Tests:**
- Not present
- Recommendation: Test LanguageManager and JetSelector classes in isolation

**Integration Tests:**
- Not present
- Recommendation: Test wizard flow across multiple steps

**E2E Tests:**
- Not present
- Recommendation: Test complete user journey from landing page to form submission

## Common Patterns

**Async Testing:**
- Not applicable (no tests)

**Error Testing:**
- Not applicable (no tests)

**Snapshot Testing:**
- Not applicable (no tests)

## Recommended Testing Setup

**For Future Implementation:**

1. **Test Framework**: Jest or Vitest
   - Configuration: Create `vitest.config.js` or `jest.config.js`
   - Install: `npm install -D vitest` or `npm install -D jest`

2. **Test File Structure**:
   ```
   improved/
   ├── js/
   │   ├── script.js
   │   └── __tests__/
   │       ├── LanguageManager.test.js
   │       └── JetSelector.test.js
   └── tests/
       ├── integration/
       │   └── wizard-flow.test.js
       └── e2e/
           └── complete-journey.spec.js
   ```

3. **Test Coverage Targets**:
   - Critical paths: 80%+ (language switching, wizard flow)
   - UI components: 60%+ (form validation, step navigation)
   - Utilities: 90%+ (helper functions)

4. **Test Commands** (after setup):
   ```bash
   npm test                  # Run all tests
   npm test -- --watch      # Watch mode
   npm run test:coverage    # Coverage report
   ```

## Testable Components

**High Priority:**
- LanguageManager.switchLanguage() - language persistence
- LanguageManager.applyLanguage() - DOM translation
- JetSelector.handleOptionSelect() - state updates
- JetSelector.nextStep() / prevStep() - navigation logic
- JetSelector.updateProgress() - progress bar calculations

**Medium Priority:**
- Form validation logic
- Selection summary population
- localStorage operations
- Error handling (once implemented)

**Low Priority:**
- CSS styling (visual regression tests)
- Animation timing
- Responsive breakpoints

## Manual Testing Checklist

**Until automated tests are implemented:**

- [ ] Language switching (NL ↔ EN)
- [ ] Language persistence across page reload
- [ ] Wizard step progression (1 → 7)
- [ ] Back button navigation
- [ ] Progress bar updates
- [ ] Option card selection visual feedback
- [ ] Form validation (required fields)
- [ ] Form submission flow
- [ ] Success message display
- [ ] Mobile responsiveness (< 768px)
- [ ] Tablet layout (768-1199px)
- [ ] Desktop layout (1200px+)
- [ ] Browser compatibility (Chrome, Firefox, Safari, Edge)

---

*Testing analysis: 2026-01-27*
*Update when test patterns change*
