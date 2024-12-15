import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Message } from '../types/chat';
import FeedbackButton from './FeedbackButton';

interface ChatProps {
  message: Message;
}

const Chat = ({ message }: ChatProps) => {
  return (
    <View style={[styles.container, message.sender === 'user' ? styles.userMessage : styles.botMessage]}>
      <Text style={styles.text}>{message.text}</Text>
      <Text style={styles.timestamp}>{new Date(message.timestamp).toLocaleTimeString()}</Text>
      {message.sender === 'bot' && <FeedbackButton messageId={message.id} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});

export default Chat;

