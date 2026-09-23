import { Text, Title } from '@mantine/core'
import type { CardRef } from '../../content'

export function EnglishFace({ card: { en, transcription } }: { card: CardRef }) {
  return (
    <>
      <Title order={2}>{en}</Title>
      {transcription && <Text c="dimmed">{transcription}</Text>}
    </>
  )
}

export function TranslationFace({ card: { ru } }: { card: CardRef }) {
  return <Title order={2}>{ru}</Title>
}

export function CardExample({ card: { example, exampleRu } }: { card: CardRef }) {
  if (!example) return null
  return (
    <Text size="sm" c="dimmed" fs="italic">
      {example}
      {exampleRu && (
        <>
          <br />
          {exampleRu}
        </>
      )}
    </Text>
  )
}
