import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import CommentScreen from './screens/CommentScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Nav } from './navigation/Nav';
import Header from './components/Header';


export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva['light']}>
      <StatusBar style="auto" />
      <Header />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Nav />
      </GestureHandlerRootView>
    </ApplicationProvider>
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
