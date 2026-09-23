import { Button, type ButtonProps, SimpleGrid, Stack, Text } from '@mantine/core'
import type { ChoiceItem } from '../../../content'
import { Feedback, RichText } from '../../../shared/ui'
import { type OptionState, useChoice } from '../hooks/useChoice'
import type { ItemProps } from './types'

const OPTION_APPEARANCE: Record<OptionState, Pick<ButtonProps, 'variant' | 'color'>> = {
  idle: { variant: 'default' },
  correct: { variant: 'light', color: 'teal' },
  wrong: { variant: 'light', color: 'red' },
  muted: { variant: 'default', color: 'gray' },
}

export function MultipleChoiceItem({ item, onDone }: ItemProps<ChoiceItem>) {
  const { question, options, explanation } = item
  const { isAnswered, isCorrect, choose, optionState } = useChoice(item, onDone)

  return (
    <Stack>
      <Text size="lg">
        <RichText text={question} />
      </Text>
      <SimpleGrid cols={{ base: 1, xs: 2 }} spacing="xs">
        {options.map((option, index) => (
          <Button
            key={index}
            justify="flex-start"
            {...OPTION_APPEARANCE[optionState(index)]}
            onClick={() => choose(index)}
          >
            {option}
          </Button>
        ))}
      </SimpleGrid>
      {isAnswered && <Feedback correct={isCorrect}>{explanation && <RichText text={explanation} />}</Feedback>}
    </Stack>
  )
}
