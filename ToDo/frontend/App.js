import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import Navigation from './navigation';
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'flex-start',
  },
});
