// if(__DEV__) {
//   import('./configs/ReactotronConfig').then(() => console.log('Reactotron Configured'))
// }
// import * as Reactotron from "reactotron-react-native"

import { ApplicationProvider } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as eva from '@eva-design/eva';
import CommentScreen from './screens/CommentScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Nav } from './navigation/Nav';
import Header from './components/Header';

import { onPatch } from "mobx-state-tree";
import { user, userModel } from './bookstore/User';

import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { mst } from "reactotron-mst"

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(mst())
  .connect() // let's connect!

// const user = userModel.create({userID:0, username:'guest', profilePhoto:'', userComments:{}, userPosts:{}})

// // reactotron logging
// Reactotron.trackMstNode(user)

// onPatch(user, patch => {
//   console.log('patch is: ')
//   console.log(patch);
// });

// reactotron logging



Reactotron.trackMstNode(user)

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