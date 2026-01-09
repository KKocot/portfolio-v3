# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
npm run dev      # Start Astro dev server with hot reload
npm run build    # Build for production (outputs to /dist)
npm run preview  # Preview production build locally
```

## Architecture Overview

This is a portfolio website built with **Astro 5** and **Tailwind CSS 4**, using static site generation (SSG).

### Key Patterns

**Internationalization (i18n):**
- Two languages: English (`/`) and Polish (`/pl`)
- Translations defined in `src/i18n/translations.ts` with typed `Translations` interface
- All components receive translations via `t: Translations` prop
- Language switching via `src/components/LanguageSwitch.astro`

**Component Structure:**
- Astro components are server-rendered with no client hydration
- Interactive features use vanilla JavaScript in `src/layouts/Layout.astro`
- Components: `Hero`, `About`, `Skills`, `Projects`, `Contact`, `Navbar`, `Footer`

**Styling:**
- Tailwind CSS 4 with Vite plugin (`@tailwindcss/vite`)
- Custom utilities and theme variables in `src/styles/global.css`
- Dark theme with orange accent (`#ff8833`)
- Component classes: `.btn-primary`, `.skill-card`, `.project-card`, etc.

**Contact Form:**
- Service in `src/services/contact.ts` handles form submission
- Uses environment variable `PUBLIC_CONTACT_API_URL` for API endpoint
- Includes client-side validation (name, email format, message)
- Toast notifications for success/error states

### TypeScript

Uses strict Astro TypeScript config (`astro/tsconfigs/strict`).
