# Technology Stack

**Analysis Date:** 2026-01-27

## Languages

**Primary:**
- HTML5 - All markup (`improved/index.html`, `original/pages/index.html`)
- CSS3 - All styling (`improved/css/style.css`, `original/css/*.css`)
- JavaScript ES6+ - All client-side logic (`improved/js/script.js`)

**Secondary:**
- None - no build scripts or configuration languages

## Runtime

**Environment:**
- Browser-based (client-side web application)
- No server runtime required (static site)
- Optional: Python 3.x for local development server

**Package Manager:**
- Not applicable - zero npm/pip dependencies
- No package.json, requirements.txt, or lockfiles

## Frameworks

**Core:**
- Vanilla JavaScript - No frameworks (React, Vue, Angular, etc.)
- Custom CSS - CSS Grid, Flexbox, CSS Custom Properties

**Testing:**
- Not detected - no test framework configured

**Build/Dev:**
- Not detected - no bundlers (Webpack, Vite, Parcel)
- No TypeScript compiler
- Direct HTML/CSS/JS development

## Key Dependencies

**External:**
- Google Fonts API - Typography service
  - Playfair Display (serif) - Headings
  - Poppins (sans-serif) - Body text
  - Loaded via `https://fonts.googleapis.com/css2`

**Infrastructure:**
- localStorage - Browser storage for language preference (`improved/js/script.js`)
- No database, no ORM, no backend libraries

## Configuration

**Environment:**
- No environment variables configured
- No .env files or configuration system
- Translations hardcoded in JavaScript object (`improved/js/script.js`, lines 9-280)

**Build:**
- No build configuration files
- No tsconfig.json, webpack.config, or vite.config

## Platform Requirements

**Development:**
- Any OS with modern web browser
- Optional: HTTP server for local testing (Python, Node http-server, etc.)
- No external dependencies to install

**Production:**
- Static hosting (Netlify, Vercel, GitHub Pages, or any HTTP server)
- HTTPS recommended (not required for functionality)
- CDN optional (site is already optimized at 192KB total)

---

*Stack analysis: 2026-01-27*
*Update after major dependency changes*
