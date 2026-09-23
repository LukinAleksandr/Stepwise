import { Button, EmptyState } from '@mantine/core'
import { IconMapOff } from '@tabler/icons-react'
import { Link } from 'react-router'
import { paths } from '../app/paths'

export function NotFoundPage() {
  return (
    <EmptyState
      icon={<IconMapOff />}
      title="Страница не найдена"
      description="Возможно, тема ещё не добавлена."
      mt="xl"
    >
      <EmptyState.Actions>
        <Button component={Link} to={paths.home}>
          На главную
        </Button>
      </EmptyState.Actions>
    </EmptyState>
  )
}
