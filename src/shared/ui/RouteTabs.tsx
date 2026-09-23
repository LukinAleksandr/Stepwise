import { Tabs } from '@mantine/core'
import { matchPath, useLocation, useNavigate } from 'react-router'

export interface RouteTab {
  to: string
  label: string
  /** Активна только при точном совпадении пути */
  end?: boolean
}

/** Вкладки Mantine, где каждая вкладка — отдельный маршрут. */
export function RouteTabs({ items }: { items: RouteTab[] }) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const active = items.find((t) => matchPath({ path: t.to, end: t.end ?? false }, pathname))
  return (
    <Tabs value={active?.to ?? null} onChange={(to) => to && navigate(to)} mb="lg">
      <Tabs.List>
        {items.map((t) => (
          <Tabs.Tab key={t.to} value={t.to}>
            {t.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
