# JetSelect - Private Jet Lead Generation

## What This Is

A premium lead-generation website for private jet buyers. The site qualifies potential buyers through an interactive 7-step wizard (range, passengers, priorities, runway types, budget, contact info) and captures high-intent leads for referral to aircraft sellers and partners. The business model is commission-based referrals or pay-per-lead, with plans to scale through SEO and a global partner network.

## Core Value

**Beautiful, polished UI/UX that converts high-net-worth individuals.** In the luxury private jet market, perception drives trust and conversion. The website must feel as premium as the product itself.

## Requirements

### Validated

*Inferred from existing codebase - features already working:*

- ✓ 7-step qualification wizard (range, passengers, priority, runway, budget, contact, success) — existing
- ✓ Bilingual support (Dutch/English) with localStorage persistence — existing
- ✓ Responsive layout (mobile, tablet, desktop breakpoints) — existing
- ✓ Clean visual design with brand colors (teal #115A4E, orange #FA692F) — existing
- ✓ Form data collection and summary display — existing
- ✓ Zero-dependency vanilla JS architecture — existing

### Active

*New work to transform into a converting lead-generation machine:*

- [ ] Smooth animations and micro-interactions throughout (Framer Motion style)
- [ ] Premium scroll effects and parallax for depth
- [ ] Refined luxury brand aesthetics (high-end imagery, sophisticated typography)
- [ ] Simplified, more intuitive wizard flow (fewer friction points)
- [ ] Mobile-first optimization (perfect experience on all devices)
- [ ] Enhanced visual hierarchy and whitespace
- [ ] Progress indicator animations and feedback
- [ ] Card hover states and selection animations
- [ ] Form validation with elegant error states
- [ ] Success screen with celebratory animation

*Future phases (post-UI polish):*

- [ ] Supabase backend integration for lead persistence
- [ ] Email notification system (to team and customer)
- [ ] Partner dashboard and lead distribution channel
- [ ] SEO content pages (city/route-specific landing pages)
- [ ] Topical clustering for search visibility
- [ ] Multi-language expansion beyond NL/EN
- [ ] CRM integration for lead management
- [ ] Analytics and conversion tracking
- [ ] A/B testing framework for optimization

### Out of Scope

- Backend integration in v1 — Focus on frontend polish first, backend comes in Phase 2
- Payment processing — This is lead generation only, not handling jet sales transactions
- Real-time partner chat or collaboration — Manual lead handling initially
- User accounts or authentication — No login system needed for lead forms
- Video content or 3D jet viewers — Keep it elegant and fast-loading

## Context

**Existing Foundation:**
- Rebuilt from WordPress (258KB) to vanilla JS (15KB) - 94% size reduction
- Clean class-based architecture (LanguageManager, JetSelector)
- No current backend - forms console.log only
- All documentation mapped in `.planning/codebase/` (7 documents)

**Business Model:**
- Lead generation for private jet sales (commission or pay-per-lead basis)
- Target: Recruit 5-10 partners worldwide for lead distribution
- Discovery funnel captures: range, routes, airports, new vs used, budget
- Eventually hire aviation expert on commission after initial validation

**Target Audience:**
- High-net-worth individuals looking to purchase private jets
- International buyers (currently NL/EN, expanding to more languages)
- Budget range: €5M - €50M+ aircraft purchases

**Key Insight:**
In luxury markets, the website IS the first impression. A polished, smooth, premium experience builds trust and signals quality. The UI/UX must match the sophistication of a multi-million euro purchase decision.

## Constraints

- **Backend**: Supabase required — When backend integration happens (Phase 2+), must use Supabase for database, auth, and APIs
- **Performance**: Fast loading essential — Luxury buyers expect instant, smooth experiences
- **Mobile**: Mobile-first priority — High-net-worth users browse on premium devices
- **Brand**: Maintain JetSelect visual identity — Teal/orange color scheme, Playfair Display + Poppins fonts

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| UI/UX polish before backend | In luxury market, perception drives conversion. Perfect the experience first, then add infrastructure. | — Pending |
| Vanilla JS (no frameworks) | Existing codebase is clean, fast, zero-dependency. No need to rebuild with React/Vue. | — Pending |
| Framer Motion for animations | Industry standard for smooth, professional animations. Proven in luxury brands. | — Pending |
| Supabase for backend (Phase 2) | Open-source, excellent DX, handles auth/db/storage/realtime. Scales well. | — Pending |

---

*Last updated: 2026-01-27 after initialization*
