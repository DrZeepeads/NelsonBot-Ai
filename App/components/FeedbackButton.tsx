import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

interface FeedbackButtonProps {
  messageId: number;
}

const FeedbackButton = ({ messageId }: FeedbackButtonProps) => {
  const handleFeedback = (feedback: 'positive' | 'negative') => {
    // TODO: Implement feedback logic
    console.log(`Feedback for message ${messageId}: ${feedback}`);
  };

  return (
    <View style={styles.container}>
      <Button
        icon={<Icon name="thumbs-up" size={15} color="green" />}
        type="clear"
        onPress={() => handleFeedback('positive')}
      />
      <Button
        icon={<Icon name="thumbs-down" size={15} color="red" />}
        type="clear"
        onPress={() => handleFeedback('negative')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
});

export default FeedbackButton;

