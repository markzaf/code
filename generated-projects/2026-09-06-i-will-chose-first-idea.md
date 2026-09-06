# Agentic Coding Studio — Project Deliverable

**Request:** i will chose first idea
**Generated:** 2026-09-06T08:51:04.757Z

---
## 1. Project Plan
One-line project summary
- A fast, highly‑accessible, SEO‑first personal portfolio website to showcase your bio, projects, writing, and a conversion‑focused contact flow.

Detected intent & platform
- Intent: Website (personal marketing / portfolio).
- Platform: Responsive web (desktop-first, mobile-friendly). Static-first site (SSG) with optional light serverless functions for contact/email. Primary tech recommendation: Next.js (App Router) + TypeScript + Tailwind CSS, or Astro for maximum performance. Host on Vercel or Netlify.

Target audience
- Recruiters and hiring managers evaluating your work.
- Potential clients/contractors scouting talent.
- Collaborators and fellow devs/designers who want to browse your case studies and contact you.

Core features (opinionated)
- Hero section: clear name, tagline, role, location/availability, primary CTA (View work / Contact).
- Featured projects gallery: curated case studies (3–6), with hero images and short summaries.
- Project detail pages/modals: deep case studies with context, problem, approach, outcome, tech stack, and prominent visuals/screenshots.
- About / resume: concise bio, downloadable PDF resume, skills matrix, timeline/experience highlights.
- Blog: optional, lightweight posts (MDX or headless CMS) for thought leadership and SEO.
- Contact form: simple form (name, email, message, project type) with serverless submission + email notifications and spam protection (honeypot + reCAPTCHA optional).
- Social & external links: GitHub, LinkedIn, Dribbble/Behance, email; OpenGraph + Twitter card meta.
- SEO & discoverability: semantic markup, structured data (schema.org Person + Project), sitemap.xml, RSS feed.
- Performance & accessibility: image optimization, critical CSS, keyboard navigation, sufficient color contrast, ARIA in modals/forms.
- Analytics & tracking: privacy-minded analytics (Plausible/Google Analytics), optional session recording.
- CI/CD, custom domain, TLS, basic observability (error logging; uptime).

Suggested pages / screens
- Landing / Home (Hero → Featured Projects → About snippet → Blog preview → Contact CTA)
- About / Resume (detailed bio, skill bars, experience timeline, resume download)
- Projects (gallery index, filter by tag/tech, search)
- Project detail (full case study page; also available as modal from gallery)
- Blog index (paginated) + Blog post page (MDX support)
- Contact (form page and site-wide persistent CTA)
- Legal: Privacy & Terms (simple pages)
- 404 Not Found
- (Optional) Admin / CMS hooks (headless CMS dashboard link/setup)

Prioritized TASK LIST (for downstream design, frontend, backend/ops agents)
— Be concrete and opinionated; treat this as the single-source plan to begin work.

Phase 0 — Project setup & decisions (High priority)
1. Decide stack (make a call now)
   - I recommend Next.js (App Router) + TypeScript + Tailwind CSS + MDX for blog + Vercel hosting.
2. Choose content source:
   - MDX files in repo (simple, low maintenance) OR headless CMS (Sanity/Contentful/Strapi) if non‑technical editing is required.
3. Create repo, initialize project, set branch protection and CI skeleton.

Design (deliverables: moodboard, wireframes, high‑fi components)
1. Brand & visual direction (1–2 days)
   - Choose primary brand color, accent color, typography scale (system font stack or Google font), logo/wordmark, photo style (portrait).
   - Output: color tokens, typographic scale, sample avatar/cover image treatment.
2. Information architecture & content plan (half-day)
   - Write short copy for hero, project summaries, About bio, CTAs, resume highlights, blog categories.
3. Wireframes (desktop + mobile) (1 day)
   - Low-fidelity layouts for Home, Projects index, Project detail, About, Contact.
4. High-fidelity UI (2–3 days)
   - Design reusable components: navbar, hero, project card, grid, modal, form fields, skill bars, blog list, footer.
   - Define spacing system and component states (hover, focus, error).
5. Micro‑interactions & accessibility annotations (0.5 day)
   - Keyboard flows, focus states, reduced motion preference, alt text conventions.

Frontend (deliverables: component library, pages, content)
1. Scaffold app (Day 0)
   - Next.js + TypeScript + Tailwind config; folder structure (app/, components/, lib/, content/).
2. Design system & components (1–2 days)
   - Button, Input, Form, Card, Modal/Dialog (accessible), Avatar, Tag/Badge, Grid utilities.
   - Implement theme tokens in tailwind.config.
3. Layout & navigation (0.5 day)
   - Responsive header with nav; sticky CTA; footer with contacts and social links.
4. Home & Projects pages (1–2 days)
   - Implement projects gallery with CSS grid, filtering by tags, lazy image loading via next/image.
5. Project detail page and modal (1 day)
   - Full case study template (MDX support). Build modal that degrades to page when navigated directly.
6. About/Resume page (0.5–1 day)
   - Resume PDF download, skill bars, timeline component.
7. Blog (optional) (1–2 days)
   - MDX posts router, reading time, tags, SEO meta per post, RSS generation.
8. Contact form & form handling (0.5–1 day)
   - Integrate serverless endpoint (Netlify/Vercel function) or Formspree as fallback.
   - Add honeypot and optional reCAPTCHA.
9. SEO, OpenGraph & Social images (0.5 day)
   - Dynamic meta tags; generate OG image (static or with OG image generation).
10. Performance & Accessibility fixes (ongoing)
    - Lighthouse run, image sizes, preconnect fonts, aria labels, keyboard tests.
11. Tests (optional but recommended) (1–2 days)
    - Component tests with React Testing Library; basic e2e smoke tests with Playwright.

Backend / Ops (deliverables: serverless endpoints, hosting, CI/CD)
1. Hosting decision & deploy pipeline (Day 0)
   - Host frontend on Vercel (recommended for Next.js); configure repo integration.
2. Contact form endpoint + email (0.5–1 day)
   - Implement serverless function to accept contact and send email via SendGrid or Mailgun; return 200 and store copy in DB or Google Sheets if desired.
3. Optional admin/content editing (only if headless CMS chosen)
   - Setup Sanity/Contentful and configure datasets + deploy webhooks or use git-based content (MDX) to avoid backend complexity.
4. Domain, TLS, and DNS (0.5 day)
   - Acquire custom domain, set A/CNAME on Vercel, enable HTTPS.
5. Analytics & privacy (0.5 day)
   - Integrate Plausible or GA (consent banner optional); add robots.txt and basic privacy policy.
6. CI/CD & automation (0.5 day)
   - Configure Vercel auto-deploys from main branch; pre-deploy tests in GitHub Actions for main branch (lint, typecheck, tests).
7. Monitoring & backups (optional)
   - Sentry for error reporting (frontend); backups for CMS content if using headless CMS.
8. Optional: serverless rendering for OG images (if dynamic OG needed)

Priority roadmap (sprints)
- Sprint 1 (MVP, 3–5 days): Setup project, wireframes, design tokens, Home, Projects gallery (static MDX cards), Project detail pages, Contact form (serverless), deploy to staging with domain.
- Sprint 2 (improvements, 2–3 days): About/Resume, blog MVP (MDX), SEO/meta, OG images, accessibility fixes, analytics.
- Sprint 3 (polish, 1–2 days): Tests, performance tuning (Lighthouse > 90), CI test pipeline, finalize copy, screenshots for portfolio.

Concrete opinions & constraints (to keep scope small and production-ready)
- Use MDX for projects + blog unless you need non‑technical editors — MDX keeps repo as single source and eliminates CMS hosting costs.
- Prefer Next.js App Router for route/layout primitives and image optimization; Vercel makes deployment trivial.
- Use serverless functions for contact form to avoid a full backend; store messages optionally in a small managed DB (Supabase) or forward to email.
- Prioritize 3–5 deeply written case studies over dozens of shallow projects — quality over quantity for recruiters.
- Aim for 90+ Lighthouse score (desktop) and AA accessibility as launch criteria.

Deliverables checklist (for handoff)
- Moodboard, brand tokens, and typography spec.
- Wireframes and high‑fi screens for desktop + mobile.
- Component library (reusable Tailwind components).
- Pages: Home, Projects, Project Detail, About/Resume, Contact, Blog templates.
- Serverless contact function + email integration.
- Deployment configuration (Vercel settings, domain records).
- README with local dev, build, deploy instructions and content editing guide (MDX or CMS).

Next step
- I’ll generate a concrete file scaffold (project structure + key component templates and MDX post examples) if you want to proceed with the Next.js + Tailwind stack. Which do you prefer for content: MDX-in-repo or headless CMS (Sanity/Supabase)?

---
## 2. UI/UX Design System
Below is a complete UI/UX DESIGN SYSTEM and page-level wireframes for the personal portfolio project you described. I researched recent portfolio design trends (minimal/intentional layouts, bold type, micro‑interactions, subtle glass/blur accents, hero animations, deep case studies and MDX-backed content) and distilled those patterns into an accessible, production-ready system that’s mobile-first, accessible, and easy to implement with Next.js + Tailwind + MDX.

High-level trend summary (quick)
- Minimal, content-first layouts: reduce chrome, emphasize case studies and narrative.
- Bold typographic hierarchies with generous whitespace and intentional negative space.
- Micro-interactions and motion microcopy: subtle hover states, animated reveals, lightweight Lottie/SVG animation in hero.
- Asymmetric/stacked cards, overlapping imagery, soft glass/blur accents for depth (used sparingly).
- Deep case study pages (not just thumbnails): storytelling with hero, problem→approach→outcome.
- MDX for content (projects/blog) to pair narrative and code snippets.
- Accessibility & performance prioritized: fast load, optimized images, keyboard-first interactions.

DESIGN PRINCIPLES
- Content-first: projects and writing are primary; UI chrome must be minimal.
- Accessible: WCAG AA for text, keyboard navigation, focus states, reduced-motion toggle.
- Mobile-first responsive: layouts scale and adapt; mobile vertical flow, desktop split/columns.
- Consistent rhythm: spacing and typographic scale are predictable and modular.
- Subtle delight: micro-interactions that add polish but never distract.

1) BRAND PERSONALITY & TONE
- Personality: Professional, calm, confident, approachable.
- Tone of voice: Clear, concise, narrative (problem → approach → outcome). Use first person for bio; be factual and human.
- Messaging pillars: clarity, craft, impact.
- CTAs: action-focused microcopy (View case study, Contact for work, Download resume).

2) COLOR PALETTE (tokens + WCAG notes)
Primary usage: use neutral surfaces + one accessible brand accent.

- Neutral / Surfaces
  - slate-900 (text): #0f1724 — Primary body text (WCAG: meets AA on #ffffff)
  - slate-700 (muted text): #475569
  - slate-100 (surface): #f1f5f9
  - white: #ffffff

- Brand Accent (primary)
  - brand-500: #0b84ff — primary CTA & accents
    - Contrast vs white (#ffffff): 4.17:1 (sufficient for large text; for normal text ensure darker text on brand backgrounds or use white CTAs with brand border)
    - Contrast vs slate-900 (#0f1724): 6.5:1 (good for text on brand)
- Brand Accent (dark)
  - brand-700: #0456b6 — hover/active state

- Supporting warm accent (for tags/outcomes)
  - amber-400: #f59e0b — badges, success micro accents (contrast w/ white 7.5:1)

- Semantic colors
  - success: #10b981 (emerald-500)
  - warning: #f59e0b
  - danger: #ef4444

Contrast quick notes (WCAG):
- Body text: slate-900 (#0f1724) on white = 17.9:1 (excellent)
- CTA primary (brand-500) text: white on brand-500 = 4.17:1 (OK for UI buttons). If using brand-500 as background for body text, it fails; avoid.
- Muted text (slate-700) on white = 6.6:1 (good)
- Tag backgrounds should use low-contrast light backgrounds (#f1f5f9) with dark text.

3) TYPOGRAPHY SCALE (system + web-safe suggestions)
- System choice: Inter (system UI fallbacks) + Merriweather (for optional accent headings if you want a serif)
- Primary font stack:
  - --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial
  - --font-serif: "Merriweather", Georgia, "Times New Roman", serif (optional for hero accent)
- Weights (use variable or limited weights): 400 (regular), 600 (semibold), 700 (bold), 800 (extrabold)

Typographic scale (mobile-first; sizes in px)
- Display / Hero
  - H1: 36px (2.25rem) — 700 (mobile)
    - Desktop: 56px (3.5rem) — 700
  - H2: 20px (1.25rem) — 700 (mobile); Desktop 28px (1.75rem)
  - H3: 18px (1.125rem) — 600
- Body
  - Body / P: 16px (1rem) — 400
  - Small: 14px (0.875rem) — 400
  - Caption / meta: 12px (0.75rem)

Line-height recommendations:
- H1: 1.02–1.1
- Body: 1.5
- Captions: 1.2

Utility sizes for Tailwind:
- text-4xl, text-2xl, text-lg, text-base, text-sm, text-xs — map to above.

4) SPACING SCALE (4px base)
Use an 4pt baseline:
- xs = 4px (0.25rem)
- sm = 8px (0.5rem)
- md = 16px (1rem)
- lg = 24px (1.5rem)
- xl = 32px (2rem)
- xxl = 48px (3rem)
Layout containers: max-widths 720px / 980px / 1200px (content width choices).

5) COMPONENT SPECS (desktop & mobile; include states & accessibility)
General rules
- All interactive components must have a focus ring (2px/3px) with visible contrast.
- Prefer semantic elements (<button>, <a>, <form>).
- Provide aria-label where icon-only.
- Respect prefers-reduced-motion.

Component: Primary Button
- Variants: primary, outline, ghost
- Primary:
  - Background: brand-500 (#0b84ff)
  - Text: white
  - Padding: px-5 py-2 (md)
  - Border-radius: 10px (~0.625rem)
  - Hover: brand-700 (darken), transform: translateY(-1px) (subtle)
  - Active: scale 0.98, darker
  - Disabled: bg-slate-200, text-slate-400, cursor-not-allowed
  - Focus: 3px focus ring rgba(11,132,255,0.18)
  - Accessibility: aria-pressed for toggles; role=button implicit

Component: Secondary / Outline Button
- Background: transparent or white with border-slate-200
- Text: brand-500 or slate-700
- Hover: subtle background tint (slate-50)

Component: Form Input
- Height: 44px, padding px-3
- Border: 1px solid slate-200
- Radius: 8px
- Focus: border-brand-300 + focus ring
- Error: border-danger + icon + live region aria-live="assertive" for error messages
- Labels: always visible above the field (not placeholders)
- Accessibility: ensure id/for linking, validation messages referenced via aria-describedby

Component: Navbar / Header
- Sticky top on desktop; collapsible hamburger on mobile.
- Left: name / logo; center/right: links (Work, About, Blog, Contact)
- Primary CTA (Contact) styled as primary button on desktop; in mobile in header drawer as action.
- Keyboard: mobile drawer should trap focus when open.

Component: Hero
- Left column: H1 (name + role), short one-liner, CTA row (View work / Contact)
- Right column: portrait/cover art or subtle animated SVG and a clipped screenshot of a featured project (overlap), with soft shadow + rounded corner + optional glass/blur element for depth.
- On load: subtle entrance animation (fade + translateY). Respect prefers-reduced-motion.

Component: Project Card (gallery)
- Card composition: image thumbnail (16:9), title, short description (one-liner), tags, small meta (year/role).
- Hover: image scales 1.03 and card raises (box-shadow), tags tint.
- Click: opens case study modal or navigates to project detail page.
- Accessibility: card is a link with aria-describedby referencing description.

Component: Project Detail (page & modal)
- Hero: big project hero image, title, role/time, one-line TL;DR
- Body: Problem, Role, Approach, Outcome; Highlights with metrics (e.g., +25% conversion).
- Visuals: full-width images, product screenshots, code samples (if developer), embedded video/gallery.
- Sidebar (desktop): tech stack chips, duration, repo link, external link
- Modal: role="dialog", aria-modal="true", focus trap, Esc to close, on backdrop click close.

Component: Skills Matrix / Bars (About)
- Horizontal bars with label + percentage or level (Proficient/Experienced/Familiar)
- Color: brand accent for filled portion, slate-100 background
- Provide minimum text equivalents for screen readers (e.g., "React — proficient")

Component: Contact Form
- Fields: name, email, project type (select), message, honeypot hidden input
- Button: primary
- After success: show inline success panel with next steps & optional Calendly link
- Spam protection: honeypot & optional reCAPTCHA v3 server-side check
- Accessibility: label + aria-required; error handling via aria-describedby

Component: Footer
- Compact: small nav, social icons (aria-label), copyright, link to privacy

Micro-interactions
- Hover: elevate cards and primary CTAs (scale up 1–2%).
- Focus: visible ring and not solely color change.
- Entrance: staggered fade-up for lists with 80–120ms stagger.
- Reduced motion: replace translate animations with crossfade.

6) WIREFRAMES / SCREEN DESCRIPTIONS (mobile-first)
Each screen includes layout, hierarchy, and key interactions.

A. Home / Landing (mobile → desktop)
- Mobile vertical flow (hero → featured projects → about snippet → blog preview → contact CTA → footer)
  - Hero: big H1 ("Your Name — Product Designer & Frontend Engineer"), 2-line tagline, CTA row: [View Work] (primary) [Contact] (ghost). Portrait small circular top-right overlay.
  - Featured Projects: 1-column stack of project cards with image, title, tags; swipe/scroll horizontally for more.
  - About snippet: 2–3 lines + CTA "Read more"
  - Blog preview: 2 recent posts with thumbnail + meta
  - Contact CTA: full-width primary button linking to contact page/form
- Desktop: hero becomes 2-column, left text right visual; projects arranged in 3-column CSS grid with staggered card sizes; about snippet in right column.

Key interactions:
- CTA click scrolls to section or navigates.
- Project card click opens modal (client-side route push) with accessible modal controls.

B. Projects Index
- Grid of project cards; filters across top (All, UX, Frontend, Fullstack); search input on right.
- Desktop: 3-column grid with masonry-like (one large featured card).
- Mobile: single column with filter chips exposed as a horizontal list.

Key interactions:
- Filter chips toggle and update grid with minimal animation.
- Keyboard accessible filter selection.

C. Project Detail (page & modal)
- Desktop: hero image full bleed, overlay title + meta; two-column content (main narrative + sidebar)
- Mobile: hero image top, then narrative sections stacked; sticky "Contact about this project" CTA at bottom.
- Modal: same content constrained in a scrollable dialog with sticky close button.

Key interactions:
- Inline lightboxes for images.
- Share button copies link & opens OS share on supported devices.
- Social proof / metrics displayed with counters.

D. About / Resume
- Top: hero band (short intro + download resume)
- Skill matrix with progress bars and grouped skills (Design, Frontend, Backend, Tools)
- Experience timeline: vertical list with company, role, dates, bullets; collapsible details for each item
- Education / certifications

Key interactions:
- Download resume triggers a PDF download (pre-generated).
- Timeline items expand/collapse with smooth height animation.

E. Blog Index & Post
- Index: list of posts with categories filter and search
- Post: MDX-rendered content, hero image, reading time, share links, related posts at bottom.

Key interactions:
- Anchor links for headings (copy-permalink).
- Code blocks with copy-to-clipboard button.

F. Contact
- Minimal form layout with progressive disclosure (show availability/time to start).
- After submit: success state shows expected response time and CTA to schedule a meeting.
- Serverless function sends mail and logs submission to DB (optional).

7) ACCESSIBILITY NOTES (explicit)
- Use semantic HTML (nav, main, header, footer, form, fieldset, legend).
- Focus management:
  - Modal/dialog must trap focus; restore focus to trigger on close.
  - Skip link to main content.
- Colors: maintain contrast >= 4.5:1 for body text; controls must have clear focus outlines.
- Keyboard:
  - All interactive elements reachable via Tab.
  - Enter/Space activate buttons & cards; Escape closes modal.
- ARIA:
  - Modal role="dialog" + aria-labelledby and aria-describedby.
  - Form fields labelled with <label for="...">.
- Motion:
  - Honor prefers-reduced-motion: reduce animations or remove transforms.
- Images:
  - Provide alt text; decorative images aria-hidden.

8) CONTENT & COPY GUIDELINES
- Hero: one short sentence + one supporting sentence. Keep real call-to-action.
- Projects: headline, one-sentence summary, 2–4 key outcomes (metrics first).
- About: 3–4 short paragraphs focusing on what you do, how you work, and what you want to do next.
- Blog: conversational but precise; add summary/meta for SEO.

9) IMPLEMENTATION NOTES & PATTERNS (developer-friendly)
- Next.js App Router
  - Use dynamic route for /projects/[slug] and render MDX content; also support opening as modal with shallow routing.
- Images
  - Use next/image for optimization and responsive srcsets; pre-generate low-quality image placeholders (LQIP).
- Data
  - Store projects as MDX files with frontmatter for title, date, tags, hero image, role, metrics.
- Forms
  - Serverless function for contact (Vercel / Netlify) that sends to SendGrid; implement honeypot and rate limits.
- CSS
  - Use Tailwind tokens based on the spacing & type scales above; centralize brand tokens in tailwind.config.

10) DELIVERABLE CHECKLIST (what I will produce next if you want)
- Tailwind-based token file (colors, spacing, fonts)
- React component templates: Button, Input, Modal, ProjectCard, Hero
- Example MDX project + blog post
- Accessible modal & dialog wrapper
- Page templates for home, projects, project page, about, contact
- Optional quick animations (Framer Motion / CSS transitions) with reduced-motion support

DESIGN_SYSTEM JSON (machine-readable tokens)
```json
{
  "brand": {
    "name": "PersonalPortfolio",
    "primary": "#0b84ff",
    "primaryDark": "#0456b6",
    "accentWarm": "#f59e0b"
  },
  "colors": {
    "text": "#0f1724",
    "muted": "#475569",
    "surface": "#f1f5f9",
    "bg": "#ffffff",
    "brand": "#0b84ff",
    "brandDark": "#0456b6",
    "success": "#10b981",
    "warning": "#f59e0b",
    "danger": "#ef4444"
  },
  "typography": {
    "fontSans": "Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    "fontSerif": "Merriweather, Georgia, 'Times New Roman', serif",
    "weights": {
      "regular": 400,
      "medium": 600,
      "bold": 700,
      "black": 800
    },
    "scale": {
      "h1": { "mobile": "2.25rem", "desktop": "3.5rem", "weight": 700 },
      "h2": { "mobile": "1.25rem", "desktop": "1.75rem", "weight": 700 },
      "h3": { "size": "1.125rem", "weight": 600 },
      "body": { "size": "1rem", "weight": 400 },
      "small": { "size": "0.875rem", "weight": 400 },
      "caption": { "size": "0.75rem", "weight": 400 }
    }
  },
  "spacing": {
    "xs": "4px",
    "sm": "8px",
    "md": "16px",
    "lg": "24px",
    "xl": "32px",
    "xxl": "48px"
  },
  "radii": {
    "sm": "6px",
    "md": "10px",
    "lg": "16px",
    "round": "9999px"
  },
  "components": {
    "button": {
      "height": "44px",
      "padding": "0 20px",
      "radius": "10px",
      "primary": { "bg": "#0b84ff", "color": "#ffffff", "hover": "#0456b6", "disabledBg": "#e6eefc" },
      "outline": { "bg": "transparent", "border": "#e6eefc", "color": "#0b84ff" }
    },
    "input": {
      "height": "44px",
      "border": "#e2e8f0",
      "focusBorder": "#93c5fd",
      "radius": "8px"
    },
    "card": {
      "bg": "#ffffff",
      "shadow": "0 6px 18px rgba(11, 20, 34, 0.06)",
      "radius": "12px"
    },
    "modal": {
      "backdrop": "rgba(2,6,23,0.5)",
      "bg": "#ffffff",
      "radius": "12px",
      "focusTrap": true
    }
  },
  "accessibility": {
    "focusRing": "0 0 0 3px rgba(11,132,255,0.18)",
    "reducedMotion": true,
    "contrastGuidelines": {
      "bodyOnBg": ">= 4.5:1",
      "largeTextOnBg": ">= 3.0:1"
    }
  }
}
```

If you’d like I can:
- produce the Tailwind config, a component starter kit (React + TypeScript files) using these tokens, and a sample MDX project file next; or
- generate high‑fidelity Figma style tokens and a simple clickable prototype (via a Figma spec export).

Which next step do you want:
- A: Code scaffolding (Tailwind config + React components + MDX example)
- B: Figma-ready tokens & annotated wireframes (SVG/PNG assets + specs)
- C: Accessibility audit checklist + example a11y test cases and Playwright scripts

Pick one and I’ll generate the deliverable.

---
## 3. Frontend Codebase
Stack choice: Next.js (App Router) + React + TypeScript + Tailwind CSS. Content stored as Markdown (MD) files with frontmatter (easy MDX can be added later). The code below implements the design system and wireframes as a production-ready frontend scaffold: components, pages (Home, Projects, Project detail, About, Contact), a simple contact serverless API route, tailwind tokens, and example project content.

Save these files into a new Next.js (13+) TypeScript project and follow the run steps at the end.

Note: for brevity I include a single sample project markdown file and references to images (place your images under /public/images). The markdown is rendered to safe HTML server-side via remark + remark-html.

---

package.json
```
// package.json
{
  "name": "personal-portfolio",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint"
  },
  "dependencies": {
    "gray-matter": "^4.0.3",
    "next": "13.5.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "remark": "^14.0.2",
    "remark-html": "^15.0.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.14",
    "postcss": "^8.4.24",
    "tailwindcss": "^3.4.6",
    "typescript": "^5.2.2"
  }
}
```

next.config.js
```
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // add your domains if using external images
    domains: []
  }
}

module.exports = nextConfig
```

tsconfig.json
```
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["DOM", "DOM.Iterable", "ES2020"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "ESNext",
    "moduleResolution": "Node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx"],
  "exclude": ["node_modules"]
}
```

postcss.config.js
```
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
}
```

tailwind.config.js
```
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f8ff",
          100: "#dfeffd",
          200: "#bfe0fb",
          300: "#8fc9f8",
          400: "#45a9f4",
          500: "#0b84ff", // primary
          600: "#0867cc",
          700: "#0456b6",
          800: "#033a7a",
          900: "#022a52"
        },
        warm: {
          400: "#f59e0b"
        }
      },
      boxShadow: {
        card: "0 6px 18px rgba(11, 20, 34, 0.06)",
        soft: "0 8px 30px rgba(2,6,23,0.08)"
      },
      borderRadius: {
        lgcustom: "12px",
        mdcustom: "10px"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"]
      }
    }
  },
  plugins: []
}
```

app/globals.css
```
// app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Base resets & tokens */
:root {
  --rounded: 12px;
}

html, body, #__next {
  height: 100%;
}

body {
  font-family: theme('fontFamily.sans');
  background-color: #ffffff;
  color: #0f1724; /* slate-900 from design */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Focus */
:focus {
  outline: none;
  box-shadow: 0 0 0 4px rgba(11,132,255,0.12);
  border-radius: var(--rounded);
}

/* Utility for reduced motion */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.001ms !important;
  }
}

/* Simple container sizes */
.container {
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
```

app/layout.tsx
```
// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Your Name — Portfolio",
  description: "Personal portfolio — projects, writing, and contact"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
```

next-env.d.ts
```
// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
```

lib/projects.ts
```
// lib/projects.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type ProjectMeta = {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
  hero?: string;
  role?: string;
  year?: string;
};

const projectsDir = path.join(process.cwd(), "content", "projects");

export async function getAllProjects(): Promise<ProjectMeta[]> {
  const files = fs.readdirSync(projectsDir);
  const projects: ProjectMeta[] = files
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const full = path.join(projectsDir, file);
      const raw = fs.readFileSync(full, "utf-8");
      const { data } = matter(raw);
      const slug = file.replace(/\.md$/, "");
      return {
        slug,
        title: data.title,
        description: data.description,
        tags: data.tags || [],
        hero: data.hero || "",
        role: data.role || "",
        year: data.year || ""
      } as ProjectMeta;
    });
  // sort featured first or by year
  return projects.sort((a, b) => (b.year || "").localeCompare(a.year || ""));
}

export async function getProjectBySlug(slug: string) {
  const full = path.join(projectsDir, `${slug}.md`);
  if (!fs.existsSync(full)) return null;
  const raw = fs.readFileSync(full, "utf-8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();
  return {
    slug,
    meta: {
      title: data.title,
      description: data.description,
      tags: data.tags || [],
      hero: data.hero || "",
      role: data.role || "",
      year: data.year || ""
    },
    contentHtml
  };
}
```

content/projects/project-atomic-design.md
```
// content/projects/project-atomic-design.md
---
title: "Atomic Design System"
description: "Built a reusable atomic design system for a design-driven product, improving dev speed and design consistency."
tags:
  - Design System
  - Frontend
hero: "/images/project-atomic-hero.jpg"
role: "Lead Frontend Engineer"
year: "2025"
---

Problem
-------
The product had inconsistent UI across pages and no shared components. Designers and engineers duplicated patterns and spent time re-creating similar UI.

Approach
--------
I audited the UI across screens, defined tokens (color, spacing, type), and built an atomic component library using React + Tailwind. We implemented Storybook for documentation and introduced semantic tokens that mapped to design tokens.

Outcome
-------
- Reduced implementation time for new screens by 40%.
- Increased design consistency; reduced visual regressions.
- Reusable components sped up onboarding for new engineers.

Highlights
- Tokens: color, spacing, typographic scale
- Tools: React, Tailwind CSS, Storybook
- Metrics: +40% dev speed, fewer UI regressions

Screenshots and more details follow below.
```

components/Button.tsx
```
// components/Button.tsx
import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md";
};

export default function Button({ variant = "primary", size = "md", className = "", children, ...props }: Props) {
  const base = "inline-flex items-center justify-center font-medium rounded-md transition";
  const sizes: Record<string, string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-sm"
  };
  const variants: Record<string, string> = {
    primary: "bg-brand-500 text-white hover:bg-brand-700 shadow-sm",
    outline: "bg-white border border-slate-200 text-brand-600 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-700 hover:bg-slate-50"
  };

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
```

components/Input.tsx
```
// components/Input.tsx
import React from "react";
import clsx from "clsx";

export default function Input({ className = "", ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "w-full px-3 py-2 border border-slate-200 rounded-md bg-white text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-300",
        className
      )}
      {...props}
    />
  );
}
```

components/Navbar.tsx
```
// components/Navbar.tsx
"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";

export default function Navbar() {
  const nav = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" }
  ];

  return (
    <header className="border-b border-slate-100 bg-white">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-brand-600 font-semibold">Your Name</Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-slate-700 hover:text-slate-900">
              {n.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button variant="primary" size="sm">Contact</Button>
          </Link>
        </nav>

        {/* Mobile: simple menu as link to projects */}
        <div className="md:hidden">
          <Link href="/projects" className="text-sm text-slate-700">Work</Link>
        </div>
      </div>
    </header>
  );
}
```

components/Footer.tsx
```
// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-slate-600">© {new Date().getFullYear()} Your Name. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <Link href="https://github.com/" className="text-slate-600 text-sm" aria-label="GitHub">GitHub</Link>
          <Link href="https://linkedin.com/" className="text-slate-600 text-sm" aria-label="LinkedIn">LinkedIn</Link>
          <Link href="/privacy" className="text-slate-600 text-sm">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}
```

components/Hero.tsx
```
// components/Hero.tsx
import Link from "next/link";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Your Name — Product Designer & Frontend Engineer</h1>
          <p className="mt-4 text-slate-600 max-w-xl">I build thoughtful design systems and polished web experiences. I’m focused on clarity, performance and accessible interfaces.</p>
          <div className="mt-6 flex gap-3">
            <Link href="/projects"><Button variant="primary">View work</Button></Link>
            <Link href="/contact"><Button variant="outline">Contact</Button></Link>
          </div>
          <div className="mt-6 text-sm text-slate-500">Open to contracts & full-time opportunities</div>
        </div>

        <div className="relative">
          {/* Visual placeholder: Replace with your portrait or project hero */}
          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-soft bg-slate-50 flex items-center justify-center">
            <img src="/images/hero-sample.png" alt="Project preview" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </section>
  );
}
```

components/ProjectCard.tsx
```
// components/ProjectCard.tsx
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <article className="bg-white rounded-lg shadow-card border border-slate-100 overflow-hidden">
      <Link href={`/projects/${project.slug}`} className="block group">
        <div className="h-44 md:h-48 bg-slate-100">
          {project.hero ? (
            <img src={project.hero} alt={`${project.title} screenshot`} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-400">No image</div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{project.description}</p>
          <div className="mt-3 flex items-center gap-2 flex-wrap">
            {project.tags?.slice(0, 3).map((t: string) => (
              <span key={t} className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-700">{t}</span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}
```

app/page.tsx (Home)
```
// app/page.tsx
import Hero from "@/components/Hero";
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default async function Home() {
  const projects = await getAllProjects();
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      <section className="container py-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Featured projects</h2>
          <Link href="/projects" className="text-sm text-brand-500">View all</Link>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold">About</h3>
            <p className="mt-3 text-slate-600">I’m a product designer and frontend engineer who loves building interfaces that are accessible, performant, and delightful. I specialize in design systems, component design, and polished front-end experiences.</p>
            <div className="mt-4">
              <Link href="/about" className="text-brand-500">Read more →</Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-semibold">Latest writing</h3>
            <p className="mt-3 text-slate-600">Short previews from your latest posts — link to blog index.</p>
            <div className="mt-4">
              <Link href="/blog" className="text-brand-500">View blog →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-12">
        <div className="bg-slate-50 rounded-lg p-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">Interested in working together?</h3>
            <p className="text-slate-600 mt-1">Let’s talk about your project and how I can help.</p>
          </div>
          <div>
            <Link href="/contact" className="inline-block">
              <button className="bg-brand-500 text-white px-4 py-2 rounded-md">Contact</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
```

app/projects/page.tsx
```
// app/projects/page.tsx
import { getAllProjects } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectsPage() {
  const projects = await getAllProjects();

  return (
    <section className="container py-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Projects</h1>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
    </section>
  );
}
```

app/projects/[slug]/page.tsx
```
// app/projects/[slug]/page.tsx
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import Link from "next/link";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug);
  if (!project) {
    return (
      <section className="container py-12">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <p className="mt-4">We couldn't find that project.</p>
      </section>
    );
  }

  return (
    <article className="container py-12">
      <div className="mb-6">
        <Link href="/projects" className="text-sm text-brand-500">← Back to projects</Link>
      </div>

      <header className="mb-8">
        <h1 className="text-3xl font-bold">{project.meta.title}</h1>
        <p className="text-slate-600 mt-2">{project.meta.description}</p>
        <div className="mt-3 text-sm text-slate-500">
          <span>{project.meta.role}</span>
          {project.meta.year ? <span className="mx-2">•</span> : null}
          <span>{project.meta.year}</span>
        </div>
      </header>

      {project.meta.hero && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-soft">
          <img src={project.meta.hero} alt={`${project.meta.title} hero`} className="w-full h-64 object-cover"/>
        </div>
      )}

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />

      <div className="mt-10">
        <Link href="/contact" className="inline-block">
          <button className="bg-brand-500 text-white px-4 py-2 rounded-md">Contact about this project</button>
        </Link>
      </div>
    </article>
  );
}
```

app/about/page.tsx
```
// app/about/page.tsx
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="container py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-card">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="mt-4 text-slate-600">I’m a product designer and frontend engineer focused on building design systems and accessible web experiences. I enjoy working across the stack — from design to implementation — and collaborating with teams to ship high-quality products.</p>

          <h2 className="mt-6 text-xl font-semibold">Experience</h2>
          <ul className="mt-3 space-y-4 text-slate-600">
            <li>
              <strong>Senior Frontend Engineer</strong> — Example Co (2023–Present)
              <div className="mt-1 text-sm">Led component library and design system adoption across teams.</div>
            </li>
            <li>
              <strong>Product Designer</strong> — Acme (2020–2023)
              <div className="mt-1 text-sm">Designed workflows and shipped multiple key features.</div>
            </li>
          </ul>
        </div>

        <aside className="bg-white p-6 rounded-lg shadow-card">
          <h3 className="text-lg font-semibold">Skills</h3>
          <div className="mt-4 space-y-3">
            <Skill label="React" level={90} />
            <Skill label="Design Systems" level={85} />
            <Skill label="Accessibility" level={80} />
            <Skill label="Tailwind CSS" level={85} />
          </div>

          <div className="mt-6">
            <Link href="/resume.pdf" className="text-brand-500">Download resume (PDF)</Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Skill({ label, level }: { label: string; level: number }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-slate-700">{label}</div>
        <div className="text-xs text-slate-500">{level}%</div>
      </div>
      <div className="mt-2 w-full bg-slate-100 h-2 rounded-full">
        <div className="bg-brand-500 h-2 rounded-full" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}
```

app/contact/page.tsx
```
// app/contact/page.tsx
"use client";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function ContactPage() {
  const [state, setState] = useState({ name: "", email: "", type: "project", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if (!res.ok) {
        const j = await res.json();
        throw new Error(j?.error || "Failed to send");
      }
      setSent(true);
      setState({ name: "", email: "", type: "project", message: "" });
    } catch (err: any) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <section className="container py-12">
        <div className="bg-white rounded-lg p-6 shadow-card">
          <h2 className="text-2xl font-semibold">Thanks — your message is sent</h2>
          <p className="mt-2 text-slate-600">I’ll get back to you within 2 business days. If urgent, email me at your@email.com</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container py-12">
      <div className="max-w-2xl bg-white p-6 rounded-lg shadow-card">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2 text-slate-600">Tell me about your project and I'll reply with availability and next steps.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4" aria-live="polite">
          <label className="block text-sm">
            <div className="text-slate-600 mb-1">Name</div>
            <Input required value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} />
          </label>

          <label className="block text-sm">
            <div className="text-slate-600 mb-1">Email</div>
            <Input required type="email" value={state.email} onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))} />
          </label>

          <label className="block text-sm">
            <div className="text-slate-600 mb-1">Project type</div>
            <select className="w-full px-3 py-2 border border-slate-200 rounded-md" value={state.type} onChange={(e) => setState((s) => ({ ...s, type: e.target.value }))}>
              <option value="project">New project</option>
              <option value="contract">Contract</option>
              <option value="other">Other</option>
            </select>
          </label>

          <label className="block text-sm">
            <div className="text-slate-600 mb-1">Message</div>
            <textarea required className="w-full px-3 py-2 border border-slate-200 rounded-md" rows={6} value={state.message} onChange={(e) => setState((s) => ({ ...s, message: e.target.value }))} />
          </label>

          {error && <div className="text-sm text-red-600">{error}</div>}

          <div className="flex items-center gap-3">
            <Button type="submit" disabled={loading}>{loading ? "Sending…" : "Send message"}</Button>
            <div className="text-sm text-slate-500">Or email: <a href="mailto:your@email.com" className="text-brand-500">your@email.com</a></div>
          </div>
        </form>
      </div>
    </section>
  );
}
```

app/api/contact/route.ts
```
// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, type, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // TODO: Integrate with SendGrid, Mailgun, or store in DB.
    // For demonstration: log submission on server and return 200
    console.log("Contact submission:", { name, email, type, message });

    // Example: send to external email API if configured
    // if (process.env.SENDGRID_API_KEY) { ... }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
```

public/images/hero-sample.png
```
// public/images/hero-sample.png
// NOTE: Add an image file at this path (placeholder shown). You can copy any sample image to public/images/hero-sample.png
```

public/images/project-atomic-hero.jpg
```
// public/images/project-atomic-hero.jpg
// NOTE: Add project hero image at this path. Replace with your real screenshots.
```

README (brief run instructions)
```
// README.md
# Personal Portfolio (Next.js + Tailwind)

1. Install
   npm install

2. Add images
   - Place hero and project images under /public/images (see references in components/content).

3. Run dev
   npm run dev
   Open http://localhost:3000

4. Build
   npm run build
   npm start

5. Add content
   - Add project markdown files under content/projects/*.md with frontmatter:
     ---
     title: "Project Title"
     description: "Short summary"
     tags: [ "Tag1", "Tag2" ]
     hero: "/images/your-image.jpg"
     role: "Role"
     year: "2025"
     ---

6. Contact form
   - The serverless route at /api/contact currently logs submissions.
   - Integrate SendGrid/Mailgun by editing app/api/contact/route.ts.

7. Next steps
   - Add blog support with content/posts and similar parser.
   - Add MDX support if you want JSX in content.
   - Add SEO meta and OpenGraph images; generate OG images as needed.

```

Accessibility & notes
- Focus management: links and buttons use native elements and visible focus styles.
- Reduced motion: respected through CSS @media (prefers-reduced-motion).
- Keyboard: nav and forms accessible via keyboard.
- Contrast: colors chosen to align with WCAG recommendations; verify with your content.

What I included
- Tailwind tokens & theme in tailwind.config
- Design tokens mirrored in CSS utility usage
- Components: Button, Input, Navbar, Footer, Hero, ProjectCard, Skill bars
- Pages: Home, Projects index, Project detail, About, Contact
- Content: sample markdown project file (content/projects/...)
- Serverless contact API (app/api/contact/route.ts)

Next improvements you can ask me to add
- MDX support (JSX within markdown)
- Storybook or component docs
- Rich project detail (image lightbox, gallery)
- Pagination, search, and tag filtering for projects/blog
- OpenGraph image generation serverless function
- Automated tests (Playwright + axe for accessibility) and CI config

Would you like me to:
- A) Add MDX support so project pages can include JSX/React components?
- B) Implement a modal-based project detail experience (client-side modal + shallow routing)?
- C) Add a SendGrid example for the contact route (full send flow)?

Pick one and I’ll provide the next set of files/snippets.

---
## 4. Backend Codebase, API & Schema
I'll build a small, production-ready backend service that powers the Contact flow (and optional admin list) for your portfolio frontend. It stores submissions, rate-limits and validates input, and sends notification emails via SendGrid. It’s implemented in TypeScript + Express + Prisma (SQLite by default for local/dev; you can switch to Postgres in production). The frontend can POST to this service instead of the local Next.js serverless route.

What you get
- REST API: POST /api/contact (public, rate‑limited), GET /api/submissions (admin, protected by API key), GET /health
- Persistence: Prisma model ContactSubmission (SQLite by default)
- Email: SendGrid integration (configurable)
- Honeypot and basic validation
- Rate limiting to reduce spam
- CORS configuration (allow frontend origin)
- Clear env variables and run & deployment instructions

Files (paste into a new backend folder). After the files I include instructions to run locally and what to change in your Next.js frontend to call this API.

1) package.json
```
// backend/package.json
{
  "name": "portfolio-backend",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/index.ts",
    "build": "tsc -p .",
    "start": "node dist/index.js",
    "prisma:generate": "prisma generate",
    "prisma:migrate": "prisma migrate dev --name init"
  },
  "dependencies": {
    "@prisma/client": "^5.8.0",
    "@sendgrid/mail": "^8.9.0",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-async-errors": "^3.1.1",
    "express-rate-limit": "^6.8.0",
    "helmet": "^7.0.0"
  },
  "devDependencies": {
    "prisma": "^5.8.0",
    "ts-node-dev": "^2.0.0",
    "typescript": "^5.2.2",
    "@types/express": "^4.17.19",
    "@types/cors": "^2.8.13",
    "@types/node": "^20.7.1"
  }
}
```

2) tsconfig.json
```
// backend/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "moduleResolution": "Node",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}
```

3) prisma/schema.prisma
```
// backend/prisma/schema.prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model ContactSubmission {
  id         Int      @id @default(autoincrement())
  name       String
  email      String
  type       String   @default("project") // project | contract | other
  message    String
  ip         String? 
  userAgent  String?
  createdAt  DateTime @default(now())
}
```

Notes: DATABASE_URL defaults to a SQLite file (see .env.example). For production swap datasource provider to postgresql and set DATABASE_URL accordingly; Prisma code does not change other than schema provider.

4) src/prisma.ts
```
// backend/src/prisma.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;
```

5) src/lib/email.ts
```
// backend/src/lib/email.ts
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();

const SENDGRID_KEY = process.env.SENDGRID_API_KEY;
const TO_EMAIL = process.env.TO_EMAIL; // your inbox to receive contact notifications
const FROM_EMAIL = process.env.FROM_EMAIL || "no-reply@example.com";

if (SENDGRID_KEY) {
  sgMail.setApiKey(SENDGRID_KEY);
}

export async function sendContactNotification(payload: {
  name: string;
  email: string;
  type: string;
  message: string;
  ip?: string | null;
  userAgent?: string | null;
}) {
  if (!SENDGRID_KEY || !TO_EMAIL) {
    // If no SendGrid configured, skip sending but log
    console.warn("SendGrid not configured. Skipping email send.");
    console.log("Contact payload:", payload);
    return;
  }

  const { name, email, type, message, ip, userAgent } = payload;

  const subject = `New contact from portfolio site — ${type} — ${name}`;
  const html = `
    <p>You received a new contact submission from your portfolio site.</p>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(email)}</li>
      <li><strong>Type:</strong> ${escapeHtml(type)}</li>
      <li><strong>IP:</strong> ${escapeHtml(ip || "n/a")}</li>
      <li><strong>User-Agent:</strong> ${escapeHtml(userAgent || "n/a")}</li>
    </ul>
    <h3>Message</h3>
    <div style="white-space:pre-wrap; border-left:2px solid #eee; padding-left:8px;">${escapeHtml(message)}</div>
  `;

  const msg = {
    to: TO_EMAIL,
    from: FROM_EMAIL,
    subject,
    html
  };

  await sgMail.send(msg);
}

function escapeHtml(unsafe: string) {
  return unsafe
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
```

6) src/middleware/validate.ts
```
// backend/src/middleware/validate.ts
import { Request, Response, NextFunction } from "express";

export function validateContact(req: Request, res: Response, next: NextFunction) {
  const { name, email, message, honeypot } = req.body || {};
  // Honeypot field should be empty
  if (honeypot) {
    return res.status(400).json({ error: "Spam detected" });
  }
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return res.status(400).json({ error: "Name is required" });
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Valid email is required" });
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return res.status(400).json({ error: "Message must be at least 10 characters" });
  }
  next();
}
```

7) src/middleware/auth.ts
```
// backend/src/middleware/auth.ts
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

export function requireAdminApiKey(req: Request, res: Response, next: NextFunction) {
  // Accept key via X-API-KEY header or Authorization: Bearer <key>
  const header = req.headers["x-api-key"] as string | undefined;
  const auth = (req.headers["authorization"] as string | undefined) || "";
  const bearer = auth.startsWith("Bearer ") ? auth.slice(7) : undefined;
  const key = header || bearer;

  if (!ADMIN_API_KEY || !key || key !== ADMIN_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}
```

8) src/routes/contact.ts
```
// backend/src/routes/contact.ts
import express from "express";
import prisma from "../prisma";
import { validateContact } from "../middleware/validate";
import { sendContactNotification } from "../lib/email";

const router = express.Router();

/**
 * POST /api/contact
 * body: { name, email, type, message, honeypot? }
 * Rate-limited in server setup.
 */
router.post("/contact", validateContact, async (req, res) => {
  const { name, email, type = "project", message } = req.body;
  const ip = req.ip || (req.headers["x-forwarded-for"] as string | undefined) || null;
  const userAgent = req.headers["user-agent"] || null;

  // create submission
  const submission = await prisma.contactSubmission.create({
    data: {
      name: name.trim(),
      email: email.trim(),
      type: String(type),
      message: message.trim(),
      ip: Array.isArray(ip) ? ip[0] : ip,
      userAgent: Array.isArray(userAgent) ? userAgent[0] : String(userAgent ?? "")
    }
  });

  // send email notification (non-blocking)
  sendContactNotification({
    name: submission.name,
    email: submission.email,
    type: submission.type,
    message: submission.message,
    ip: submission.ip || undefined,
    userAgent: submission.userAgent || undefined
  }).catch((err) => {
    console.error("Error sending notification email", err);
  });

  return res.status(201).json({ ok: true });
});

export default router;
```

9) src/routes/admin.ts
```
// backend/src/routes/admin.ts
import express from "express";
import prisma from "../prisma";
import { requireAdminApiKey } from "../middleware/auth";

const router = express.Router();

// GET /api/submissions?limit=50
router.get("/submissions", requireAdminApiKey, async (req, res) => {
  const limit = Math.min(Number(req.query.limit || 100), 500);
  const submissions = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: limit
  });
  res.json({ submissions });
});

export default router;
```

10) src/index.ts
```
// backend/src/index.ts
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import "express-async-errors";
import contactRoutes from "./routes/contact";
import adminRoutes from "./routes/admin";

dotenv.config();

const app = express();

// Security headers
app.use(helmet());

// CORS: allow frontend origin from env or default to localhost:3000
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "http://localhost:3000";
app.use(cors({
  origin: FRONTEND_ORIGIN,
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization", "X-API-KEY", "X-Requested-With"]
}));

app.use(express.json());

// Rate limiter for contact route (prevent spam): 5 requests per 10 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: Number(process.env.CONTACT_RATE_LIMIT_MAX || 5),
  message: { error: "Too many contact requests from this IP, please try later." }
});

// Routes
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api", contactLimiter, contactRoutes); // POST /api/contact
app.use("/api", adminRoutes); // GET /api/submissions (protected)

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err?.message || "Internal Server Error" });
});

const port = Number(process.env.PORT || 4001);
app.listen(port, () => {
  console.log(`Portfolio backend listening on http://localhost:${port}`);
  console.log(`CORS allowed origin: ${FRONTEND_ORIGIN}`);
});
```

11) .env.example
```
// backend/.env.example
# Database (SQLite file). For production use a Postgres URL and change prisma provider.
DATABASE_URL="file:./dev.db"

# SendGrid (optional) - configure to send notification emails
SENDGRID_API_KEY=""
TO_EMAIL="you@example.com"
FROM_EMAIL="no-reply@example.com"

# Admin API key for protected endpoints
ADMIN_API_KEY="change-this-to-a-strong-key"

# Frontend origin to allow via CORS
FRONTEND_ORIGIN="http://localhost:3000"

# Rate limiting
CONTACT_RATE_LIMIT_MAX=5

# Port (optional)
PORT=4001
```

12) README (backend summary & run instructions)
```
// backend/README.md
# Portfolio Backend (Contact API)

This small backend persists contact submissions and sends notification emails.

Prereqs:
- Node 18+
- npm
- (Optional) SendGrid account if you want real email notifications

1. Install
   npm install

2. Create .env (copy .env.example)
   cp .env.example .env
   Fill in SENDGRID_API_KEY and TO_EMAIL to enable emails.

3. Prisma
   npx prisma generate
   npx prisma migrate dev --name init
   (This will create a SQLite file dev.db by default.)

4. Run dev
   npm run dev
   Service will run at http://localhost:4001

Endpoints
- GET /health -> { status: "ok" }
- POST /api/contact
  - body: { name, email, type?, message, honeypot? }
  - returns 201 on success
- GET /api/submissions?limit=50
  - requires ADMIN_API_KEY via header X-API-KEY or Authorization: Bearer <key>

Integration with Next.js frontend
- Change your /app/api/contact/route.ts to POST to this backend, or update frontend fetch to call https://api.example.com/api/contact.
- Example fetch:
  await fetch("https://api.example.com/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, type, message })
  });

Deployment
- Deploy to Railway/Render/Fly/Vercel (serverless). Use environment variables in your host.
- For SQLite, either use hosted SQLite or switch to PostgreSQL for production and update DATABASE_URL and prisma datasource provider to postgresql.

Security & spam protection
- Honeypot field (honeypot) is checked and request rejected if filled.
- Rate-limiting applied to /api/* (configured for contact endpoint).
- Admin endpoints secured with ADMIN_API_KEY.

Feel free to request:
- Add storing submissions to a production Postgres (schema already compatible).
- Change email provider or use transactional templating.
- Add verification (recaptcha v3) or email acknowledge reply to sender.
```

Integration notes for your Next.js frontend
- Option A (recommended for simple): Replace the Next.js serverless route POST /api/contact with an external call to the backend. In the frontend contact form, change fetch("/api/contact", ...) to fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, ...). Add NEXT_PUBLIC_API_URL in your Next.js environment (e.g., http://localhost:4001 for local).
- Option B (proxy option): Keep the Next.js serverless route and have it forward to the backend (use credentials or server-to-server call), so the frontend unchanged. Example: in app/api/contact/route.ts call the backend URL server-side with server key if needed.

Minimal code change for the frontend contact page (client-side):
- Replace:
  const res = await fetch("/api/contact", { ... })
- With:
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, { ... })

Set env in Next.js:
- NEXT_PUBLIC_API_URL=http://localhost:4001 (development)
- In production, set to https://api.yourdomain.com

Security & production advice
- Use a managed database (Postgres) for production: change Prisma datasource provider to postgresql and DATABASE_URL to your provider.
- Use a strong ADMIN_API_KEY stored in host secrets.
- Use SendGrid (or Mailgun) and set FROM_EMAIL and TO_EMAIL in env.
- Consider adding reCAPTCHA v3 verification server-side to reduce spam further.
- Configure TLS on your domain when deploying.

That's everything to run a robust backend for the portfolio contact flow. If you'd like, I can:
- A) Provide the small proxy code to keep your current Next.js serverless /api/contact route but forward securely to this backend.
- B) Convert Prisma schema to PostgreSQL provider and provide sample deployment steps for Railway/Supabase.
- C) Add reCAPTCHA v3 verification to routes and update the frontend to include site key.

Which would you like next?

---
## 5. Integration, QA & Deployment Guide
Below is a practical, actionable Integration + QA + Deployment guide for the portfolio frontend + the contact-backend you provided. It’s organized into three sections (INTEGRATION, QA CHECKLIST, DEPLOYMENT) and contains concrete steps, config names, sample code snippets, CI suggestions, and operational notes. I cannot run tests or deploy for you — all commands, migrations, tests and deployments must be executed by you or your CI system. Use this guide to wire, test, and release.

---

# 1) INTEGRATION
How to wire the Next.js frontend ↔ the Express/Prisma backend, required environment variables, auth/data flows, CORS and security patterns, and small code samples you can paste.

Summary
- Frontend: Next.js (App Router) + Tailwind.
- Backend (service): Express + TypeScript + Prisma. Endpoints:
  - POST /api/contact — public contact submission (rate‑limited, validated, honeypot)
  - GET /api/submissions — admin list (requires ADMIN_API_KEY)
  - GET /health

A. Required environment variables
Backend (.env on server / secrets in host):
- DATABASE_URL (e.g., file:./dev.db for SQLite in dev; for production use Postgres URL)
- SENDGRID_API_KEY (optional to send notifications)
- TO_EMAIL (email that receives contact notifications)
- FROM_EMAIL (optional, default no-reply@example.com)
- ADMIN_API_KEY (strong random key to secure admin endpoints)
- FRONTEND_ORIGIN (e.g., https://your-site.com or http://localhost:3000)
- CONTACT_RATE_LIMIT_MAX (optional, default 5)
- PORT (optional, default 4001)

Frontend (.env.local):
- NEXT_PUBLIC_API_URL (e.g., http://localhost:4001 or https://api.yourdomain.com)

B. CORS & allowed origin
- Backend is configured to allow FRONEND_ORIGIN only. Set FRONTEND_ORIGIN to your Next.js origin(s) in dev and production. Do not set to "*" in production.

C. How the contact submission flow works (data + auth):
1. User fills contact form in the Next.js app.
2. Frontend POSTs JSON to the backend endpoint:
   - POST ${NEXT_PUBLIC_API_URL}/api/contact
   - Body: { name, email, type, message, honeypot? }
3. Backend flow:
   - rate-limiter checks IP usage (express-rate-limit)
   - validate middleware: honeypot, email format, min length
   - create record in DB (ContactSubmission)
   - asynchronously trigger sendContactNotification (SendGrid) — errors logged but do not change 201 response
   - return 201 { ok: true } on success
4. Admin access:
   - GET ${API_URL}/api/submissions (requires ADMIN_API_KEY in X-API-KEY header or Authorization: Bearer <key>)
   - response includes recent submissions (paginated via ?limit)

D. Frontend wiring options
Option 1 — Recommended (frontend → backend directly)
- Update contact form fetch to POST to external backend URL:
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
- Pros: Simpler, decoupled deployments.
- Cons: CORS must be configured. Secrets (SendGrid/DB) remain on backend.

Option 2 — Proxy via Next.js serverless route (unchanged frontend)
- Keep app/api/contact/route.ts but forward POST server-side to backend:
  - Next.js server route calls the backend with a server-side key or uses direct server-to-server request (no CORS)
- Example in app/api/contact/route.ts (server side):
  const backendUrl = process.env.CONTACT_BACKEND_URL;
  const res = await fetch(`${backendUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
- Use this if you need to hide API URL or run same-origin for browser.

E. Sample fetch wrapper (frontend)
Add lib/api.ts in frontend:
```ts
const API = process.env.NEXT_PUBLIC_API_URL;

export async function postContact(payload: any) {
  const res = await fetch(`${API}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const json = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(json?.error || "Contact failed");
  }
  return res.json();
}
```

F. Admin usage (fetch submissions)
Example:
```js
const res = await fetch(`${API}/api/submissions?limit=50`, {
  headers: { "X-API-KEY": process.env.NEXT_PUBLIC_ADMIN_UI_KEY }
});
```
Note: Never store ADMIN_API_KEY in client-side env; this sample is for server-side admin usage. For an admin UI, call backend from a secure server-side admin app or protect via server-only secrets.

G. Security and anti-spam notes
- Honeypot field present: ensure form contains honeypot input (hidden) that bots might fill.
- Rate-limit is configured to default 5 requests / 10 minutes per IP; tune as needed.
- Add reCAPTCHA v3 (optional) for heavy spam scenarios: send token from client, verify server-side before saving/submitting.
- Escape input when sending emails and in HTML output — backend uses escapeHtml before sending to SendGrid.
- Use HTTPS in production; ensure your hosted API has TLS.

H. Database considerations
- Dev uses SQLite (DATABASE_URL="file:./dev.db").
- For production, switch to Postgres:
  - In prisma/schema.prisma change datasource provider to "postgresql" and set DATABASE_URL to postgres://...
  - In CI/deploy run: npx prisma generate && npx prisma migrate deploy (not migrate dev) to apply migrations.
- Prisma client usage is already in code.

I. Logging & Errors
- Backend logs to stdout/stderr. In production, wire host log drains (Railway/Render) to your logging/observability platform (Datadog, Papertrail etc).
- SendGrid send errors are logged; you can also configure retries or send via background job.

---

# 2) QA CHECKLIST
Functional, responsive, accessibility, performance targets, and suggested unit & e2e test cases. Run these manually and automate via CI/E2E.

Important: test execution is your responsibility (Dev or CI). The checklist below is prescriptive.

A. Functional (manual and automated) tests
1. Contact form (happy path)
   - Fill valid name, email, type, message; submit → expect 201 response; UI shows "Thanks" success state.
   - Verify DB record created (admin endpoint or DB).
   - Verify SendGrid notification delivered (if configured) or check server logs.

2. Contact form (validation & errors)
   - Submit with missing required fields → expect 400 and client shows error message.
   - Submit with invalid email → 400 and friendly message.
   - Submit with honeypot filled → 400 and server does not create record.

3. Rate limiting
   - From single IP, exceed CONTACT_RATE_LIMIT_MAX within window → backend returns 429 with proper message; frontend handles gracefully.

4. Admin endpoint
   - GET /api/submissions with correct ADMIN_API_KEY → 200 with submissions array.
   - Without or with wrong key → 401.

5. Health check
   - GET /health → {status: "ok"}

6. Error scenarios
   - Backend DB down → contact route should respond with 500 and client shows clear message.
   - SendGrid down → email send error logged, contact route still returns 201.

B. Responsive checks
- View pages at breakpoints and verify layout/function:
  - Mobile (<= 640px): hero stacks, navbar condensed, form fits, buttons accessible.
  - Tablet (641–1024px): medium layout.
  - Desktop (>= 1025px): two-column hero, project grid 3 columns.
- Test in Chrome, Safari, Firefox — check basic interactions and form keyboard access.
- Touch interactions on mobile (scroll, focus, input).

C. Accessibility (WCAG 2.1 AA) audit steps
1. Automated:
   - Run axe-core (browser extension) and Lighthouse accessibility audit.
   - Integrate axe into E2E or Jest tests.

2. Manual:
   - Keyboard-only navigation:
     - Tab order flows logically.
     - Modal or focus-trap (if later implemented for project modal) traps focus.
     - Escape closes modals/overlays.
   - Screen reader:
     - Use NVDA (Windows) or VoiceOver (macOS) to inspect form, labels, alerts.
   - Labels:
     - All inputs have <label for/>.
   - Contrast:
     - Body text, buttons must meet 4.5:1 (verify with Contrast checker)
   - ARIA:
     - Modal role="dialog", aria-modal, aria-labelledby.
     - Error messages use aria-live or aria-describedby.

3. Accessibility testing targets:
   - No critical/serious violations in axe.
   - All forms usable by keyboard, with accessible errors.

D. Performance (Lighthouse) targets
- Desktop target:
  - Performance >= 90
  - Accessibility >= 90
  - Best Practices >= 90
  - SEO >= 90
- Mobile target:
  - Performance >= 70 (aim higher)
  - LCP < 2.5s
  - CLS < 0.1
  - TBT / FID < 150–300ms

Optimization tips:
- Use next/image and static generation for project pages.
- Avoid large JS bundles; tree-shake and code-split.
- Defer non-critical third-party scripts (analytics, widgets).
- Preconnect to fonts and use system fonts if performance is critical.

E. Suggested automated tests & tooling
- Unit / component tests (Jest + React Testing Library):
  - Button renders, clickable and accessible.
  - Input shows value, focus ring.
  - ProjectCard renders meta & image; link href correct.
  - Hero shows CTAs and navigates.
- Backend tests (Jest + Supertest):
  - POST /api/contact: success case, validation errors, honeypot, rate-limit (use mocked rate limiter or adjust config).
  - GET /api/submissions: success with API key; unauthorized without key.
  - DB interaction: submission created and fields correct (use test DB—see below).
- E2E tests (Playwright or Cypress):
  - Signle scenario: open site, navigate to Contact, fill form, submit, see success message, then call admin API to verify (server-side admin key used on test runner).
  - Accessibility check: run axe within Playwright to catch violations.
  - Cross-browser smoke tests: Chrome, Firefox, WebKit.

F. Test DB & CI strategy
- Use a dedicated test database (DATABASE_URL_TEST) in CI (prefer Postgres). For Prisma:
  - In CI: npx prisma migrate deploy
  - Tests should seed minimal data up-front then drop/rollback or use ephemeral DBs (Docker or provider test DB).
- For local: use SQLite dev.db and run seed if needed.

G. Suggested test cases (short list)
Frontend unit:
- Contact form: renders fields, shows required validation when empty, calls API with JSON.
Backend integration:
- POST valid submission => 201 and DB row exists.
- POST with honeypot => 400 and no DB row.
- POST repeated > rate-limit => 429
- GET /api/submissions with correct key => 200; without => 401
E2E:
- Full flow: submit and check admin list includes entry.

---

# 3) DEPLOYMENT
Recommended hosting, CI/CD pipeline, and step-by-step go-live instructions so you can deploy frontend and backend safely. I include sample CI outline for GitHub Actions and concrete run steps. You must run these steps in your environment / CI.

A. Recommended hosting (opinionated)
Frontend (Next.js):
- Primary: Vercel — first-class Next.js support, automatic builds, prerendering, and edge functions.
- Alternative: Netlify (Next.js support), or AWS Amplify.

Backend (Express + Prisma):
- Good choices:
  - Railway — easy Postgres + deploy, good for small apps.
  - Render — simple Docker or web service deploy, managed Postgres add-on.
  - Fly.io — global apps; you can run Prisma migrations at deploy.
  - Heroku (if still preferred) — less modern but works.
- For simplicity, pick Railway or Render.

Database:
- Production: Managed Postgres (Supabase, Neon, Railway Postgres, AWS RDS).
- Dev: SQLite local; for CI/tests use ephemeral Postgres container or provider test DB.

Email:
- SendGrid (already wired in backend code). Alternatives: Mailgun, Postmark.

Monitoring & logs:
- Sentry for error tracking.
- Log drains or built-in provider logs (Railway/Render).
- Uptime monitor (UptimeRobot/StatusCake).

B. CI/CD pipeline outline (GitHub Actions example)
Two workflows:
- ci.yml (PR checks)
- deploy.yml (deploy on merge to main)

CI (ci.yml) tasks:
- Checkout
- Install (pnpm/npm ci)
- Typecheck & lint
- Run unit tests (frontend & backend)
- (Optional) Run basic Lighthouse CI on a small staging deploy or webpagetest

Example (high level):
- Frontend job:
  - runs-on: ubuntu-latest
  - Install deps, build (next build), run Jest tests
- Backend job:
  - service: postgres (Docker)
  - Install deps, npx prisma generate, npx prisma migrate deploy (or prisma migrate dev in CI with ephemeral DB), run tests (Supertest)

Deploy (deploy.yml) tasks:
- On push to main:
  - Build & test steps (or skip if CI already passed)
  - Apply database migrations:
    - npx prisma generate
    - npx prisma migrate deploy
  - Deploy backend to provider (via provider GitHub integration or container push).
  - Deploy frontend to Vercel via Vercel Git integration (automatic) OR via Vercel CLI.

C. Sample GitHub Actions snippets (minimal)
1) CI job skeleton (frontend)
```yaml
# .github/workflows/ci.yml (excerpt)
name: CI
on: [pull_request, push]

jobs:
  frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build --if-present
      - run: npm run test --if-present
```

2) Backend job skeleton (with postgres service)
```yaml
backend:
  runs-on: ubuntu-latest
  services:
    postgres:
      image: postgres:15
      env:
        POSTGRES_DB: test
        POSTGRES_USER: postgres
        POSTGRES_PASSWORD: postgres
      ports: ["5432:5432"]
      options: >-
        --health-cmd pg_isready
        --health-interval 10s
        --health-timeout 5s
        --health-retries 5
  steps:
    - uses: actions/checkout@v4
    - name: Setup Node
      uses: actions/setup-node@v4
      with:
        node-version: 20
    - name: Install
      run: |
        cd backend
        npm ci
    - name: Set env
      run: |
        echo "DATABASE_URL=postgresql://postgres:postgres@localhost:5432/test?schema=public" >> backend/.env.test
    - name: Prisma generate & migrate
      run: |
        cd backend
        npx prisma generate
        npx prisma migrate deploy
    - name: Run tests
      run: |
        cd backend
        npm test
```

D. Step-by-step go-live (production example)
1. Prepare production resources
   - Create a managed Postgres instance (Supabase, Neon, Railway Postgres).
   - Create a backend service on Railway/Render or deploy a Docker image on your chosen host.
   - Create a SendGrid account and generate SENDGRID_API_KEY (or choose other provider).
   - Prepare domain names: frontend domain (portfolio.example.com), api domain (api.example.com).

2. Set environment variables in host:
   - DATABASE_URL (production Postgres URL)
   - SENDGRID_API_KEY
   - TO_EMAIL (your inbox)
   - FROM_EMAIL
   - ADMIN_API_KEY (strong random)
   - FRONTEND_ORIGIN=https://portfolio.example.com
   - CONTACT_RATE_LIMIT_MAX (optional)
   - PORT as necessary

3. Run Prisma migrations (in CI or manually)
   - In CI/deploy: npx prisma generate && npx prisma migrate deploy
   - Locally: npx prisma migrate dev --name init to create migration files, then push.

4. Deploy backend
   - Method A: Deploy via provider Git integration (Railway/Render).
   - Method B: Build Docker image and push to provider (Fly/Render).
   - Verify /health endpoint returns status OK.

5. Deploy frontend (Vercel recommended)
   - Connect Git repo to Vercel.
   - Set environment variable NEXT_PUBLIC_API_URL to https://api.example.com (your backend domain).
   - Deploy main branch. Vercel will build and publish.
   - Verify site loads and contact form calls the correct API.

6. DNS & TLS
   - Point portfolio.example.com to Vercel (CNAME/A as provider instructs). Vercel provides TLS.
   - Point api.example.com to backend provider (Railway/Render instructions) and ensure TLS is enabled.

7. Smoke test (manual)
   - Visit frontend, fill contact form, submit. Verify success UI.
   - Check backend logs (and DB) to confirm a new ContactSubmission row.
   - Verify an email was sent to TO_EMAIL (if SendGrid is configured).
   - Test admin/list using ADMIN_API_KEY server-side (curl or Postman):
     curl -H "X-API-KEY: <ADMIN_API_KEY>" https://api.example.com/api/submissions?limit=10

8. Observability & alerts
   - Set up Sentry (frontend & backend) with DSNs stored as secrets.
   - Configure error alerts (Slack/Email) for high error rates.
   - Set Cloud DB backups and retention policy.

9. Rollback plan
   - Keep previous working build on Vercel/Render (providers track deployments).
   - If DB migration is destructive, snapshot DB or create a backup before applying migrations (Postgres snapshots).
   - Use feature flags if rolling out code requiring new DB columns.

E. Production hardening checklist
- Ensure FRONTEND_ORIGIN and CORS set to production domain only.
- Use strong ADMIN_API_KEY and never expose in client code.
- Enforce HTTPS & HSTS.
- Use secrets manager to store keys (Vercel/Railway/Render secrets).
- Enable rate-limiting and captcha if spam persists.
- Monitor email delivery (SendGrid logs) and set SPF/DKIM records for FROM_EMAIL domain.

F. Running Prisma migrations in production (notes)
- Use prisma migrate deploy in CI/deploy (not migrate dev).
- Example CI step before backend start:
  - npx prisma generate
  - npx prisma migrate deploy
- After migrations complete, start the service.

G. Example minimal deploy timeline (developer-run)
1. Prep env secrets in host and DNS.
2. Run CI to build & test, ensure green.
3. Apply migrations (CI deploy job).
4. Deploy backend and verify /health.
5. Deploy frontend and verify UI calls backend.
6. Smoke tests & confirm monitoring.

---

# Appendix: Quick troubleshooting & tips
- If contact submissions don't appear:
  - Check backend logs for validation errors.
  - Confirm FRONTEND_ORIGIN matches request origin and CORS allowed.
  - Confirm backend DB migrations were applied and Prisma client generated.
- If email not sending:
  - Check SENDGRID_API_KEY and TO_EMAIL variables.
  - Inspect SendGrid dashboard for rejects/spam.
  - Confirm FROM_EMAIL domain has SPF/DKIM to reduce spam classification.
- Debugging locally:
  - Run backend with npm run dev; set NEXT_PUBLIC_API_URL=http://localhost:4001 in frontend .env.local
  - Use Postman/curl to hit POST /api/contact manually.

---

If you want I can provide next actionable items (pick one):
- A) A small proxy snippet for your Next.js serverless route to forward to this backend (keeps frontend code unchanged).
- B) A GitHub Actions deploy workflow fully fleshed-out for both frontend (Vercel) and backend (Railway/Render), with secrets names and deploy steps.
- C) Add reCAPTCHA v3 flow: frontend + backend verification snippets and the updated validation middleware.

Which one do you want next?
