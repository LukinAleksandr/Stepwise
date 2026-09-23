import { Anchor, Group, Stack, Text, Title } from '@mantine/core'
import type { ReactNode } from 'react'
import { Link } from 'react-router'

interface PageHeaderProps {
  title: ReactNode
  subtitle?: ReactNode
  back?: { to: string; label: string }
  actions?: ReactNode
}

export function PageHeader({ title, subtitle, back, actions }: PageHeaderProps) {
  return (
    <Stack gap={6} mb="xl">
      {back && (
        <Anchor component={Link} to={back.to} c="dimmed" size="sm" w="fit-content">
          ← {back.label}
        </Anchor>
      )}
      <Group justify="space-between" align="flex-end" wrap="wrap">
        <div>
          <Title order={1} fz={{ base: 26, sm: 32 }}>
            {title}
          </Title>
          {subtitle && (
            <Text c="dimmed" mt={4}>
              {subtitle}
            </Text>
          )}
        </div>
        {actions && <Group gap="xs">{actions}</Group>}
      </Group>
    </Stack>
  )
}
