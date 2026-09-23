export const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

const LANGUAGE = 'en-US'

function pickVoice(): SpeechSynthesisVoice | undefined {
  const voices = window.speechSynthesis.getVoices()
  return voices.find(({ lang }) => lang === LANGUAGE) ?? voices.find(({ lang }) => lang.startsWith('en'))
}

export function speak(text: string, rate = 0.9): void {
  if (!canSpeak) return
  const { speechSynthesis } = window
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = LANGUAGE
  utterance.rate = rate
  const voice = pickVoice()
  if (voice) utterance.voice = voice
  speechSynthesis.cancel()
  speechSynthesis.speak(utterance)
}
