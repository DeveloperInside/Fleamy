import { View, Text, ImageBackground, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { observer } from 'mobx-react';
import { Input, Layout } from '@ui-kitten/components';
import { MaterialIcons, Fontisto, EvilIcons, Ionicons } from '@expo/vector-icons';

const CommentableImage = observer(() => {

  const [myComments, setMyComments] = useState<{ commentID: number, x: number, y: number, comment: string }[]>([])

  console.log('comments length: ' + myComments.length)

  const isPressed = useSharedValue(false);
  const tabCoordinates = useSharedValue({ x: 0, y: 0 });
  const gesture = Gesture.LongPress()
    .onBegin((e) => {
      'worklet';
      isPressed.value = true;
    })
    .onStart((e) => {
      'worklet';
      // console.log(e)
      setMyComments([...myComments, { commentID: myComments.length + 1, x: e.x, y: e.y, comment: '' }])
      tabCoordinates.value = {
        x: e.x,
        y: e.y
      }
    })
    .onEnd((e) => {
      'worklet';
    })
    .onFinalize((e) => {
      'worklet';
      isPressed.value = false;
    });

  // const tabPositionAnimation = useAnimatedStyle(() => {
  //   return ({
  //     top: tabCoordinates.value.y,
  //     left: tabCoordinates.value.x
  //   })
  // })

  // const renderComments = () => {
  //   return (
  //     <Animated.View style={[{ width: 10, height: 10, backgroundColor: 'yellow', position: 'absolute' }, tabPositionAnimation]}>
  //       <Input style={{ minWidth: 80 }} />
  //     </Animated.View>
  //   )
  // }

  return (
    <Layout style={styles.container}>
      <Layout level='1' style={{ flexDirection: 'row', alignItems: 'center', borderColor: '#eee', borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1, paddingHorizontal: 12, paddingVertical: 12, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
        <Image source={require('../assets/mark-adriane.jpg')} style={{ width: 36, height: 36, borderRadius: 60, borderColor: 'purple', borderWidth: 4, marginRight: 6 }} />
        <Text style={{ fontWeight: '600', marginRight: 6 }}>Kelly</Text>
        <Text>Can you comment on my outfit?</Text>
      </Layout>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[{}]} >
          <ImageBackground source={require('../assets/mark-adriane.jpg')} resizeMode='cover' style={{ width: '100%', minHeight: 350 }}>
            {myComments.map((item: any) => (
              <Animated.View style={[{ width: 10, height: 10, position: 'absolute', top: item.y, left: item.x }]} key={item.commentID}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                  <Image source={require('../assets/kelly-sikkema.jpg')} style={{ width: 36, height: 36, borderRadius: 60, borderColor: 'yellow', borderWidth: 4 }} />
                  <Input style={{ minWidth: 210, marginLeft:6 }} />
                </View>
              </Animated.View>
            ))}
            <TouchableOpacity style={{ position: 'absolute', bottom: 6, right: 12 }}>
              <Ionicons name="eye" size={24} color="white" />
            </TouchableOpacity>
          </ImageBackground>
        </Animated.View>
      </GestureDetector>
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