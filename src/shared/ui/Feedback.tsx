import { Alert } from '@mantine/core'
import { IconCheck, IconX } from '@tabler/icons-react'
import type { ReactNode } from 'react'

/** Результат проверки ответа — одинаковый во всех типах заданий. */
export function Feedback({ correct, children }: { correct: boolean; children?: ReactNode }) {
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
