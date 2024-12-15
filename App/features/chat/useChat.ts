import { useState, useCallback } from 'react';
import { Message } from '../../types/chat';
import * as ChatApi from './ChatApi';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = useCallback(async (text: string) => {
    setIsLoading(true);
    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date().toISOString(),
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    try {
      const botResponse = await ChatApi.sendMessage(text);
      setMessages(prevMessages => [...prevMessages, botResponse]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Handle error (e.g., show an error message to the user)
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { messages, sendMessage, isLoading };
};

