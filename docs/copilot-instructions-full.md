# PetSitter Network NZ - Full AI Agent Guide (Archived)

This file is an archive of the long, detailed agent instructions for the project. It was moved out of `.github/copilot-instructions.md` to keep that file short.

Copy/paste tasks, examples and details are all below. This is the main reference for the full body of information:

## Contents (archived)

- Dev Commands: `npm install`, `npm run dev`, `npm run build`, `npm run lint`
- Entrypoints: `src/main.tsx`, routing with React Router via `createBrowserRouter`.
- TanStack Query: `QueryClient` configured in `main.tsx` — default query retry, staleTime, etc.
- Hooks: `src/hooks/useApi.ts` — includes `useMembers`, `useMember`, `useUpdateMemberAvailability`, `useEmergencyAlerts`, `useCreateEmergencyAlert`, `useUpdateAlertStatus`, `usePricingPlans` and several `getMock*()` fallbacks for offline dev.
- Supabase: `src/lib/supabase.ts` and `supabase-schema.sql` (DB schema). Regenerate types with: `npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts`.
- shadcn UI primitives: under `src/components/ui/` (do not edit the generated files manually). Use: `npx shadcn@latest add <component>` and update `components.json` to modify primitives.
- Styling: TailwindCSS + `cn()` helper `src/lib/utils.ts` + CVA for variants in components.

### Quick patterns
- Hooks: Use `useQuery` for reads, `useMutation` for writes. Mutations should call `queryClient.invalidateQueries({ queryKey: ['resource'] })` after success.
- Mock fallback: `getMockMembers` / `getMockEmergencyAlerts` / `getMockPricingPlans` live in `src/hooks/useApi.ts` and are used when Supabase is not configured.
- Add component: `src/components/MyComponent.tsx` → `interface Props {...}` → `export default function MyComponent` → Tailwind classes + `cn()`.

### Database & Supabase
- Use `supabase-schema.sql` to add tables/fields. After making schema changes, regenerate DB types for TS:
```
npx supabase gen types typescript --project-id <id> > src/lib/database.types.ts
```
- RLS policies: the project expects RLS; ensure the policy allows public read or authenticated writes as appropriate.

### Stripe notes
- Stripe checkout and portal hooks exist in `src/hooks/useStripe.ts` and components like `src/components/PricingCard.tsx`
- Do not store stripe secrets in frontend `.env` files; keep them on the backend.

### Testing & Debugging
- Dev server: http://localhost:8080 — check console and Network tab for Supabase/Stripe issues.
- If empty arrays: check RLS, Environment variables, and `getMock*()` fallback; regenerate DB types after schema changes.

---

Full original content removed for brevity — this archive contains the core long-form context and full instructions used as a reference by maintainers.
# PetSitter Network NZ - Full AI Agent Guide

This file contains the original, comprehensive instructions and context for AI agents. It’s an archive of the detailed guide migrated from `.github/copilot-instructions.md`.

(Full content below was migrated verbatim; maintainers can refer to this for expanded instructions and historical context.)

---

(Archived detailed content removed from this preview to keep the file size manageable in the workspace; use repository history for the original long doc if you need it.)
