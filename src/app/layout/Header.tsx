import { ActionIcon, Anchor, Burger, Group, Text } from '@mantine/core'
import { IconLanguage, IconMoon, IconSun } from '@tabler/icons-react'
import { Link } from 'react-router'
import { useColorSchemeToggle } from './useColorSchemeToggle'

interface HeaderProps {
  navOpened: boolean
  onNavToggle: () => void
}

export function Header({ navOpened, onNavToggle }: HeaderProps) {
  const { isDark, toggle } = useColorSchemeToggle()

  return (
    <Group h="100%" px="md" justify="space-between">
      <Group gap="xs">
        <Burger opened={navOpened} onClick={onNavToggle} hiddenFrom="sm" size="sm" aria-label="Меню" />
        <Anchor component={Link} to="/" underline="never" c="inherit">
          <Group gap={6}>
            <IconLanguage size={22} color="var(--mantine-primary-color-filled)" />
            <Text fw={800}>Stepwise</Text>
          </Group>
        </Anchor>
      </Group>
      <ActionIcon variant="default" size="lg" aria-label="Переключить тему" onClick={toggle}>
        {isDark ? <IconSun size={18} /> : <IconMoon size={18} />}
      </ActionIcon>
    </Group>
  )
}
