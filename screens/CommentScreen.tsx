import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { FlatList, Gesture, GestureDetector, ScrollView, TapGestureHandler, TouchableOpacity } from 'react-native-gesture-handler'
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import CommentableImage from '../components/CommentableImage'
import { user } from '../bookstore/User'

const CommentScreen = observer(() => {

  const friendsList = user.friends.friends

  const posts = user.takePosts

  console.log('posts+++++++++++++++')
  console.log(posts)
  console.log('posts---------------')

  const takePosts = () => {
    const friendPosts = friendsList.forEach((item) => { console.log('item'); console.log(item) })
  }

  const renderItem = ({ item }) => {
    console.log('item++++++++++++++++')
    console.log(item)
    console.log('item---------------')

    return (
      <View>
        {/* <CommentableImage postUserImage={item.profilePhoto} postUserName={item.username} postMessage={item.postMessage} postPhoto={item.postPhoto} /> */}
        <Text>{item.username}</Text>
        <Text>{JSON.stringify(item)}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView>
      {user.friends.friends.map(useritem => (
        <View style={{ flex: 1 }}>
          {useritem.userPosts.posts.map(item => (
              <CommentableImage item={item} username={useritem.username} profilePhoto={useritem.profilePhoto} userID = {useritem.userID}/>
          ))}
        </View>))}
      </ScrollView>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:60
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