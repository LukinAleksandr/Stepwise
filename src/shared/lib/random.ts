export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

/** Перемешивает так, чтобы порядок отличался от исходного (если это возможно). */
export function shuffleChanged<T>(items: readonly T[], attempts = 10): T[] {
  let result = shuffle(items)
  for (let i = 0; i < attempts && items.length > 1 && result.every((x, k) => x === items[k]); i++) {
    result = shuffle(items)
  }
  return result
}
