export const BASE_PATH = '/levels'

export const levelsPaths = {
  root: BASE_PATH,
  level: (levelId: string) => `${BASE_PATH}/${levelId}`,
  topic: (levelId: string, topicId: string) => `${BASE_PATH}/${levelId}/${topicId}`,
  topicCards: (levelId: string, topicId: string) => `${BASE_PATH}/${levelId}/${topicId}/cards`,
  topicPractice: (levelId: string, topicId: string) => `${BASE_PATH}/${levelId}/${topicId}/practice`,
  exercise: (levelId: string, topicId: string, setId: string) => `${BASE_PATH}/${levelId}/${topicId}/practice/${setId}`,
}
