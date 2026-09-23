import { Button, EmptyState } from '@mantine/core'
import { IconMapOff } from '@tabler/icons-react'
import { Link } from 'react-router'

export function NotFound() {
  return (
    <EmptyState icon={<IconMapOff />} title="Страница не найдена" description="Возможно, её ещё нет." mt="xl">
      <EmptyState.Actions>
        <Button component={Link} to="/">
          На главную
        </Button>
      </EmptyState.Actions>
    </EmptyState>
  )
}
