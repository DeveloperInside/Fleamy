import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { FlatList, Gesture, GestureDetector, ScrollView, TapGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import CommentableImage from '../components/CommentableImage'
import { user } from '../bookstore/User'
import { Portal } from 'react-native-paper'

const CommentScreen = observer(() => {

  return (
    <View style={styles.container}>
      <Portal.Host>
        <ScrollView>
          {user.friends.friends.map((useritem, key) => (
            <View style={{ flex: 1 }} key={key}>
              {useritem.userPosts.posts.map((item, key) => (
                <CommentableImage item={item} username={useritem.username} profilePhoto={useritem.profilePhoto} userID={useritem.userID} key={key}/>
              ))}
            </View>))}
          <View style={{ marginBottom: 60 }}></View>

        </ScrollView>
      </Portal.Host>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    backgroundColor: 'white'
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