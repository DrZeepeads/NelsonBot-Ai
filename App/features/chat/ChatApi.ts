import axios from 'axios';
import { API_BASE_URL } from '../../utils/constants';
import { Message } from '../../types/chat';

export const sendMessage = async (message: string): Promise<Message> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/chat`, { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const getFeedback = async (messageId: number, feedback: 'positive' | 'negative'): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/feedback`, { messageId, feedback });
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw error;
  }
};

