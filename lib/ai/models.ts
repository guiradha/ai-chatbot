export const DEFAULT_CHAT_MODEL: string = 'chat-model';

export interface ChatModel {
  id: string;
  name: string;
  description: string;
}

export const chatModels: Array<ChatModel> = [
  {
    id: 'chat-model',
    name: 'Gemini 2.0 Flash',  // Temporarily showing Gemini as the only model
    description: 'Fast and efficient multimodal model',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Gemini 2.0 Flash',  // Same model for all options
    description: 'Fast and efficient multimodal model',
  },
  /* Original models (disabled):
  {
    id: 'chat-model',
    name: 'Grok Vision',
    description: 'Advanced multimodal model with vision and text capabilities',
  },
  {
    id: 'chat-model-reasoning',
    name: 'Grok Reasoning',
    description:
      'Uses advanced chain-of-thought reasoning for complex problems',
  }, */
];
