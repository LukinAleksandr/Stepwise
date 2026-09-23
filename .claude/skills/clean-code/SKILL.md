---
name: clean-code
description: Stepwise React/TypeScript code conventions. Use whenever writing or reviewing code in this repo — components, hooks, stores, scripts.
---

# Clean code conventions

## Components are views
- A component renders; it does not own business logic. State, effects, derived values and handlers live in a
  `useXxx` hook in the feature's `hooks/` folder. The component destructures what the hook returns.
- One exported component per file. Tiny private subcomponents (a row, a face) may live in the same file.
- Keep components short. When JSX grows past one screen, extract a subcomponent.
- Named exports only. No default exports.

```tsx
export function VerbTable({ verbs }: VerbTableProps) {
  const { query, setQuery, filtered } = useVerbSearch(verbs)
  return (/* markup only */)
}
```

## Destructuring
- Destructure props in the signature, hook results at the call site, and objects before use:
  `const { id, title, items } = set` rather than `set.id`, `set.title`.
- Destructure in callbacks too: `items.filter(({ key }) => …)`, `onChange={({ currentTarget }) => …}`.

## Hooks
- A hook returns a flat object with ready-to-render values (`isChecked`, `canSubmit`, `correctCount`) and
  intention-revealing actions (`check`, `next`, `restart`). Components should not compute these.
- A function that uses no hooks is not a hook: name it `getXxx` / `createXxx`, keep it pure, put it next to its user.
- Read store snapshots with `getXxx()` helpers inside initializers; subscribe with selector hooks
  (`useSrsStates`, `useExerciseActions`). Never subscribe to a whole store.

## Stores
- zustand + persist, one store per feature, key `stepwise/<feature>`.
- Data at the top level, functions under `actions`; persist only data via `partialize`.
- Export selector hooks (`useXxxActions`, `useXxxResults`), not the raw store.

## Naming and constants
- Constants: `UPPER_SNAKE_CASE`, declared outside components.
- Booleans: `is/has/can` prefixes. Handlers inside components: `handleXxx`; props: `onXxx`.
- No abbreviations except well-known ones (`id`, `ru`, `en`).

## Types
- No `any`, no non-null `!`. Narrow with guards (`isGap`) or early returns.
- Prefer `readonly T[]` for inputs that are not mutated.

## UI
- Use Mantine components and props before writing CSS. CSS modules only when Mantine cannot express it.
- Learner-facing strings are Russian; everything else is English.

## Comments
- None, unless a block is genuinely non-obvious. Then one short English line explaining *why*, not *what*.

## Before finishing
Run `npm run check`. Fix every error and warning; do not silence rules without a one-line English reason.
