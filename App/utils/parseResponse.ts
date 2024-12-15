import { Message } from '../types/chat';

export const parseApiResponse = (response: any): Message => {
  return {
    id: response.id,
    text: response.content,
    sender: 'bot',
    timestamp: new Date().toISOString(),
  };
};

