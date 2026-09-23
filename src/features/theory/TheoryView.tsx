import { Stack } from '@mantine/core'
import type { TheoryBlock } from '../../content'
import { ExamplesBlock } from './blocks/ExamplesBlock'
import { TableBlock } from './blocks/TableBlock'
import { HeadingBlock, ListBlock, NoteBlock, ParagraphBlock, RuleBlock } from './blocks/TextBlocks'

function TheoryBlockView({ block }: { block: TheoryBlock }) {
  switch (block.type) {
    case 'heading':
      return <HeadingBlock {...block} />
    case 'paragraph':
      return <ParagraphBlock {...block} />
    case 'rule':
      return <RuleBlock {...block} />
    case 'note':
      return <NoteBlock {...block} />
    case 'list':
      return <ListBlock {...block} />
    case 'examples':
      return <ExamplesBlock {...block} />
    case 'table':
      return <TableBlock {...block} />
  }
}

export function TheoryView({ blocks }: { blocks: TheoryBlock[] }) {
  return (
    <Stack gap="lg">
      {blocks.map((block, index) => (
        <TheoryBlockView key={index} block={block} />
      ))}
    </Stack>
  )
}
