# TNTX (Tamilnadu Textile Exchange) - PRD

## Original Problem Statement
Landing page for Tamilnadu Textile Exchange - a textile sourcing intensive program in South India. Meet mills. See real ex-mill pricing. Build your supplier map—without middlemen.

## User Requirements & Changes Applied
- ✅ TNTX branding (not full name except in "Why TNTX" section)
- ✅ 9 days (not 12)
- ✅ No pricing displayed anywhere
- ✅ Location: Coimbatore, South India
- ✅ Countdown timer for June 7th cohort start
- ✅ Applications close March 31st, 2025
- ✅ Google Form link → Zoho Forms redirect
- ✅ Contact page → mailto:info@tntx.org
- ✅ About page with detailed content
- ✅ Dark industrial aesthetic
- ✅ Testimonials section (3 past participants)
- ✅ FAQ section for admission (5 questions)
- ✅ Professors can be sponsored to audit (updated academic section)
- ✅ Final positioning in small font

## Pages Implemented
1. **Home (/)** - Hero, Problem, Audience, Promise, What Happens, Value Chain, Program Snapshot, Testimonials, Academic, Why TNTX, FAQ, Application Process, Final CTA
2. **About (/about)** - Full detailed content about the program
3. **Contact (/contact)** - Redirects to mailto:info@tntx.org
4. **Apply (/apply)** - Redirects to Zoho Forms

## Tech Stack
- Frontend: React + Tailwind CSS + Shadcn UI + Framer Motion
- Backend: FastAPI (minimal, not used)
- Routing: React Router

## Design
- Dark industrial aesthetic (obsidian/steel backgrounds)
- Orange (#f97316) accent color
- Typography: Oswald (headings), Space Mono (body)
- Grain overlay texture
- Grayscale industrial imagery

## Action Required
- Replace Zoho Forms placeholder URL in `/app/frontend/src/pages/SimplePages.jsx`

## Prioritized Backlog
### P0 (Critical)
- Add actual Zoho Forms URL

### P1 (Important)
- Add more testimonials when available
- SEO meta tags optimization

### P2 (Nice to have)
- Add social proof badges
- Add partner/university logos
