# CLEANED_MARKER_2025_11_27

This file was cleaned and should only contain a short quick guide; see `docs/copilot-instructions-full.md` for full instructions.
# PetSitter Network NZ — Quick AI Agent Guide

Quick (single) guide — concise version

Commands: `npm install` | `npm run dev` | `npm run build` | `npm run lint`

Key files: `src/main.tsx`, `src/hooks/useApi.ts`, `src/components/ui/`

See `docs/copilot-instructions-full.md` for the full guide.
## PetSitter Network NZ — Quick AI Agent Guide

Commands: `npm install` | `npm run dev` (Vite on port 8080) | `npm run build` | `npm run lint`

Quick context
- Entry: `src/main.tsx` (router + QueryClient + ThemeProvider)
- Hooks: `src/hooks/useApi.ts` (useQuery / useMutation) with `getMock*()` fallbacks
- UI primitives: `src/components/ui/` (shadcn-generated — DO NOT edit)

Conventions
- Use `@/` path alias and `cn()` (`src/lib/utils.ts`) for class merging
- Use TanStack Query patterns; call `queryClient.invalidateQueries()` after mutations
- Add shadcn primitives with `npx shadcn@latest add <component>` and update `components.json`

Quick tasks
- Add DB table: update `supabase-schema.sql`, run in Supabase, then regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: create `useX` in `src/hooks/useApi.ts` with a `getMockX()` fallback
- Add component: `src/components/MyComponent.tsx` (interface Props + `cn()` + Tailwind)

DOs & DON'Ts
- DO: follow existing patterns: `cn()`, TanStack Query, `getMock*()` fallbacks
- DON'T: edit generated files under `src/components/ui/` manually or commit `.env`/secrets

For the full, detailed guide, see `docs/copilot-instructions-full.md` or `BACKEND_INTEGRATION.md`.
# PetSitter Network NZ - AI Agent Quick Guide

Commands: `npm install` | `npm run dev` (Vite on port 8080) | `npm run build` / `npm run preview` | `npm run lint`

Quick context:
- Entry: `src/main.tsx` — router + QueryClient + ThemeProvider
- API hooks: `src/hooks/useApi.ts` (TanStack `useQuery`/`useMutation`) with `getMock*()` fallbacks
- UI primitives: `src/components/ui/` (shadcn-generated — DO NOT edit manually)

Conventions:
- Use `@/` path alias and `cn()` (`src/lib/utils.ts`) for class merging
- Use TanStack Query patterns and invalidate relevant queries after mutations
- Add shadcn primitives via `npx shadcn@latest add <component>` and update `components.json`

Quick tasks:
- Add DB table: update `supabase-schema.sql`, run in Supabase, then regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: add `useX` in `src/hooks/useApi.ts` with a `getMockX()` fallback
- Add component: create `src/components/MyComponent.tsx` with `interface Props` + `cn()` + Tailwind

DOs & DON'Ts: DO use `cn()` and existing patterns; DO NOT edit `src/components/ui/*` manually or commit `.env`.

Full details are archived at `docs/copilot-instructions-full.md` and `BACKEND_INTEGRATION.md`.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context:
- Entry: `src/main.tsx` — router + QueryClient + ThemeProvider
- API hooks & mock fallbacks: `src/hooks/useApi.ts` (`getMock*()` for offline)
- UI primitives: `src/components/ui/` (shadcn-generated — DO NOT edit manually)

Conventions & patterns:
- Use `@/` path alias and `cn()` (`src/lib/utils.ts`) for class merging;
- Use TanStack Query (`useQuery`/`useMutation`) and call `queryClient.invalidateQueries()` on successful mutations;
- Add shadcn primitives with `npx shadcn@latest add <component>` and update `components.json`.

Common quick tasks:
- Add DB table: edit `supabase-schema.sql` → run in Supabase → regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: create `useX` in `src/hooks/useApi.ts` with a `getMockX()` fallback
- Add component: `src/components/MyComponent.tsx` with `interface Props` + `cn()` + Tailwind

DOs & DON'Ts:
- DO use existing patterns (`cn()`, TanStack Query, `getMock*()` fallbacks)
- DO NOT edit generated `src/components/ui/*` by hand; do not commit `.env` or secrets

Full details & longer guidelines are archived at `docs/copilot-instructions-full.md` (or see `BACKEND_INTEGRATION.md`).
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context:
- Entry: `src/main.tsx` (router + QueryClient + ThemeProvider)
- API hooks: `src/hooks/useApi.ts` with `getMock*()` fallbacks (TanStack's `useQuery`/`useMutation`)
- UI primitives: `src/components/ui/` (shadcn-generated — DO NOT edit manually)

Conventions:
- Use the `@/` path alias and `cn()` (`src/lib/utils.ts`) to merge Tailwind classes
- Use `useQuery` & `useMutation` patterns; call `queryClient.invalidateQueries()` on successful mutations
- Add shadcn primitives with: `npx shadcn@latest add <component>` and update `components.json`

Quick tasks:
- Add DB table: edit `supabase-schema.sql`, run on Supabase, regenerate types: `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: add a `useX` hook in `src/hooks/useApi.ts` and include a `getMockX()` fallback
- Add component: create `src/components/MyComponent.tsx` (interface Props + `cn()` + Tailwind)

DOs & DON'Ts:
- DO use the existing patterns (`cn()`, TanStack Query, `getMock*()`) and `src/components/ui/` via shadcn CLI
- DO NOT commit `.env` or secrets or edit generated `src/components/ui/*` files by hand

Full, detailed agent instructions are archived at `docs/copilot-instructions-full.md` and you can also check `BACKEND_INTEGRATION.md` for backend setup and integration steps.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context:
- Entry: `src/main.tsx` (router + QueryClient + ThemeProvider)
- Hooks: `src/hooks/useApi.ts` (TanStack `useQuery`/`useMutation`) with `getMock*()` fallbacks
- Backend: Supabase client `src/lib/supabase.ts` + schema `supabase-schema.sql`

Key files:
- `src/main.tsx`, `src/components/AppLayout.tsx`, `src/hooks/useApi.ts`, `src/components/ui/`

Conventions:
- Use `@/` path alias; use `cn()` in `src/lib/utils.ts` for class merging; Tailwind + CVA for components
- Add shadcn primitives with `npx shadcn@latest add <component>`; update `components.json`
- Hooks: follow `useQuery`/`useMutation` patterns and call `invalidateQueries` on success

Quick tasks:
- Add DB table: update `supabase-schema.sql` → run in Supabase → regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: create `useX` in `src/hooks/useApi.ts` and include a `getMockX()` fallback
- Add component: `src/components/MyComponent.tsx` (Interface Props + `cn()` + Tailwind)

DOs & DON'Ts:
- DO: follow existing patterns (`cn()`, TanStack Query, `getMock*()`)
- DO NOT: edit generated `src/components/ui/*` by hand; do not commit `.env` or secrets

For the full, detailed guide see `docs/copilot-instructions-full.md` or `BACKEND_INTEGRATION.md`.
# PetSitter Network NZ - AI Agent Quick Guide

Commands

Quick context

Conventions

Quick tasks
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`

Do / Don't

See `BACKEND_INTEGRATION.md` for setup and integration details.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Entrypoints:
- `src/main.tsx` (router + QueryClient + ThemeProvider)
- `src/components/AppLayout.tsx`, `src/hooks/useApi.ts`, `src/lib/supabase.ts`, `supabase-schema.sql`, `src/components/ui/`

Conventions:
- Use `@/` path alias; Tailwind + `cn()` (`src/lib/utils.ts`)
- shadcn primitives live in `src/components/ui/` (DO NOT edit by hand) and are added via `npx shadcn@latest add <component>`
- Hooks in `src/hooks/useApi.ts` should use `useQuery`/`useMutation` and provide `getMock*()` fallbacks for offline dev

Typical edits:
- Add DB table: update `supabase-schema.sql`, run it in Supabase, then regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: create `useX` in `src/hooks/useApi.ts` and a `getMockX()` fallback
- Add component: `src/components/MyComponent.tsx` — `interface Props` + `cn()` + Tailwind

DOs & DON'Ts:
- DO use `cn()` and TanStack Query (`useQuery`/`useMutation`) patterns; call `invalidateQueries` on success
- DO NOT edit `src/components/ui/*` by hand; DO NOT commit `.env` or secrets

See `BACKEND_INTEGRATION.md` for step-by-step integration and details.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Entrypoints & key files:
- `src/main.tsx` (router + QueryClient + ThemeProvider)
- `src/components/AppLayout.tsx`, `src/hooks/useApi.ts`, `src/lib/supabase.ts`, `supabase-schema.sql`, `src/components/ui/`

Conventions:
- Use `@/` path alias; Tailwind + `cn()` (`src/lib/utils.ts`); shadcn primitives in `src/components/ui/` (DO NOT edit manually)
- Hooks in `src/hooks/useApi.ts` follow `useQuery`/`useMutation` patterns; include `getMock*()` fallbacks for local dev

Typical tasks:
- Add DB table → edit `supabase-schema.sql` → run in Supabase → regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook → `src/hooks/useApi.ts` + `getMock*()` fallback
- Add UI primitive → `npx shadcn@latest add <component>` and update `components.json`

Do / Don't:
- DO use `cn()` & TanStack `useQuery`/`useMutation` patterns and `invalidateQueries`
- DO NOT edit `src/components/ui/*` by hand; DO NOT commit `.env`/secrets

For full setup and integration details (Supabase/Stripe), see `BACKEND_INTEGRATION.md`.
# PetSitter Network NZ - AI Agent Quick Guide

Commands
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context
- Entry: `src/main.tsx` (router + QueryClient + ThemeProvider)
- Hooks: `src/hooks/useApi.ts` (`useQuery`/`useMutation`, `getMock*()` fallback)
- Backend: Supabase client at `src/lib/supabase.ts`; schema in `supabase-schema.sql`
- UI primitives: `src/components/ui/` (shadcn — DO NOT edit manually)

Quick tasks
- Add DB table → update `supabase-schema.sql` → regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook → `src/hooks/useApi.ts`, add a `getMock*()` fallback
- Add component → `src/components/MyComponent.tsx` (interface Props + `cn()` + Tailwind)

Conventions
- Path alias `@/` → `./src` (see `vite.config.ts`)
- Use `cn()` (`src/lib/utils.ts`) for class merging
- Use `npx shadcn@latest add <component>` to add primitives; update `components.json`

Do / Don't
- DO use `useQuery`/`useMutation` & `invalidateQueries`.
- DO NOT edit `src/components/ui/*` by hand; DO NOT commit `.env` or secrets.

See `BACKEND_INTEGRATION.md` for integration steps.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Entry points & patterns:
- `src/main.tsx` — router, QueryClient, ThemeProvider
- `src/components/AppLayout.tsx` — landing page and example usage
- `src/hooks/useApi.ts` — API hooks with `getMock*()` fallback
- `src/components/ui/` — shadcn UI primitives (DO NOT edit manually)

Conventions:
- `@/` = `./src`; use `cn()` in `src/lib/utils.ts`; Tailwind + CVA for variants.
- Add UI primitives: `npx shadcn@latest add <component>` and update `components.json`.
- Hook patterns: `useQuery` for reads, `useMutation` for writes; `invalidateQueries` on success.

Quick tasks:
- Add DB table → update `supabase-schema.sql` → regenerate types
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook: new `useX` in `src/hooks/useApi.ts` + `getMock*()` fallback.
- Add component: `src/components/MyComponent.tsx` (interface Props + `cn()` + Tailwind)

DOs & DON'Ts:
- DO use `cn()` and TanStack `useQuery`/`useMutation`.
- DO NOT edit generated `src/components/ui/*` by hand.
- DO NOT commit `.env` or secrets.

See `BACKEND_INTEGRATION.md` for Supabase/Stripe steps.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context:
- Entry: `src/main.tsx`; SPA with React + TypeScript + Vite
- Routing: `createBrowserRouter` in `main.tsx`
- Server state: TanStack Query (use `QueryClient` in `main.tsx`)
- Backend: Supabase (`src/lib/supabase.ts`) + `supabase-schema.sql`

Key places:
- `src/components/AppLayout.tsx` (landing page)
- `src/hooks/useApi.ts` (data hooks + mock fallbacks)
- `src/components/ui/` (shadcn primitives — DO NOT edit manually)

Conventions:
- Use `@/` path alias; combine Tailwind through `cn()` in `src/lib/utils.ts`.
- Add UI primitives with `npx shadcn@latest add <component>` and edit `components.json`.
- Follow `useQuery`/`useMutation` & `invalidateQueries` patterns; build `getMock*()` fallbacks for dev.

Typical edits:
- Add table → update SQL → regenerate types
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook → `src/hooks/useApi.ts` (+ `getMock*()` fallback)
- Add component → `src/components/MyComponent.tsx` with `interface Props` + `cn()` + Tailwind

Do/Don't:
- DO use `cn()` & TanStack hooks; respect `components.json` for UI primitives
- DO NOT commit `.env` or hand-edit `src/components/ui/*`

See `BACKEND_INTEGRATION.md` for more details and step-by-step setup.
# PetSitter Network NZ - AI Agent Quick Guide

Commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context:
- Entry: `src/main.tsx`; SPA with React + TypeScript + Vite
- Routing: `createBrowserRouter` in `main.tsx`
- Server state: TanStack Query (use `QueryClient` in `main.tsx`)
- Backend: Supabase (`src/lib/supabase.ts`) + `supabase-schema.sql`

Key places:
- `src/components/AppLayout.tsx` (landing page)
- `src/hooks/useApi.ts` (data hooks + mock fallbacks)
- `src/components/ui/` (shadcn primitives — DO NOT edit manually)

Conventions:
- Use `@/` path alias; combine Tailwind through `cn()` in `src/lib/utils.ts`.
- Add UI primitives with `npx shadcn@latest add <component>` and edit `components.json`.
- Follow `useQuery`/`useMutation` & `invalidateQueries` patterns; build `getMock*()` fallbacks for dev.

Typical edits:
- Add table → update SQL → regenerate types
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add hook → `src/hooks/useApi.ts` (+ `getMock*()` fallback)
- Add component → `src/components/MyComponent.tsx` with `interface Props` + `cn()` + Tailwind

Do/Don't:
- DO use `cn()` & TanStack hooks; respect `components.json` for UI primitives
- DO NOT commit `.env` or hand-edit `src/components/ui/*`

See `BACKEND_INTEGRATION.md` for more details and step-by-step setup.
# PetSitter Network NZ - AI Agent Quick Guide

Quick commands:
- `npm install`
- `npm run dev` (Vite on port 8080)
- `npm run build` / `npm run preview` / `npm run lint`

Quick context
Entry: `src/main.tsx` (router + QueryClient + ThemeProvider)
Key files: `src/components/AppLayout.tsx`, `src/hooks/useApi.ts`, `src/lib/supabase.ts`, `supabase-schema.sql`, `src/components/ui/`
Hooks use `useQuery`/`useMutation` and include `getMock*()` fallbacks for local dev

Big picture:
- Vite + React + TypeScript SPA. Entrypoint: `src/main.tsx` (not `App.tsx`).
- Routing: `createBrowserRouter` in `main.tsx` (`/` → `Index`, `*` → `NotFound`).
- Server state: TanStack Query; global UI state: `src/contexts/AppContext.tsx`.
- Backend: Supabase client in `src/lib/supabase.ts` + schema in `supabase-schema.sql`.

Where to look first:
- `src/main.tsx`, `src/components/AppLayout.tsx`, `src/hooks/useApi.ts`, `src/lib/supabase.ts`, `src/components/ui/`

Conventions:
- Import using `@/...` (see `vite.config.ts`); Tailwind utility classes + `cn()` helper; use shadcn CLI for `src/components/ui/`.
- `useApi` exposes query/mutation hooks and `getMock*()` fallbacks used when Supabase is unset.

Quick tasks:
- Add DB table: modify `supabase-schema.sql` → run in Supabase → regenerate `src/lib/database.types.ts`.
For the full, detailed guide see `docs/copilot-instructions-full.md` or `BACKEND_INTEGRATION.md`.
- Add UI primitive: `npx shadcn@latest add <component>` and update `components.json`.

Dos & Don'ts:
- DO use `cn()` and TanStack `useQuery`/`useMutation` patterns.
- DO NOT edit generated UI primitives under `src/components/ui/` by hand.
- DO NOT commit `.env` files or any secrets.

For full details and integration steps, see `BACKEND_INTEGRATION.md` and `supabase-schema.sql`.
# PetSitter Network NZ - AI Coding Agent Instructions

Minimal, actionable guidance for AI agents contributing to this repo.

## Quick Commands
- Install: `npm install`
- Dev: `npm run dev` (Vite on port 8080)
- Build: `npm run build` / `npm run build:dev`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Big Picture
- Vite + React + TypeScript SPA. Entry: `src/main.tsx` (not `App.tsx`).
- Routing: React Router in `main.tsx` — `/` → `Index`, `*` → `NotFound`.
- Server state: TanStack Query; global UI state via `AppContext`.
- Backend: Supabase client at `src/lib/supabase.ts`; `supabase-schema.sql` has DB setup.

## Where to Look First
- `src/main.tsx` — QueryClient, ThemeProvider, router
- `src/components/AppLayout.tsx` — main page, shows hook usage and patterns
- `src/hooks/useApi.ts` — query/mutation hooks & `getMock*()` fallback
- `src/lib/database.types.ts` — generated DB types (regenerate after schema changes)
- `src/components/ui/` — shadcn-generated primitives (DON'T edit manually)

## Conventions & Patterns
- Path alias `@/` → `./src` (see `vite.config.ts`).
- Tailwind utility classes inline; use `cn()` (`src/lib/utils.ts`) to merge classes.
- shadcn UI: add primitives via `npx shadcn@latest add <component>`; update `components.json` if needed.
- Hooks naming: `useX()` for queries, `useCreateX`/`useUpdateX` for mutations. Invalidate queries on success.
- Mock fallback: `getMock*()` exists in `useApi` to enable offline development.

## Common Tasks & Examples
- Add a DB table: update `supabase-schema.sql` → run on Supabase → recreate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add a hook: add `useQuery`/`useMutation` in `src/hooks/useApi.ts` with keys (e.g., `['members']`).
- Add a component: follow `MemberCard.tsx` pattern, export default function, use `cn()` and Tailwind.
- Add shadcn primitive: `npx shadcn@latest add button` (manage `components.json`).

## Debugging & Dev Tips
- Dev server: `http://localhost:8080`. Check browser Network and console logs for Supabase/Stripe issues.
- Ensure `.env` contains `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for live data.
- Regenerate `database.types.ts` if schema changes.

## Integration Notes
- Stripe: frontend hooks in `src/hooks/useStripe.ts` and UI in `src/components/PricingCard.tsx`. Secrets must live in backend.
- Real-time DB updates: use `supabase.channel` to subscribe and invalidate queries (see `BACKEND_INTEGRATION.md`).

## DOs & DON'Ts
- DO use `cn()` for class merging and `useQuery`/`useMutation` for data calls.
- DO keep `src/components/ui/` primitives managed by shadcn CLI.
- DON'T commit `.env` files or edit generated UI primitives by hand.

If anything is unclear or you want a code template (hook, component, or migration), ask and I’ll add it.
# PetSitter Network NZ - AI Coding Agent Instructions

Minimal, actionable guidance to be productive in this repo.

## Quick Commands
- Install: `npm install`
- Start dev server: `npm run dev` (Vite on port 8080)
- Build: `npm run build` or `npm run build:dev`
- Preview: `npm run preview`
- Lint: `npm run lint`

## Big Picture
- A Vite + React + TypeScript single-page app. Main entry: `src/main.tsx` (NOT `App.tsx`).
- Routing: `main.tsx` using `createBrowserRouter`. Main routes: `/` → `Index`, `*` → `NotFound`.
- Server state: TanStack Query (`QueryClient`) configured in `main.tsx`. Global UI state: `AppContext`.
- Backend: Supabase client in `src/lib/supabase.ts`. Database types in `src/lib/database.types.ts` (regenerate when schema changes).

## Where to Look First (key files)
- `src/main.tsx` — app entry, theme, and QueryClient setup
- `src/components/AppLayout.tsx` — main page structure and how hooks are used
- `src/hooks/useApi.ts` — all API hooks (`useQuery`/`useMutation`), plus `getMock*()` fallback data
- `src/lib/supabase.ts` and `supabase-schema.sql` — backend integration and table definitions
- `src/components/ui/` — shadcn UI primitives (DO NOT edit manually)

## Conventions & Patterns
- Path alias: use `@/...` for imports (configured in `vite.config.ts`).
- Styling: Tailwind CSS utility classes inline; use `cn()` from `src/lib/utils.ts` to merge classes.
- shadcn/UI primitives: regenerate using `npx shadcn@latest add <component>`; update `components.json`.
- Hooks naming: `useResourceName()` for queries; `useUpdateX` / `useCreateX` for mutations; invalidate queries on success.
- Mock fallback: `getMockMembers`, `getMockEmergencyAlerts`, `getMockPricingPlans` exist for dev without Supabase.

## Common AI Tasks & Examples
- Add a new table: update `supabase-schema.sql` → run query in Supabase → regenerate types:
  `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`
- Add data fetching hook:
  - Create a `useQuery` hook in `src/hooks/useApi.ts` with queryKey `['resource']`.
  - Provide matching `getMock*()` fallback for offline dev.
- Create a component: follow `MemberCard.tsx` pattern — `interface Props`, Tailwind + `cn()`, export default function.
- Add a component primitive: `npx shadcn@latest add button` (edit `components.json` for custom variants).

## Debugging & Dev Tips
- Check the browser console & Network tab for Supabase requests; verify `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` in `.env`.
- Dev server: `http://localhost:8080` (Vite). Open with `npm run dev`.
- If table schema changes: regenerate `database.types.ts` and fix any type mismatches.
- There are no unit tests scaffolded; add small story-like tests or a basic Jest setup if needed.

## Integration Notes
- Stripe frontend hooks and checkout logic: `src/hooks/useStripe.ts` and `src/components/PricingCard.tsx`; stripe secrets must remain on server.
- Real-time: `supabase.channel` can be used to subscribe to DB events (see `BACKEND_INTEGRATION.md`).

## DOs & DON'Ts
- DO: Use `cn()` for class merging and `useQuery`/`useMutation` for data calls.
- DO: Keep UI primitives under `src/components/ui/` managed by shadcn CLI.
- DON'T: Commit `.env` files or change `src/components/ui/*` by hand.

If anything is unclear or you need a code snippet/template for a task, ask and I’ll provide an exact example or edit.
# PetSitter Network NZ - AI Coding Agent Instructions

These instructions give you the minimal, high-value context you need to be productive in this repo.

## Quick Start (commands)
- Install: `npm install`
- Dev server: `npm run dev` (Vite runs on port 8080 as set in `vite.config.ts`)
- Build: `npm run build` (or `npm run build:dev`)
- Preview production build: `npm run preview`
- Lint: `npm run lint`

## High-Level Architecture (why and where)
- SPA built with Vite + React + TypeScript. Entrypoint is `src/main.tsx` (not `App.tsx`).
- Routing: React Router v6 — main routes defined in `main.tsx` (`/` → `Index`, `*` → `NotFound`).
- State: UI state via `AppContext` (`src/contexts/AppContext.tsx`), server-state via TanStack Query configured in `main.tsx`.
- Backend: Supabase client in `src/lib/supabase.ts`. Database types in `src/lib/database.types.ts`.
- UI layout: `src/components/AppLayout.tsx` is the main landing page; reusable components in `src/components`.

## Key Conventions & Patterns (do these)
- Path alias `@` maps to `./src` (see `vite.config.ts`); import using `@/components/...`.
- UI primitives (`src/components/ui/`) are generated by shadcn - DO NOT edit manually. Add via: `npx shadcn@latest add [component]` and update `components.json`.
- Use the `cn()` utility (`src/lib/utils.ts`) for class merging: `cn('p-3', isActive && 'bg-black')`.
- Component style: functional components, TypeScript props interfaces, inline Tailwind classes, CVA variants for shadcn components.
- Data hooks: `src/hooks/useApi.ts` exposes `useMembers`, `useEmergencyAlerts`, `usePricingPlans`, `useCreateEmergencyAlert`, `useUpdateAlertStatus`, etc. Follow the `useQuery` / `useMutation` patterns.
- Fallback modes: `useApi` includes `getMock*()` fallbacks when Supabase is not configured. Respect these for dev/testing.

## How to add features (concrete steps)
1. Add a table → update `supabase-schema.sql` and run it on your Supabase project; then regenerate types: `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`.
2. Add backend queries → create a hook in `src/hooks/useApi.ts` following existing patterns (`useQuery`/`useMutation`, key naming `['resource']`).
3. New UI component → create `src/components/MyComponent.tsx` with a props interface and use Tailwind/CVA; if component is a primitive import (button, input), use `npx shadcn@latest add` instead.
4. Add route → add in `main.tsx` router list using `createBrowserRouter`.

## Debugging & Development tips
- The dev server runs on `http://localhost:8080` and serves HMR via SWC plugin. Inspect the browser console and Network tab for Supabase / Stripe issues.
- If data doesn't show, check `VITE_SUPABASE_URL`/`VITE_SUPABASE_ANON_KEY` in `.env` and RLS policies in Supabase.
- Regenerate `database.types.ts` if you change tables.
- Use `npm run lint` to fix style issues. There are no unit tests scaffolded; add ones if needed.

## Integration points & external systems
- Supabase: `src/lib/supabase.ts`. The app uses RLS and `anon` key according to `BACKEND_INTEGRATION.md`.
- Stripe: frontend integration lives in `src/hooks/useStripe.ts` and `src/components/PricingCard.tsx` — secrets must run from server backend.
- CDN image references in components and mock data point to CloudFront.

## Files to check before editing (safety & style)
- UI primitives: `src/components/ui/` (DO NOT edit — use shadcn CLI)
- Type definitions: `src/lib/database.types.ts`
- Central hooks: `src/hooks/useApi.ts` (data fetching and mutations)
- Global layout: `src/components/AppLayout.tsx` and `src/contexts/AppContext.tsx`.
- Theme: `src/components/theme-provider.tsx` and `tailwind.config.ts` for custom color variables.

## Example patterns to follow
- Query hook naming: `useMembers()` returns `useQuery({ queryKey: ['members'], queryFn: ... })` and mutations use `useMutation` + `queryClient.invalidateQueries`.
- Simple UI Component example: `MemberCard.tsx` — props interface with `name`, `available`, `image` and rendering using Tailwind classes + `cn()`.

## Common “Don’ts”
- Do not hand-edit `src/components/ui/*` that were generated by shadcn; regenerate instead.
- Do not commit `.env` files or secrets.

If anything here is unclear or you want more examples (hooks, a component template, or a small test harness), ask and I’ll add them.
# PetSitter Network NZ - AI Coding Agent Instructions

## Project Overview
This is a React + TypeScript landing page for PetSitter Network NZ, a membership-based platform connecting pet sitters for emergency backup support in Auckland. Built with Vite, React Router, TanStack Query, and shadcn/ui component library.

## Architecture & Structure

### Component Organization
- **Page Components** (`src/pages/`): Top-level route components. `Index.tsx` is the main landing page that wraps `AppLayout` with `AppProvider`.
- **Layout Components** (`src/components/`): Business logic components like `AppLayout.tsx` (main page structure), `MemberCard.tsx`, `EmergencyAlert.tsx`, `PricingCard.tsx`, `FeatureSection.tsx`.
- **UI Components** (`src/components/ui/`): shadcn/ui primitives built on Radix UI. DO NOT modify these directly - regenerate using `npx shadcn@latest add [component]`.
- **Context** (`src/contexts/`): React Context providers. `AppContext.tsx` manages global sidebar state.

### State Management Pattern
- **Global State**: React Context (`AppContext`) for UI state like sidebar toggling
- **Server State**: TanStack Query configured in `App.tsx` with `QueryClient` for data fetching (currently unused but scaffolded)
- **Local State**: React `useState` for component-specific state

### Routing
Single-page app using React Router v6 (`react-router-dom`). Routes defined in `App.tsx`:
- `/` → Index page (main landing page)
- `*` → 404 NotFound page

## Development Workflow

### Running the App
```bash
npm run dev          # Start dev server on http://[::]:8080
npm run build        # Production build
npm run build:dev    # Development mode build
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Adding UI Components
Use shadcn/ui CLI - DO NOT manually create in `src/components/ui/`:
```bash
npx shadcn@latest add [component-name]
```
Configuration in `components.json` controls import aliases and styling.

## Key Conventions & Patterns

### Styling
- **Tailwind CSS**: Utility-first with custom theme in `tailwind.config.ts`
- **CSS Variables**: Theme colors use HSL CSS variables (see `tailwind.config.ts` extended colors)
- **Class Merging**: Use `cn()` utility from `@/lib/utils.ts` to merge Tailwind classes with `clsx` + `tailwind-merge`
- **Component Variants**: shadcn components use `class-variance-authority` (CVA) for variant styling (see `button.tsx`)

### TypeScript Patterns
- **Relaxed Type Checking**: `tsconfig.json` has `noImplicitAny: false`, `strictNullChecks: false`, `noUnusedLocals: false` - pragmatic over strict
- **Interface Props**: Components use TypeScript interfaces for props (see `MemberCardProps` in `MemberCard.tsx`)
- **Path Aliases**: `@/` maps to `./src/` (configured in both `vite.config.ts` and `tsconfig.json`)

### Component Patterns
- Functional components with TypeScript
- Props destructuring in function signature
- Inline tailwind classes (no CSS modules)
- Example from `MemberCard.tsx`:
```tsx
interface MemberCardProps {
  name: string;
  available: boolean;
  // ...
}

export default function MemberCard({ name, available }: MemberCardProps) {
  return <div className="bg-white rounded-xl shadow-lg">...</div>
}
```

### Data Flow
- **Backend Integration**: Supabase backend connected with TanStack Query for data fetching
- **API Hooks**: Custom hooks in `src/hooks/useApi.ts` handle all data operations
- **Automatic Fallback**: App uses mock data if Supabase not configured, ensuring it works in both development and production
- **Image Hosting**: Images use CloudFront CDN URLs (d64gsuwffb70l.cloudfront.net)
- **Type Safety**: Database types defined in `src/lib/database.types.ts` with relaxed TypeScript checking

## Theme System
Custom theme provider in `src/components/theme-provider.tsx` wraps the app:
- Supports `light`, `dark`, `system` themes
- Persists to localStorage
- Uses `next-themes` API but implemented for React (not Next.js)
- Currently defaults to `light` theme in `App.tsx`

## Important Files
- `src/components/AppLayout.tsx` - Main landing page content and layout
- `src/contexts/AppContext.tsx` - Global state management
- `components.json` - shadcn/ui configuration
- `tailwind.config.ts` - Extended Tailwind theme with custom colors
- `vite.config.ts` - Dev server on port 8080, SWC for fast refresh

## Dependencies to Know
- **UI Framework**: React 18 with SWC plugin for fast refresh
- **UI Library**: shadcn/ui (Radix UI + Tailwind CSS)
- **Routing**: react-router-dom v6
- **Forms**: react-hook-form + zod (installed but unused)
- **Icons**: lucide-react
- **Notifications**: sonner for toasts
- **Charts**: recharts (installed but unused)

## Backend & API Integration
- **Supabase**: Configured in `src/lib/supabase.ts` - add credentials to `.env` to enable
- **TanStack Query**: Fully integrated with custom hooks in `src/hooks/useApi.ts`
- **Database Schema**: Complete PostgreSQL schema in `supabase-schema.sql` with 3 tables
- **API Hooks**: `useMembers()`, `useEmergencyAlerts()`, `usePricingPlans()`, and mutations for updates
- **Fallback Mode**: App automatically uses mock data when backend isn't configured

## What's Scaffolded But Unused
- React Hook Form + Zod validation
- Recharts charting library
- Toast notifications (UI components exist, not used)
- Supabase Auth (client ready, auth not implemented yet)

## Critical Notes
- **Backend Connected**: Supabase integration complete - works with or without configuration
- **Automatic Fallback**: Uses mock data when Supabase credentials not provided in `.env`
- Interactive features (buttons, forms) are placeholders - implement using mutation hooks from `src/hooks/useApi.ts`
- To enable live data: Add Supabase credentials to `.env` and run `supabase-schema.sql` in your Supabase project
- See `BACKEND_INTEGRATION.md` for complete setup instructions
