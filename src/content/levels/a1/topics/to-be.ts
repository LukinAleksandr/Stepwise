import type { Topic } from '../../../types'

export const toBe: Topic = {
  id: 'to-be',
  title: 'Глагол to be',
  summary: 'am / is / are в утверждениях, отрицаниях и вопросах',
  theory: [
    {
      type: 'paragraph',
      text: 'Глагол **to be** означает «быть, являться, находиться». В русском он обычно пропускается («Я студент»), а в английском обязателен: I **am** a student.',
    },
    {
      type: 'rule',
      title: 'Формы в настоящем времени',
      text: 'I **am** · he / she / it **is** · we / you / they **are**',
    },
    {
      type: 'table',
      headers: ['Местоимение', 'Полная форма', 'Краткая форма'],
      rows: [
        ['I', 'I am', "I'm"],
        ['he / she / it', 'he is', "he's / she's / it's"],
        ['we / you / they', 'we are', "we're / you're / they're"],
      ],
    },
    {
      type: 'examples',
      items: [
        { en: 'I am a teacher.', ru: 'Я учитель.' },
        { en: "She's from Italy.", ru: 'Она из Италии.' },
        { en: 'We are at home.', ru: 'Мы дома.' },
      ],
    },
    { type: 'heading', text: 'Отрицание' },
    {
      type: 'paragraph',
      text: 'Ставим **not** после am / is / are. Краткие формы: **isn’t**, **aren’t**. Для I есть только **I’m not**.',
    },
    {
      type: 'examples',
      items: [
        { en: "I'm not tired.", ru: 'Я не устал.' },
        { en: "He isn't at work.", ru: 'Его нет на работе.' },
        { en: "They aren't students.", ru: 'Они не студенты.' },
      ],
    },
    { type: 'heading', text: 'Вопрос и краткий ответ' },
    { type: 'paragraph', text: 'Ставим am / is / are **перед** подлежащим.' },
    {
      type: 'examples',
      items: [
        { en: 'Are you a doctor? — Yes, I am.', ru: 'Ты врач? — Да.' },
        { en: "Is she married? — No, she isn't.", ru: 'Она замужем? — Нет.' },
        { en: 'Where are they?', ru: 'Где они?' },
      ],
    },
    {
      type: 'note',
      tone: 'warning',
      text: 'В кратком **утвердительном** ответе сокращение не используется: Yes, I **am** (не Yes, I’m).',
    },
    {
      type: 'note',
      tone: 'tip',
      text: 'Возраст тоже выражается через to be: I **am** 25 (years old). Не «I have 25».',
    },
  ],
  cards: [
    { id: 'student', en: 'student', ru: 'студент', transcription: '/ˈstjuːdnt/', example: 'I am a student.' },
    { id: 'teacher', en: 'teacher', ru: 'учитель', transcription: '/ˈtiːtʃə/', example: 'She is a teacher.' },
    { id: 'doctor', en: 'doctor', ru: 'врач', transcription: '/ˈdɒktə/', example: 'Is he a doctor?' },
    { id: 'engineer', en: 'engineer', ru: 'инженер', transcription: '/ˌendʒɪˈnɪə/', example: 'My dad is an engineer.' },
    { id: 'happy', en: 'happy', ru: 'счастливый, довольный', transcription: '/ˈhæpi/', example: 'We are happy.' },
    { id: 'tired', en: 'tired', ru: 'уставший', transcription: '/ˈtaɪəd/', example: "I'm very tired." },
    { id: 'hungry', en: 'hungry', ru: 'голодный', transcription: '/ˈhʌŋɡri/', example: 'Are you hungry?' },
    { id: 'married', en: 'married', ru: 'женатый, замужем', transcription: '/ˈmærid/', example: "She isn't married." },
    { id: 'from', en: 'be from', ru: 'быть родом из', example: "I'm from Canada.", exampleRu: 'Я из Канады.' },
    { id: 'at-home', en: 'at home', ru: 'дома', example: 'They are at home.' },
    { id: 'nice-to-meet', en: 'Nice to meet you.', ru: 'Приятно познакомиться.' },
    { id: 'how-are-you', en: "How are you? — I'm fine, thanks.", ru: 'Как дела? — Хорошо, спасибо.' },
  ],
  exercises: [
    {
      id: 'gaps',
      title: 'Вставьте am / is / are',
      instruction: 'Впишите нужную форму глагола to be. Можно использовать краткие формы.',
      items: [
        { kind: 'gap', text: "I {am|'m} a student.", translation: 'Я студент.' },
        { kind: 'gap', text: "My sister {is|'s} a doctor.", translation: 'Моя сестра врач.' },
        { kind: 'gap', text: "We {are|'re} from Canada.", translation: 'Мы из Канады.' },
        { kind: 'gap', text: "It {is|'s} cold today.", translation: 'Сегодня холодно.' },
        { kind: 'gap', text: 'Tom and Anna {are} friends.', translation: 'Том и Анна друзья.' },
        { kind: 'gap', text: 'The book {is} on the table.', translation: 'Книга на столе.' },
        { kind: 'gap', text: "I {am not|'m not} hungry.", hint: 'not', translation: 'Я не голоден.' },
        { kind: 'gap', text: "They {are not|aren't} at home.", hint: 'not', translation: 'Их нет дома.' },
        { kind: 'gap', text: '{Is} she your sister?', translation: 'Она твоя сестра?' },
        { kind: 'gap', text: '{Are} you tired? — Yes, I {am}.', translation: 'Ты устал? — Да.' },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'Where are you from?', translation: 'Откуда ты?', distractors: ['is'] },
        { kind: 'order', answer: 'I am not a teacher.', translation: 'Я не учитель.', distractors: ['is'] },
        { kind: 'order', answer: 'Is your brother at home?', translation: 'Твой брат дома?', distractors: ['Are'] },
        { kind: 'order', answer: 'They are very tired.', translation: 'Они очень устали.' },
        { kind: 'order', answer: 'How old are you?', translation: 'Сколько тебе лет?', distractors: ['have'] },
        { kind: 'order', answer: 'My name is Anna.', translation: 'Меня зовут Анна.', distractors: ['am'] },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        {
          kind: 'choice',
          question: 'My parents ___ teachers.',
          options: ['am', 'is', 'are'],
          answer: 2,
          explanation: 'parents = they → **are**',
        },
        { kind: 'choice', question: '___ you hungry?', options: ['Am', 'Is', 'Are'], answer: 2 },
        { kind: 'choice', question: 'Mike ___ at work now.', options: ['am', 'is', 'are'], answer: 1 },
        {
          kind: 'choice',
          question: 'I ___ 20 years old.',
          options: ['have', 'am', 'is'],
          answer: 1,
          explanation: 'Возраст выражается через **to be**: I am 20.',
        },
        {
          kind: 'choice',
          question: 'Is she married? — Yes, she ___.',
          options: ["'s", 'is', 'are'],
          answer: 1,
          explanation: 'В кратком утвердительном ответе сокращение не используется: Yes, she **is**.',
        },
        { kind: 'choice', question: 'It ___ my phone.', options: ["isn't", "aren't", 'am not'], answer: 0 },
      ],
    },
  ],
}
