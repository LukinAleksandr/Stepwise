import { createTheme } from '@mantine/core'

/** Единая тема приложения. Цвета, радиусы и дефолтные пропсы компонентов — только здесь. */
export const theme = createTheme({
  primaryColor: 'indigo',
  defaultRadius: 'md',
  fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  headings: { fontWeight: '700' },
  components: {
    Card: { defaultProps: { withBorder: true, padding: 'lg' } },
    Paper: { defaultProps: { withBorder: true } },
  },
})
