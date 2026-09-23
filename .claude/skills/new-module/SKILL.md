---
name: new-module
description: How to add, enable or disable a Stepwise app module (a pluggable section with its own routes, nav item and home widget). Use when creating a new app section or changing module wiring.
---

# App modules

A module is a self-contained app section in `src/modules/<id>/`. The app discovers everything about it from the
`AppModule` object it exports — routes, navigation item and home widget. Nothing outside the module references
its internals.

## Contract (`src/modules/types.ts`)

```ts
export interface AppModule {
  id: string
  basePath: string            // '/verbs'
  routes: RouteObject[]       // relative to basePath
  nav?: { label: string; icon: ComponentType<{ size?: number | string }> }
  homeWidget?: { component: ComponentType; order: number; span: 'half' | 'full' }
}
```

## Folder layout

```
src/modules/<id>/
  index.tsx        exports `<id>Module: AppModule` — the only public entry
  paths.ts         BASE_PATH and path builders, used only inside the module
  pages/           route components
  components/      module-private components, incl. the home widget
  hooks/           module logic
```

## Add a module
1. Create the folder with the layout above. Build pages from `features`, `shared` and `content`.
2. Export the module object from `index.tsx`.
3. Register it: add one entry to the array in `src/modules/index.ts`.

## Disable a module
Remove its entry from `src/modules/index.ts`. Routes, nav and home widget disappear; nothing else changes.
Delete the folder only when the module is gone for good.

## Rules
- A module never imports another module. Shared logic goes to `features/` (domain blocks) or `shared/`
  (generic blocks). `npm run check:boundaries` fails otherwise.
- Links to other modules are not allowed; the layout owns cross-module navigation via the registry.
- Persisted state belongs to a feature store, not to a module, so disabling a module keeps user progress.
