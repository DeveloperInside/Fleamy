import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { Gesture, GestureDetector, ScrollView, TapGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import CommentableImage from '../components/CommentableImage'

const CommentScreen = observer(() => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <CommentableImage />
        <CommentableImage />
        <CommentableImage />
        <CommentableImage />
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
});

export default CommentScreen