import { Alert } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import type { ReactNode } from 'react'

interface FeedbackProps {
  correct: boolean
  children?: ReactNode
}

export function Feedback({ correct, children }: FeedbackProps) {
  return (
    <Alert
      role="status"
      variant="light"
      color={correct ? 'teal' : 'red'}
      title={correct ? 'Верно!' : 'Есть ошибка'}
      icon={correct ? <IconCheck /> : <IconX />}
    >
      {children}
    </Alert>
  )
}
