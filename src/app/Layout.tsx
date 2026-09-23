import {
  ActionIcon,
  Anchor,
  AppShell,
  Burger,
  Container,
  Group,
  NavLink,
  Text,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBook2, IconCards, IconLanguage, IconMoon, IconSun, IconTextGrammar } from '@tabler/icons-react'
import { useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { paths } from './paths'

const NAV = [
  { to: paths.home, label: 'Уровни', icon: IconBook2, end: false },
  { to: paths.review, label: 'Повторение', icon: IconCards, end: false },
  { to: paths.verbs, label: 'Глаголы', icon: IconTextGrammar, end: false },
]

export function Layout() {
  const [opened, { toggle, close }] = useDisclosure()
  const { pathname } = useLocation()
  const { setColorScheme } = useMantineColorScheme()
  const scheme = useComputedColorScheme('light')

  // Закрываем мобильное меню и прокручиваем вверх при переходе
  // biome-ignore lint/correctness/useExhaustiveDependencies: эффект должен срабатывать именно на смену pathname
  useEffect(() => {
    close()
    window.scrollTo(0, 0)
  }, [pathname, close])

  const isActive = (to: string) =>
    to === paths.home ? pathname === '/' || pathname.startsWith('/level') : pathname.startsWith(to)

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group gap="xs">
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" aria-label="Меню" />
            <Anchor component={Link} to={paths.home} underline="never" c="inherit">
              <Group gap={6}>
                <IconLanguage size={22} color="var(--mantine-primary-color-filled)" />
                <Text fw={800}>Stepwise</Text>
              </Group>
            </Anchor>
          </Group>
          <ActionIcon
            variant="default"
            size="lg"
            aria-label="Переключить тему"
            onClick={() => setColorScheme(scheme === 'dark' ? 'light' : 'dark')}
          >
            {scheme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
          </ActionIcon>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="xs">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            component={Link}
            to={item.to}
            label={item.label}
            leftSection={<item.icon size={18} />}
            active={isActive(item.to)}
            variant="light"
            style={{ borderRadius: 'var(--mantine-radius-md)' }}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Container size="md" py="md">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
