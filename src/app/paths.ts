/** Все URL приложения — только через эти функции. */
export const paths = {
  home: '/',
  level: (levelId: string) => `/level/${levelId}`,
  topic: (levelId: string, topicId: string) => `/level/${levelId}/${topicId}`,
  topicCards: (levelId: string, topicId: string) => `/level/${levelId}/${topicId}/cards`,
  topicPractice: (levelId: string, topicId: string) => `/level/${levelId}/${topicId}/practice`,
  exercise: (levelId: string, topicId: string, setId: string) => `/level/${levelId}/${topicId}/practice/${setId}`,
  review: '/review',
  verbs: '/verbs',
  verbsTrain: '/verbs/train',
}
