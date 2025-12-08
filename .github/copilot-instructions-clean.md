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

Full details are archived at `docs/copilot-instructions-full.md` and `BACKEND_INTEGRATION.md`.
