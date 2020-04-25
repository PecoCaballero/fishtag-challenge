import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './scr/scenes/homePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CollectionPage from './scr/scenes/collectionPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomePage}
          options={{ headerShown: false, }}
        />
        <Stack.Screen
          name="collection"
          component={CollectionPage}
          options={({ route }) => (
            {
              title: route.params.collectionName,
              headerTintColor: '#FFFFFF',
              headerStyle: {
                backgroundColor: '#6730EC', elevation: 1
              }
            }
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
