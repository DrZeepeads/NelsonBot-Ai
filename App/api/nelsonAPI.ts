import axios from 'axios';
import { API_BASE_URL } from '../utils/constants';
import { Message } from '../types/chat';
import { parseApiResponse } from '../utils/parseResponse';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in every request
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const sendMessage = async (message: string): Promise<Message> => {
  try {
    const response = await api.post('/chat', { message });
    return parseApiResponse(response.data);
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

export const sendFeedback = async (messageId: number, feedback: 'positive' | 'negative'): Promise<void> => {
  try {
    await api.post('/feedback', { messageId, feedback });
  } catch (error) {
    console.error('Error sending feedback:', error);
    throw error;
  }
};

export const uploadFile = async (file: any): Promise<string> => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    const response = await api.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.url;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

