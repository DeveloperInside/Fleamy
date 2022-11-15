import { View, Text, ImageBackground, StyleSheet, Image, TouchableOpacity, FlatList, Keyboard, KeyboardEvent, Modal as RNModal } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';
import { Avatar, Button, Card, Input, Layout, Modal, Popover } from '@ui-kitten/components';
import { MaterialIcons, Fontisto, EvilIcons, Ionicons, Feather, Entypo } from '@expo/vector-icons';
import { user } from '../bookstore/User';
import CommentComp from './CommentComp';
import { Portal, Provider, TouchableRipple } from 'react-native-paper';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { appStyles } from '../styles/AppStyles';
import { postModel } from '../bookstore/post';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';


// const CommentableImage = observer((props: { postUserImage: any; postUserName: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; postMessage: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; postPhoto: any; }) => {
const CommentableImage = observer(({ item, username, profilePhoto, userID }: { item: typeof postModel, username: string, profilePhoto: string, userID: string }) => {

  //legacy
  const [myComment, setMyComment] = useState<{ commentID: number, relative_x: string, relative_y: string, commentText: string } | {}>({})
  const [showCommentsList, setCommentsList] = useState(false)

  //show/hide comments - eye button
  const [showComments, setShowComments] = useState(true)

  //show/hide comment box - comment icon
  const [showCommentBox, setCommentBox] = useState(false)

  //comment input
  const [commentInput, setCommentInput] = useState('')

  //bottom sheet modal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // bottom sheet snap points
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // bottom sheet callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);


  function onKeyboardDidShow(e: KeyboardEvent) {
  }

  //comment input ref
  const refInput = useRef(null);

  //blur input when keyboard hides
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

  // device screen width
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

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
      console.log('rx: ' + e.x + '  ry: ' + e.y)
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

  return (
    <Layout style={{ flex: 1 }}>
      <Layout level='1' style={styles.c_header}>
        <Image source={{ uri: profilePhoto }} style={styles.userImage40} />
        <Text style={styles.usernameText}>{username}</Text>
        <Text style={styles.userText}>{item.postMessage}</Text>
      </Layout>
      <ImageBackground source={{ uri: item.postPhoto }} resizeMode='cover' style={styles.postImageBackground}>
        <View style={{ zIndex: 3 }}>
          {showComments ? item.postComments.comments.map((commitem: any, key) => (
            <View style={{ position: 'absolute', top: Number(commitem.relative_y), left: Number(commitem.relative_x) }} key={key}>
              <CommentComp item={commitem} />
            </View>
          )) : null}
        </View>
        <TouchableRipple rippleColor='rgba(255,255,255,0.3)' style={styles.scrollSafeArea} onPress={() => { }}>
          <View></View>
        </TouchableRipple>
        <GestureDetector gesture={gesture}>
          <Animated.View style={{ flex: 1 }}>
            <Animated.View style={[styles.positionCircle, tabPositionAnimation]} >
            </Animated.View>
          </Animated.View>
        </GestureDetector>
        <Animated.View style={[styles.onImageCommentInputView, inputPosition, tabPositionAnimation]}>
          {showCommentBox ?
            <View style={styles.rowView}>
              <TextInput disabled={false} autoFocus mode='outlined' multiline maxLength={90} activeOutlineColor='#0073AA'
                ref={refInput}
                style={styles.onImageCommentInputBox}
                onChangeText={(text) => { setCommentInput(text) }}
              />
              <TouchableOpacity
                style={styles.onImageSendButton}
                onPress={() => {
                  item.postComments.addComment({
                    commentID: 99,
                    commentText: commentInput,
                    relative_x: tabCoordinates.value.x.toString(),
                    relative_y: tabCoordinates.value.y.toString(),
                    userIdentity: user.userID
                  })
                  setCommentInput('')
                  setCommentBox(false)
                }}
              >
                <Ionicons name="send" size={24} color="black" />
              </TouchableOpacity>
            </View>
            : null
          }
        </Animated.View>
        <TouchableOpacity
          onPress={() => {
            setShowComments(!showComments)
          }}
          style={styles.showCommentEye}>
          <Ionicons name={showComments ? "eye" : 'eye-off'} size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.showCommentBox}
          onPress={() => {
            console.log(tabCoordinates.value)
            setCommentBox(!showCommentBox)
          }}
        >
          <Ionicons name="chatbubble" size={22} color="white" />
        </TouchableOpacity>
      </ImageBackground>

      <Layout>
        <Layout style={styles.bottomIconsLayout}>
          <EvilIcons name="heart" size={32} color="black" />
          <EvilIcons name="comment" size={32} color="black" />
        </Layout>
        <Layout style={{ marginLeft: 12, marginBottom: 20 }}>
          {item.postComments.comments.length > 0 ?
            <Layout>
              <Layout style={styles.rowView}>
                <Image source={{ uri: item.postComments.comments[item.postComments.comments.length - 1].userIdentity.profilePhoto }} style={styles.userImage35} />
                <Text style={{ marginLeft: 6, fontWeight: '600' }}>{item.postComments.comments[item.postComments.comments.length - 1].userIdentity.username}</Text>
                <Text style={{ marginLeft: 6, maxWidth: 300 }}>{item.postComments.comments[item.postComments.comments.length - 1].commentText}</Text>
              </Layout>
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => {
                  // setCommentsList(true);
                  handlePresentModalPress();
                  console.log('pressed show comments')
                }}>
                <Text>Show {item.postComments.comments.length} comments</Text>
              </TouchableOpacity>
            </Layout>
            : null}
        </Layout>
      </Layout>
      <Portal>
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
            >
              <ScrollView style={{ marginBottom: 20 }}>
                <View style={styles.bottomSheetContainer}>
                  {
                    item.postComments.comments.map((comment, key) => (
                      <View style={styles.commentContainer} key={key}>
                        <View style={[styles.rowCentered]}>
                          <Image source={{ uri: comment.userIdentity.profilePhoto }} style={styles.userImage40} ></Image>
                          <Text style={styles.usernameText}>{comment.userIdentity.username}</Text>
                          <Text style={[styles.userText, { maxWidth: 240 }]}>{comment.commentText}</Text>
                          {comment.userIdentity.userID == user.userID ?
                            <View style={styles.alignSelfRight}>
                              <TouchableOpacity
                                onPress={() => {
                                  comment.remove()
                                }}
                              ><Feather name="delete" size={24} color="#DC3232" />
                              </TouchableOpacity>
                            </View> : null
                          }
                        </View>
                      </View>
                    ))
                  }
                </View>
              </ScrollView>
            </BottomSheetModal>
          </View>
        </BottomSheetModalProvider>
      </Portal>
    </Layout>
  )
})

const styles = appStyles

export default CommentableImage