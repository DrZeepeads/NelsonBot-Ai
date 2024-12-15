import React from 'react';
import { View, StyleSheet, Switch, Text } from 'react-native';
import { useTheme } from '../hooks/useTheme';

const SettingsPanel = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
      {/* Add more settings as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  settingText: {
    fontSize: 16,
  },
});

export default SettingsPanel;

