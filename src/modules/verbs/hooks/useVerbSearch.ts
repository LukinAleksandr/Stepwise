import { useMemo, useState } from 'react'
import type { Verb } from '../../../content'

const matches = ({ base, past, participle, ru }: Verb, query: string) =>
  [base, past, participle, ru].some((field) => field.toLowerCase().includes(query))

export function useVerbSearch(verbs: readonly Verb[]) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return normalized ? verbs.filter((verb) => matches(verb, normalized)) : verbs
  }, [verbs, query])

  return { query, setQuery, filtered }
}
