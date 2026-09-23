import clsx from 'clsx'
import type { ReactNode } from 'react'
import classes from './Flashcard.module.css'

interface FlashcardProps {
  front: ReactNode
  back: ReactNode
  flipped: boolean
  onFlip: () => void
}

export function Flashcard({ front, back, flipped, onFlip }: FlashcardProps) {
  return (
    <button
      type="button"
      className={clsx(classes.scene, flipped && classes.flipped)}
      onClick={onFlip}
      aria-label={flipped ? 'Показать лицевую сторону' : 'Показать ответ'}
    >
      <div className={classes.inner}>
        <div className={classes.face} aria-hidden={flipped}>
          {front}
        </div>
        <div className={clsx(classes.face, classes.back)} aria-hidden={!flipped}>
          {back}
        </div>
      </div>
    </button>
  )
}
