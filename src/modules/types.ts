import type { ComponentType } from 'react'
import type { RouteObject } from 'react-router'

export interface ModuleNav {
  label: string
  icon: ComponentType<{ size?: number | string }>
}

export interface ModuleHomeWidget {
  component: ComponentType
  order: number
  span: 'half' | 'full'
}

export interface AppModule {
  id: string
  basePath: string
  routes: RouteObject[]
  nav?: ModuleNav
  homeWidget?: ModuleHomeWidget
}
