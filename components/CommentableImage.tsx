import { View, Text, ImageBackground, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList, Keyboard, KeyboardEvent } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';
import { Avatar, Button, Card, Input, Layout, Modal, Popover } from '@ui-kitten/components';
import { MaterialIcons, Fontisto, EvilIcons, Ionicons } from '@expo/vector-icons';
import { user } from '../bookstore/User';
import CommentComp from './CommentComp';
import { TouchableRipple } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';


// const CommentableImage = observer((props: { postUserImage: any; postUserName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; postMessage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; postPhoto: any; }) => {
const CommentableImage = observer(({ item, username, profilePhoto, userID }) => {

  const [myComment, setMyComment] = useState<{ commentID: number, relative_x: string, relative_y: string, commentText: string } | {}>({})

  const [showCommentBox, setCommentBox] = useState(false)

  const [commentInput, setCommentInput] = useState('')

  const refInput = useRef(null);

  function onKeyboardDidShow(e: KeyboardEvent) {
  }

  function onKeyboardDidHide() {
    // Check if the object is alive. If not do nothing (To prevent null is not an object error)
    refInput.current ? refInput.current.blur() : null
  }

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener('keyboardDidHide', onKeyboardDidHide);
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // console.log('comments length: ' + myComments.length)
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  console.log('window width: ' + windowWidth)

  const isPressed = useSharedValue(false);
  const tabCoordinates = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.Pan()
    .onBegin((e) => {
      'worklet';
      isPressed.value = true;
      tabCoordinates.value = {
        x: e.x,
        y: e.y
      }
    })
    .onUpdate((e) => {
      'worklet';
      const resty = () => {
        if (e.y < 0) {
          return 0
        } else if (e.y > 330) {
          return 330
        } else return e.y
      }
      tabCoordinates.value = {
        x: e.x,
        y: resty()
      }
    })
    .onStart((e) => {
      'worklet';
      console.log('tapped: ' + JSON.stringify(e.x + '---' + e.y))
      // setMyComment({ commentID: 1, relative_x: e.x, relative_y: e.y, commentText: '' })

    })
    .onEnd((e) => {
      'worklet';
      console.log('ended')
    })
    .onFinalize((e) => {
      'worklet';
      isPressed.value = false;
    });

  const tabPositionAnimation = useAnimatedStyle(() => {
    return ({
      top: tabCoordinates.value.y,
      left: tabCoordinates.value.x
    })
  })
  const inputPosition = useAnimatedStyle(() => {
    return ({
      marginLeft: -tabCoordinates.value.x / 2
    })
  })

  // const renderComments = () => {
  //   return (
  //     <Animated.View style={[{ width: 10, height: 10, backgroundColor: 'yellow', position: 'absolute' }, tabPositionAnimation]}>
  //       <Input style={{ minWidth: 80 }} />
  //     </Animated.View>
  //   )
  // }
  const [visibleComment, setVisibleComment] = useState(false)
  const RenderComments = ({ item }) => {

    return (
      <View>
        <TouchableOpacity onPressIn={() => { setVisibleComment(true) }} onPressOut={() => { setVisibleComment(false) }}>
          <Image style={{ width: 35, height: 35, borderRadius: 90 }} source={{ uri: item.userIdentity.profilePhoto }} />
          <Text>{item.commentText}</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <Layout style={styles.container}>
      <Layout level='1' style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#eee', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, paddingHorizontal: 12, paddingVertical: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
        <Image source={{ uri: profilePhoto }} style={{ width: 36, height: 36, borderRadius: 60, borderColor: 'purple', borderWidth: 4, marginRight: 6 }} />
        <Text style={{ fontWeight: '600', marginRight: 6 }}>{username}</Text>
        <Text>{item.postMessage}</Text>
      </Layout>
      <ImageBackground source={{ uri: item.postPhoto }} resizeMode='cover' style={{ width: '100%', minHeight: 350 }}>
        <View style={{ zIndex: 3 }}>
          {item.postComments.comments.map((commitem: any, key) => (
            <View style={{ position: 'absolute', top: Number(commitem.relative_y), left: Number(commitem.relative_x) }}>
              <CommentComp item={commitem} />
            </View>
          ))}
        </View>
        <TouchableRipple rippleColor='rgba(255,255,255,0.3)' style={{ zIndex: 2, backgroundColor: 'rgba(255,255,255,0)', position: 'absolute', top: 0, bottom: 0, right: 0, paddingRight: 70 }} onPress={() => { }}>
          <View></View>
        </TouchableRipple>
        <GestureDetector gesture={gesture}>
          <Animated.View style={{ flex: 1 }}>
            <Animated.View style={[{ width: 20, height: 20, position: 'absolute', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: 90, borderWidth: 3, borderColor: 'rgba(255,255,255,0.6)' }, tabPositionAnimation]} >
            </Animated.View>
          </Animated.View>
        </GestureDetector>
        <Animated.View style={[{ position: 'absolute', zIndex: 10, marginTop: 20, }, inputPosition, tabPositionAnimation]}>
          {showCommentBox ?
            <View style={{ flexDirection: 'row' }}>
              <TextInput disabled={false} autoFocus mode='outlined' multiline maxLength={90}
                ref={refInput}
                style={{ width: 200, zIndex: 5, backgroundColor:'rgba(255,255,255,0.85)', paddingRight:30 }}
                onChangeText={(text) => { setCommentInput(text) }}
              />
              <TouchableRipple
                style={{ marginLeft:-40, zIndex:6, paddingHorizontal: 6, marginTop:6, alignItems: 'center', justifyContent:'center', borderTopRightRadius:6, borderBottomRightRadius:6 }}
                onPress={() => {
                  item.postComments.addComment({
                    commentID: 99,
                    commentText: commentInput,
                    relative_x: tabCoordinates.value.x.toString(),
                    relative_y: tabCoordinates.value.y.toString(),
                    userIdentity: userID
                  })
                }}
              >
                <Ionicons name="send" size={24} color="black" />
              </TouchableRipple>
            </View>
            : null
          }
        </Animated.View>
        <TouchableOpacity style={{ zIndex: 4, position: 'absolute', bottom: 6, right: 12 }}>
          <Ionicons name="eye" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={{ zIndex: 14, position: 'absolute', bottom: 8, right: 52 }}
          onPress={() => {
            console.log(tabCoordinates.value)
            setCommentBox(!showCommentBox)
          }}
        >
          <Ionicons name="chatbubble" size={22} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <Layout>
        <Layout style={{ marginTop: 6, marginBottom: 6, marginLeft: 12, flexDirection: 'row' }}>
          <EvilIcons name="heart" size={32} color="black" />
          <EvilIcons name="comment" size={32} color="black" />
        </Layout>
        <Layout style={{ marginLeft: 12, marginBottom: 20 }}>
          <Layout style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/mark-adriane.jpg')} style={{ width: 36, height: 36, borderRadius: 60, borderColor: 'purple', borderWidth: 4 }} />
            <Text style={{ marginLeft: 6, fontWeight: '600' }}>Georgia</Text>
            <Text style={{ marginLeft: 6 }}>Hey, this suit is adorable!</Text>
          </Layout>
        </Layout>
      </Layout>
      <Modal
        style={{}}
        visible={false}
        backdropStyle={{ backgroundColor: 'rgba(0,0,0,0)' }}
      >
        <Card></Card>
      </Modal>
    </Layout>
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

export default CommentableImage