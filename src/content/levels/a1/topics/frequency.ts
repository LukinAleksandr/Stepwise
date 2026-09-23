import type { Topic } from '../../../types'

export const frequency: Topic = {
  id: 'frequency',
  title: 'Как часто? Наречия частотности',
  summary: 'always, usually, often, sometimes, never — и где они стоят',
  theory: [
    { type: 'paragraph', text: 'Наречия частотности отвечают на вопрос **How often?** — «Как часто?»' },
    {
      type: 'table',
      headers: ['Наречие', 'Частота', 'Перевод'],
      rows: [
        ['always', '100%', 'всегда'],
        ['usually', '≈ 90%', 'обычно'],
        ['often', '≈ 70%', 'часто'],
        ['sometimes', '≈ 50%', 'иногда'],
        ['rarely', '≈ 10%', 'редко'],
        ['never', '0%', 'никогда'],
      ],
    },
    {
      type: 'rule',
      title: 'Место в предложении',
      text: '**Перед** смысловым глаголом: I **often** go to the cinema. **После** to be: She **is always** late.',
    },
    {
      type: 'examples',
      items: [
        { en: 'I usually get up at seven.', ru: 'Обычно я встаю в семь.' },
        { en: 'He sometimes plays tennis.', ru: 'Он иногда играет в теннис.' },
        { en: 'We are never bored.', ru: 'Нам никогда не скучно.' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: '**never** уже содержит отрицание: I **never** drink coffee (не I don’t never drink).',
    },
    { type: 'heading', text: 'Выражения частоты' },
    {
      type: 'paragraph',
      text: 'Эти выражения обычно ставятся **в конце** предложения: every day, once a week (раз в неделю), twice a month (два раза в месяц), three times a year (три раза в год), on Mondays.',
    },
    {
      type: 'examples',
      items: [
        { en: 'I go to the gym twice a week.', ru: 'Я хожу в спортзал два раза в неделю.' },
        { en: 'How often do you cook?', ru: 'Как часто ты готовишь?' },
      ],
    },
  ],
  cards: [
    { id: 'always', en: 'always', ru: 'всегда', transcription: '/ˈɔːlweɪz/' },
    { id: 'usually', en: 'usually', ru: 'обычно', transcription: '/ˈjuːʒuəli/' },
    { id: 'often', en: 'often', ru: 'часто', transcription: '/ˈɒfn/' },
    { id: 'sometimes', en: 'sometimes', ru: 'иногда', transcription: '/ˈsʌmtaɪmz/' },
    { id: 'rarely', en: 'rarely', ru: 'редко', transcription: '/ˈreəli/' },
    { id: 'never', en: 'never', ru: 'никогда', transcription: '/ˈnevə/' },
    { id: 'once', en: 'once a week', ru: 'раз в неделю' },
    { id: 'twice', en: 'twice a month', ru: 'два раза в месяц' },
    { id: 'three-times', en: 'three times a year', ru: 'три раза в год' },
    { id: 'how-often', en: 'How often...?', ru: 'Как часто...?', example: 'How often do you travel?' },
    { id: 'weekend', en: 'at the weekend', ru: 'в выходные' },
    { id: 'gym', en: 'go to the gym', ru: 'ходить в спортзал' },
    { id: 'visit', en: 'visit', ru: 'навещать, посещать', example: 'I visit my grandma on Sundays.' },
    { id: 'late', en: 'be late', ru: 'опаздывать', example: 'He is always late.' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте наречие',
      instruction: 'В скобках — частота. Выберите подходящее наречие.',
      items: [
        { kind: 'gap', text: 'I {never} eat fast food.', hint: '0%', translation: 'Я никогда не ем фастфуд.' },
        { kind: 'gap', text: 'She {always} gets up early.', hint: '100%', translation: 'Она всегда рано встаёт.' },
        { kind: 'gap', text: 'We {sometimes} go to the cinema.', hint: '50%', translation: 'Мы иногда ходим в кино.' },
        {
          kind: 'gap',
          text: 'He is {usually} at home in the evening.',
          hint: '90%',
          translation: 'Вечером он обычно дома.',
        },
        {
          kind: 'gap',
          text: 'They {often} visit their grandparents.',
          hint: '70%',
          translation: 'Они часто навещают бабушку и дедушку.',
        },
        { kind: 'gap', text: 'I {rarely|seldom} watch TV.', hint: '10%', translation: 'Я редко смотрю телевизор.' },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      instruction: 'Следите за местом наречия.',
      items: [
        { kind: 'order', answer: 'I always drink coffee in the morning.', translation: 'Я всегда пью кофе утром.' },
        {
          kind: 'order',
          answer: 'She is never late.',
          translation: 'Она никогда не опаздывает.',
          distractors: ["doesn't"],
        },
        { kind: 'order', answer: 'We usually have dinner at seven.', translation: 'Мы обычно ужинаем в семь.' },
        {
          kind: 'order',
          answer: 'He sometimes plays tennis.',
          translation: 'Он иногда играет в теннис.',
          distractors: ['play'],
        },
        { kind: 'order', answer: 'They are often tired.', translation: 'Они часто бывают уставшими.' },
        {
          kind: 'order',
          answer: 'How often do you go to the gym?',
          translation: 'Как часто ты ходишь в спортзал?',
          distractors: ['does'],
        },
        {
          kind: 'order',
          answer: 'I go swimming twice a week.',
          translation: 'Я хожу плавать два раза в неделю.',
          distractors: ['two'],
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        {
          kind: 'choice',
          question: 'Какое предложение правильное?',
          options: ['She always is late.', 'She is always late.', 'Always she is late.'],
          answer: 1,
          explanation: 'С to be наречие ставится **после** глагола.',
        },
        {
          kind: 'choice',
          question: 'I ___ go to bed late.',
          options: ["don't never", 'never', "never don't"],
          answer: 1,
          explanation: '**never** уже отрицание — do not не нужен.',
        },
        { kind: 'choice', question: 'I go to the gym ___ a week.', options: ['twice', 'two', 'double'], answer: 0 },
        { kind: 'choice', question: 'How ___ do you cook?', options: ['many', 'often', 'much'], answer: 1 },
        {
          kind: 'choice',
          question: 'He ___ plays football on Saturdays.',
          options: ['usual', 'usually', 'use'],
          answer: 1,
        },
      ],
    },
  ],
}
