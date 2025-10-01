export interface Prompt {
  author: string
  personaName: string
  content: string
  isPublic: boolean
}

export interface PromptResponse {
  prompts: Prompt[]
}