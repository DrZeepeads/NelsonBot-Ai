import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const FAQsScreen = () => {
  const faqs = [
    { question: 'What is NelsonBot?', answer: 'NelsonBot is your pediatric knowledge companion, designed to provide information about child health and development.' },
    { question: 'Is NelsonBot a substitute for professional medical advice?', answer: 'No, NelsonBot is not a substitute for professional medical advice. Always consult with a qualified healthcare provider for medical concerns.' },
    // Add more FAQs as needed
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Frequently Asked Questions</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  faqItem: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  answer: {
    fontSize: 16,
  },
});

export default FAQsScreen;

