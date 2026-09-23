import { ActionIcon, type ActionIconProps } from '@mantine/core'
import { IconVolume } from '@tabler/icons-react'
import type { MouseEvent } from 'react'
import { canSpeak, speak } from '../lib/speech'

interface SpeakButtonProps {
  text: string
  size?: ActionIconProps['size']
}

export function SpeakButton({ text, size = 'md' }: SpeakButtonProps) {
  if (!canSpeak) return null

  const handleClick = (event: MouseEvent) => {
    event.stopPropagation()
    speak(text)
  }

  return (
    <ActionIcon
      variant="subtle"
      color="gray"
      radius="xl"
      size={size}
      aria-label={`Произнести: ${text}`}
      title="Произнести"
      onClick={handleClick}
    >
      <IconVolume size="70%" />
    </ActionIcon>
  )
}
