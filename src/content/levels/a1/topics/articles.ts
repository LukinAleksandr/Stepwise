import type { Topic } from '../../../types'

export const articles: Topic = {
  id: 'articles',
  title: 'Артикли a / an / the',
  summary: 'Когда ставить a, an, the — и когда артикль не нужен',
  theory: [
    {
      type: 'paragraph',
      text: 'В русском артиклей нет, а в английском перед исчисляемым существительным в единственном числе **почти всегда** стоит артикль или другое определяющее слово (my, this…).',
    },
    { type: 'heading', text: 'a / an — неопределённый артикль' },
    {
      type: 'rule',
      text: '**a / an** = «один, какой-то», только с исчисляемыми в единственном числе. **a** — перед согласным звуком, **an** — перед гласным звуком.',
    },
    {
      type: 'examples',
      items: [
        { en: 'a book, a cat, a house', ru: 'книга, кошка, дом' },
        { en: 'an apple, an egg, an idea', ru: 'яблоко, яйцо, идея' },
        { en: 'an hour', ru: 'час (h не читается → гласный звук)' },
        { en: 'a university', ru: 'университет (начинается со звука [j])' },
      ],
    },
    { type: 'note', tone: 'warning', text: 'Важна не буква, а **звук**: **an** hour, **a** university.' },
    { type: 'heading', text: 'the — определённый артикль' },
    {
      type: 'rule',
      text: '**the** = «тот самый»: о предмете уже говорили, он единственный в своём роде или из ситуации понятно, о чём речь.',
    },
    {
      type: 'examples',
      items: [
        { en: 'I have a cat. The cat is black.', ru: 'У меня есть кошка. Кошка чёрная.' },
        { en: 'Close the door, please.', ru: 'Закрой дверь, пожалуйста.' },
        { en: 'The sun is hot.', ru: 'Солнце горячее.' },
      ],
    },
    { type: 'heading', text: 'Когда артикль не нужен' },
    {
      type: 'list',
      items: [
        'множественное число в общем смысле: I like **cats**.',
        'неисчисляемые в общем смысле: I drink **water**.',
        'если уже есть my / your / this / that: **my** book',
        'имена, большинство городов и стран: **Anna**, **London**, **Canada**',
        'устойчивые выражения: at home, at work, go to bed, have breakfast',
      ],
    },
    {
      type: 'table',
      headers: ['a / an', 'the', 'без артикля'],
      rows: [['впервые упоминаем, «один из»', 'уже известный, единственный', 'в общем смысле, мн. ч., имена']],
    },
  ],
  cards: [
    { id: 'apple', en: 'an apple', ru: 'яблоко', transcription: '/ˈæpl/' },
    { id: 'egg', en: 'an egg', ru: 'яйцо', transcription: '/eɡ/' },
    { id: 'orange', en: 'an orange', ru: 'апельсин', transcription: '/ˈɒrɪndʒ/' },
    { id: 'umbrella', en: 'an umbrella', ru: 'зонт', transcription: '/ʌmˈbrelə/' },
    { id: 'hour', en: 'an hour', ru: 'час', transcription: '/ˈaʊə/', example: 'I need an hour.' },
    { id: 'idea', en: 'an idea', ru: 'идея', transcription: '/aɪˈdɪə/', example: 'I have an idea!' },
    { id: 'university', en: 'a university', ru: 'университет', transcription: '/ˌjuːnɪˈvɜːsəti/' },
    { id: 'banana', en: 'a banana', ru: 'банан', transcription: '/bəˈnɑːnə/' },
    { id: 'car', en: 'a car', ru: 'машина', transcription: '/kɑː/' },
    { id: 'house', en: 'a house', ru: 'дом', transcription: '/haʊs/' },
    { id: 'dog', en: 'a dog', ru: 'собака', transcription: '/dɒɡ/' },
    { id: 'sun', en: 'the sun', ru: 'солнце', transcription: '/sʌn/', example: 'The sun is hot.' },
    { id: 'moon', en: 'the moon', ru: 'луна', transcription: '/muːn/' },
  ],
  exercises: [
    {
      id: 'a-an',
      title: 'a или an?',
      items: [
        { kind: 'gap', text: 'I have {a} brother.', translation: 'У меня есть брат.' },
        { kind: 'gap', text: 'She is {an} engineer.', translation: 'Она инженер.' },
        { kind: 'gap', text: "It's {an} old house.", translation: 'Это старый дом.' },
        { kind: 'gap', text: 'He eats {an} apple every day.', translation: 'Он ест яблоко каждый день.' },
        { kind: 'gap', text: 'My father is {a} doctor.', translation: 'Мой отец врач.' },
        { kind: 'gap', text: 'We need {an} hour.', translation: 'Нам нужен час.' },
        { kind: 'gap', text: 'Oxford is {a} university city.', translation: 'Оксфорд — университетский город.' },
        { kind: 'gap', text: 'I have {an} idea!', translation: 'У меня есть идея!' },
      ],
    },
    {
      id: 'a-the-zero',
      title: 'a, an, the или без артикля',
      instruction: 'Если артикль не нужен, поставьте дефис: -',
      items: [
        {
          kind: 'gap',
          text: 'I see {a} dog. {The} dog is very big.',
          translation: 'Я вижу собаку. Собака очень большая.',
        },
        { kind: 'gap', text: 'Please open {the} window.', translation: 'Пожалуйста, открой окно.' },
        { kind: 'gap', text: '{The} moon is beautiful tonight.', translation: 'Сегодня луна красивая.' },
        { kind: 'gap', text: 'I like {-} music.', translation: 'Я люблю музыку.' },
        { kind: 'gap', text: 'She lives in {-} Paris.', translation: 'Она живёт в Париже.' },
        { kind: 'gap', text: 'My sister has {a} new car.', translation: 'У моей сестры новая машина.' },
        { kind: 'gap', text: 'I go to {-} bed at eleven.', translation: 'Я ложусь спать в одиннадцать.' },
      ],
    },
    {
      id: 'order',
      title: 'Соберите предложение',
      items: [
        { kind: 'order', answer: 'I have a new phone.', translation: 'У меня новый телефон.', distractors: ['an'] },
        { kind: 'order', answer: 'The cat is on the sofa.', translation: 'Кошка на диване.', distractors: ['a'] },
        { kind: 'order', answer: 'She is an actress.', translation: 'Она актриса.', distractors: ['a'] },
        {
          kind: 'order',
          answer: 'We live in a small flat.',
          translation: 'Мы живём в маленькой квартире.',
          distractors: ['an'],
        },
      ],
    },
    {
      id: 'choice',
      title: 'Выберите правильный вариант',
      items: [
        { kind: 'choice', question: '___ elephant', options: ['a', 'an', '—'], answer: 1 },
        {
          kind: 'choice',
          question: 'Look at ___ sky!',
          options: ['a', 'the', '—'],
          answer: 1,
          explanation: 'Небо одно — **the**.',
        },
        {
          kind: 'choice',
          question: 'I love ___ chocolate.',
          options: ['a', 'the', '—'],
          answer: 2,
          explanation: 'Неисчисляемое в общем смысле — без артикля.',
        },
        { kind: 'choice', question: 'He is ___ good student.', options: ['a', 'an', 'the'], answer: 0 },
        {
          kind: 'choice',
          question: '___ university',
          options: ['a', 'an'],
          answer: 0,
          explanation: 'Слово начинается со звука [j] — согласного, поэтому **a**.',
        },
      ],
    },
  ],
}
