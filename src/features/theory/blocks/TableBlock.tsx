import { Table } from '@mantine/core'
import { RichText } from '../../../shared/ui'

interface TableBlockProps {
  headers: string[]
  rows: string[][]
  caption?: string
}

export function TableBlock({ headers, rows, caption }: TableBlockProps) {
  return (
    <Table.ScrollContainer minWidth={400}>
      <Table striped withTableBorder withColumnBorders captionSide="top">
        {caption && <Table.Caption>{caption}</Table.Caption>}
        <Table.Thead>
          <Table.Tr>
            {headers.map((header, index) => (
              <Table.Th key={index}>{header}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows.map((row, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Table.Td key={cellIndex}>
                  <RichText text={cell} />
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}
