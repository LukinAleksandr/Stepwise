import { NavLink, Stack, Text } from '@mantine/core'
import { Link } from 'react-router'
import { useNavItems } from './useNavItems'

const NAV_LINK_STYLE = { borderRadius: 'var(--mantine-radius-md)' }

export function Navigation() {
  const items = useNavItems()

  return (
    <Stack justify="space-between" h="100%">
      <div>
        {items.map(({ to, label, icon: Icon, active }) => (
          <NavLink
            key={to}
            component={Link}
            to={to}
            label={label}
            leftSection={<Icon size={18} />}
            active={active}
            variant="light"
            style={NAV_LINK_STYLE}
          />
        ))}
      </div>
      <Text size="xs" c="dimmed" px="sm">
        v{__APP_VERSION__}
      </Text>
    </Stack>
  )
}
