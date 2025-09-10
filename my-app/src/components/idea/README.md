# Idea components

- idea-form.tsx: Client component that accepts an idea, calls `/api/generate`, and renders the draft (hero, features, pricing).
  - Save: POST to `/api/generations` with `{ idea, content }` to persist (dev uses in-memory store).
  - Share: After save, navigate to `/share/:id` to view a read-only page.

Keep client-only behavior here (state, toasts, effects). Compose shadcn UI components; do not modify primitives in `components/ui`.
