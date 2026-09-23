import { EXERCISES_STORAGE_KEY } from '../../features/exercises/storageKey'
import { SRS_STORAGE_KEY } from '../../shared/srs/storageKey'

const LEGACY_KEYS = ['stepwise/progress', 'english-trainer/progress']

interface LegacyState {
  srs?: object
  exercises?: object
  attempts?: object
}

const readLegacyState = (): LegacyState | undefined => {
  const raw = LEGACY_KEYS.map((key) => localStorage.getItem(key)).find(Boolean)
  return raw ? (JSON.parse(raw) as { state?: LegacyState }).state : undefined
}

const writeIfMissing = (key: string, state: object) => {
  if (!localStorage.getItem(key)) localStorage.setItem(key, JSON.stringify({ state, version: 0 }))
}

function migrateLegacyProgress() {
  const legacy = readLegacyState()
  if (!legacy) return
  const { srs = {}, exercises = {}, attempts = {} } = legacy
  writeIfMissing(SRS_STORAGE_KEY, { states: srs })
  writeIfMissing(EXERCISES_STORAGE_KEY, { results: exercises, attempts })
  for (const key of LEGACY_KEYS) localStorage.removeItem(key)
}

try {
  migrateLegacyProgress()
} catch {
  // Storage may be unavailable (private mode); stores then work in memory.
}
