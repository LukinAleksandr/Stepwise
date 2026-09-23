export function shuffle<T>(items: readonly T[]): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

const isSameOrder = <T>(a: readonly T[], b: readonly T[]) => a.every((item, index) => item === b[index])

export function shuffleChanged<T>(items: readonly T[], attempts = 10): T[] {
  let result = shuffle(items)
  for (let attempt = 0; attempt < attempts && items.length > 1 && isSameOrder(result, items); attempt++) {
    result = shuffle(items)
  }
  return result
}
