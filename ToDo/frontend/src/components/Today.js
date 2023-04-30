import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Today = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my today screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Today ;