import clsx from 'clsx'
import type { ReactNode } from 'react'
import s from './Flashcard.module.css'

interface Props {
  front: ReactNode
  back: ReactNode
  flipped: boolean
  onFlip: () => void
}

/** Двусторонняя карточка с анимацией переворота. Содержимое сторон задаёт родитель. */
export function Flashcard({ front, back, flipped, onFlip }: Props) {
  return (
    <button
      type="button"
      className={clsx(s.scene, flipped && s.flipped)}
      onClick={onFlip}
      aria-label={flipped ? 'Показать лицевую сторону' : 'Показать ответ'}
    >
      <div className={s.inner}>
        <div className={s.face} aria-hidden={flipped}>
          {front}
        </div>
        <div className={clsx(s.face, s.back)} aria-hidden={!flipped}>
          {back}
        </div>
      </div>
    </button>
  )
}
