import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Chat from './Chat';
import ChatBox from './ChatBox';
import { Message } from '../types/chat';
import { useChat } from '../features/chat/useChat';

const ChatInterface = () => {
  const { messages, sendMessage, isLoading } = useChat();

  const renderMessage = ({ item }: { item: Message }) => (
    <Chat message={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.chatContainer}
      />
      <ChatBox onSend={sendMessage} isLoading={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ChatInterface;

