import { AppShell, Container } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet } from 'react-router'
import { Header } from './Header'
import { Navigation } from './Navigation'
import { useRouteChange } from './useRouteChange'

export function Layout() {
  const [opened, { toggle, close }] = useDisclosure()
  useRouteChange(close)

  return (
    <AppShell
      header={{ height: 56 }}
      navbar={{ width: 220, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Header navOpened={opened} onNavToggle={toggle} />
      </AppShell.Header>
      <AppShell.Navbar p="xs">
        <Navigation />
      </AppShell.Navbar>
      <AppShell.Main>
        <Container size="md" py="md">
          <Outlet />
        </Container>
      </AppShell.Main>
    </AppShell>
  )
}
