import { IconHome } from '@tabler/icons-react'
import { useLocation } from 'react-router'
import { modules } from '../../modules'

const HOME = { to: '/', label: 'Главная', icon: IconHome }

const moduleNavItems = modules.flatMap(({ basePath, nav }) => (nav ? [{ to: basePath, ...nav }] : []))

export function useNavItems() {
  const { pathname } = useLocation()
  const isActive = (to: string) => (to === HOME.to ? pathname === to : pathname.startsWith(to))

  return [HOME, ...moduleNavItems].map((item) => ({ ...item, active: isActive(item.to) }))
}
