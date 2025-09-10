# API Layer

- generate/route.ts: POST accepts `{ idea }` and returns draft landing content. Swap stub with `lib/ai.ts` to call AI.
- generations/route.ts:
  - GET: List saved generations (in-memory for dev).
  - POST: `{ idea, content }` saves a generation to the in-memory store.
- generations/[id]/route.ts: GET fetches one saved generation by id.

Auth is stubbed via UI pages only. In a real app, add an auth provider (NextAuth, Clerk, etc.) and protect POST routes.
