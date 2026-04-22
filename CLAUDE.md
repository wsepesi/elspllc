# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

**This project uses PNPM exclusively.** Never use `yarn` or `npm`.

## Commands

- `pnpm dev` - Start development server on http://localhost:3000
- `pnpm build` - Create production build
- `pnpm lint` - Run ESLint (flat config, `eslint.config.mjs`)
- `pnpm type-check` - Run TypeScript type checking (`tsc --noEmit`)

No test framework is configured.

## Architecture

Static marketing site for Environmental Law and Science, PLLC. Built with Next.js 16 App Router, React 19, TypeScript 6, and Tailwind CSS 4.

### Key Architectural Decisions

**Server/Client Split**: `app/layout.tsx` is a Server Component that loads fonts via `next/font/google` (Libre Franklin, Playfair Display, Crimson Pro, EB Garamond as CSS variables). It wraps children in `app/ClientLayout.tsx`, a `'use client'` component that provides Vercel Analytics.

**All pages are SSG** (static site generation). No API routes, no server-side data fetching.

**Styling**: Tailwind CSS 4 with CSS-native configuration (`@theme` in `global.css`) + shadcn/ui components. Brand colors, font sizes, breakpoints, and animations are defined in `src/configs/global.css` via `@theme` directives.

**Path alias**: `@/*` maps to `./src/*` (configured in tsconfig.json).

### Project Layout

- `app/` — Next.js App Router pages. Each route has a `page.tsx` that directly composes components from `src/components/`. Shared page layout (background, navbar, footer) is in `src/components/PageLayout.tsx`.
- `src/components/` — All React components. `SimpleTemplate` provides a content container with title. Practice area content lives in dedicated components (PFAS, ContaminatedSites, Compliance, BusinessTransactions).
- `src/components/ui/` — shadcn/ui components (accordion, button, card).
- `src/components/icons/` — Custom SVG icon components (e.g., LinkedinIcon).
- `src/configs/` — Global CSS (`global.css`) with Tailwind @theme configuration.
- `src/styles/` — Custom CSS for complex animations (nav hover underlines, transitions).
- `src/utils/` — Utility functions. `cn()` for merging Tailwind classes (clsx + tailwind-merge).

### Config Files

- `next.config.ts` — Next.js configuration (TypeScript)
- `tsconfig.json` — TypeScript 6 with `es2022` target, `bundler` module resolution
- `eslint.config.mjs` — ESLint 9 flat config with `next/core-web-vitals` and `next/typescript`
- `postcss.config.mjs` — PostCSS with `@tailwindcss/postcss`

### TypeScript

Strict mode with aggressive checks: `noImplicitAny`, `noUnusedLocals`, `noUnusedParameters`, `exactOptionalPropertyTypes`.

### Deployment

Vercel with automatic deployments from `main` branch.
