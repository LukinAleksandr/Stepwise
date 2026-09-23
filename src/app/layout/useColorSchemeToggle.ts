import { useComputedColorScheme, useMantineColorScheme } from '@mantine/core'

export function useColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme()
  const scheme = useComputedColorScheme('light')
  const isDark = scheme === 'dark'

  return { isDark, toggle: () => setColorScheme(isDark ? 'light' : 'dark') }
}
