import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './scenes/homePage';

export default function App() {
  return (
    <HomePage />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
