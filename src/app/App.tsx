import { MantineProvider } from '@mantine/core'
import { RouterProvider } from 'react-router'
import { router } from './router'
import { theme } from './theme'

export function App() {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      <RouterProvider router={router} />
    </MantineProvider>
  )
}
