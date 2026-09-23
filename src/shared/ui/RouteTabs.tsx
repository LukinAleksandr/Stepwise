import { Tabs } from '@mantine/core'
import { matchPath, useLocation, useNavigate } from 'react-router'

export interface RouteTab {
  to: string
  label: string
  end?: boolean
}

function useActiveTab(items: RouteTab[]) {
  const { pathname } = useLocation()
  return items.find(({ to, end = false }) => matchPath({ path: to, end }, pathname))?.to ?? null
}

export function RouteTabs({ items }: { items: RouteTab[] }) {
  const navigate = useNavigate()
  const active = useActiveTab(items)

  return (
    <Tabs value={active} onChange={(to) => to && navigate(to)} mb="lg">
      <Tabs.List>
        {items.map(({ to, label }) => (
          <Tabs.Tab key={to} value={to}>
            {label}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  )
}
