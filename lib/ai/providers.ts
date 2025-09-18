import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { gateway } from '@ai-sdk/gateway';
import { isTestEnvironment } from '../constants';

export const myProvider = isTestEnvironment
  ? (() => {
      const {
        artifactModel,
        chatModel,
        reasoningModel,
        titleModel,
      } = require('./models.mock');
      return customProvider({
        languageModels: {
          'chat-model': chatModel,
          'chat-model-reasoning': reasoningModel,
          'title-model': titleModel,
          'artifact-model': artifactModel,
        },
      });
    })()
  : customProvider({
      languageModels: {
        // Temporarily using gemini-2.5-flash for all models
        'chat-model': gateway.languageModel('google/gemini-2.0-flash-exp'),
        'chat-model-reasoning': gateway.languageModel('google/gemini-2.0-flash-exp'),
        /* Original models (disabled):
        'chat-model': gateway.languageModel('xai/grok-2-vision-1212'),
        'chat-model-reasoning': wrapLanguageModel({
          model: gateway.languageModel('xai/grok-3-mini'),
          middleware: extractReasoningMiddleware({ tagName: 'think' }),
        }), */
        'title-model': gateway.languageModel('google/gemini-2.0-flash-exp'),
        'artifact-model': gateway.languageModel('google/gemini-2.0-flash-exp'),
        /* Original models (disabled):
        'title-model': gateway.languageModel('xai/grok-2-1212'),
        'artifact-model': gateway.languageModel('xai/grok-2-1212'), */
      },
    });
