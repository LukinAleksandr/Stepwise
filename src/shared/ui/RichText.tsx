import { Fragment } from 'react'

const BOLD_PATTERN = /(\*\*[^*]+\*\*)/g

const isBold = (part: string) => part.startsWith('**') && part.endsWith('**')

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text
        .split(BOLD_PATTERN)
        .map((part, index) =>
          isBold(part) ? <strong key={index}>{part.slice(2, -2)}</strong> : <Fragment key={index}>{part}</Fragment>,
        )}
    </>
  )
}
