# Stepwise — project rules

Static React app for learning English (levels → topics → theory, flashcards, practice; irregular verbs).
Stack: Vite, React 19, TypeScript, Mantine 9, react-router (hash), zustand + persist, Biome.

## Hard rules

1. **No comments.** Code must explain itself through naming and structure. A comment is allowed only for a
   genuinely non-obvious block, must be one short line, and must be in **English**.
2. **Clean code** — follow the `clean-code` skill: destructuring, logic in hooks, small components, pure views.
3. **Modularity** — follow the `new-module` skill. Enabling or disabling a module is one line in
   `src/modules/index.ts` and must not require changes anywhere else.
4. **Content** never mentions Russia or Russian cities. The learner's home country in examples is **Canada**
   (Toronto, Vancouver, Ottawa, Montreal). Learner-facing text (UI, translations, theory) is in Russian;
   identifiers, comments, commit messages and docs for developers are in English.
5. Run `npm run check` before every commit. CI runs the same checks.

## Architecture

```
src/
  app/        composition root: router, layout, home page, storage migration
  modules/    pluggable app sections (levels, review, verbs) + registry
  features/   reusable domain blocks without routes (theory, flashcards, exercises)
  shared/     generic building blocks (ui, lib, srs)
  content/    typed learning data
```

Allowed imports (enforced by `npm run check:boundaries`):

| From        | May import                                                       |
|-------------|------------------------------------------------------------------|
| `app`       | anything                                                         |
| `modules/x` | its own folder, `modules/types`, `features`, `shared`, `content` |
| `features/x`| its own folder, `shared`, `content`                              |
| `shared`    | `shared` only                                                    |
| `content`   | `content` only                                                   |

Each feature keeps its own persisted store (`stepwise/<feature>` key). Progress keys come from content ids,
so **content ids must never change** after release.

## Versioning

Versions are git tags. On merge into `main`, CI derives the bump from the PR branch name, tags `vX.Y.Z`,
publishes a GitHub Release and builds the app with that version.

| Branch prefix         | Bump  |
|-----------------------|-------|
| `major/`, `breaking/` | major |
| `feat/`, `feature/`   | minor |
| anything else         | patch |
| direct push, no PR    | none  |

## Commands

- `npm run dev` — dev server
- `npm run check` — Biome + TypeScript + module boundaries + content validation
- `npm run check:fix` — auto-fix formatting and lint
- `npm run build` — production build to `dist/`
