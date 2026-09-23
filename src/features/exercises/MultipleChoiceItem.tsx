import { Button, SimpleGrid, Stack, Text } from '@mantine/core'
import { useState } from 'react'
import type { ChoiceItem } from '../../content'
import { Feedback, RichText } from '../../shared/ui'
import type { ItemProps } from './types'

export function MultipleChoiceItem({ item, onDone }: ItemProps<ChoiceItem>) {
  const [selected, setSelected] = useState<number | null>(null)
  const done = selected !== null

  const choose = (index: number) => {
    if (done) return
    setSelected(index)
    onDone(index === item.answer)
  }

  const colorFor = (index: number) => {
    if (!done) return undefined
    if (index === item.answer) return 'teal'
    return index === selected ? 'red' : 'gray'
  }

  return (
    <Stack>
      <Text size="lg">
        <RichText text={item.question} />
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xs">
        {item.options.map((option, i) => (
          <Button
            key={i}
            variant={done && (i === item.answer || i === selected) ? 'light' : 'default'}
            color={colorFor(i)}
            justify="flex-start"
            onClick={() => choose(i)}
          >
            {option}
          </Button>
        ))}
      </SimpleGrid>
      {done && (
        <Feedback correct={selected === item.answer}>
          {item.explanation && <RichText text={item.explanation} />}
        </Feedback>
      )}
    </Stack>
  )
}
