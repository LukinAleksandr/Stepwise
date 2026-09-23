import { ActionIcon, type ActionIconProps } from '@mantine/core'
import { IconVolume } from '@tabler/icons-react'
import { canSpeak, speak } from '../lib/speech'

export function SpeakButton({ text, size = 'md' }: { text: string; size?: ActionIconProps['size'] }) {
  if (!canSpeak) return null
  return (
    <ActionIcon
      variant="subtle"
      color="gray"
      radius="xl"
      size={size}
      aria-label={`Произнести: ${text}`}
      title="Произнести"
      onClick={(e) => {
        e.stopPropagation()
        speak(text)
      }}
    >
      <IconVolume size="70%" />
    </ActionIcon>
  )
}
