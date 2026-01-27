# External Integrations

**Analysis Date:** 2026-01-27

## APIs & External Services

**Typography:**
- Google Fonts - Web font delivery
  - SDK/Client: Direct CSS link in HTML
  - Fonts: Playfair Display, Poppins
  - Endpoints: `https://fonts.googleapis.com/css2`, `https://fonts.gstatic.com`
  - Location: `improved/index.html`, lines 11-13

**Form Processing:**
- None currently active
  - Forms log to console only (`improved/js/script.js`, line 606, 697, 713)
  - Commented-out fetch() example present (lines 615-629)
  - No backend endpoint configured
  - **Status:** Requires implementation before production

**Email/SMS:**
- Not integrated
  - Recommended: nodemailer or similar for email notifications
  - Example documentation: `improved/QUICKSTART.md`, lines 172-197

**External APIs:**
- None currently integrated

## Data Storage

**Databases:**
- Not detected - no database connections
- All form data exists in browser memory only
- No persistence to backend

**File Storage:**
- Static images in `improved/images/` directory
  - Jetselect-logo1.jpeg
  - Favicon-Jetselect.png
  - Tot-5-edited-1.jpg
  - Afgelegen.jpg
- No cloud storage integration (S3, Cloudinary, etc.)

**Caching:**
- Browser cache only (standard HTTP caching)
- localStorage for language preference (`improved/js/script.js`, lines 285, 306)

## Authentication & Identity

**Auth Provider:**
- Not applicable - no user authentication system
- No login, no user accounts

**OAuth Integrations:**
- None

## Monitoring & Observability

**Error Tracking:**
- Console logging only (`improved/js/script.js`, lines 606, 697, 713)
- No Sentry, Rollbar, or error tracking service
- **Status:** Recommended for production

**Analytics:**
- Not integrated
  - Recommended: Google Analytics or similar
  - Example documentation: `improved/QUICKSTART.md`, lines 200-210

**Logs:**
- Browser console only
- No server-side logging (no server)

## CI/CD & Deployment

**Hosting:**
- Not deployed yet
  - Recommended platforms: Netlify, Vercel, GitHub Pages
  - Deployment documentation: `improved/QUICKSTART.md`

**CI Pipeline:**
- Not configured
- No GitHub Actions, GitLab CI, or other automation

## Environment Configuration

**Development:**
- No environment variables required
- All configuration hardcoded in source files
- Contact info hardcoded in `improved/index.html`, lines 419-427

**Staging:**
- Not configured

**Production:**
- Not configured
- **Recommendation:** Create .env.example for required variables when backend is added

## Webhooks & Callbacks

**Incoming:**
- None

**Outgoing:**
- None

## Recommended Future Integrations

**Lead Capture Backend:**
- Email notification service (SendGrid, Mailgun, Postmark)
- CRM integration (HubSpot, Salesforce, custom)
- Form submission API endpoint

**Analytics & Tracking:**
- Google Analytics 4 or similar
- Facebook Pixel for advertising
- Conversion tracking

**GDPR Compliance:**
- Cookie consent service (OneTrust, CookieYes)
- Privacy policy generator

---

*Integration audit: 2026-01-27*
*Update when adding/removing external services*
