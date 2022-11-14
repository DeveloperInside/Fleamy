import { View, Text, Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@ui-kitten/components'
import { user } from '../bookstore/User'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'

export default function CommentComp({ item }) {
    const [visibleComment, setVisibleComment] = useState(false)

    const gesture = Gesture.Pan()
        .onBegin((e) => {
            'worklet';
            console.log('abc begin')
            // setVisibleComment(true);
        })
        .onUpdate((e) => {
            'worklet';
        })
        .onStart((e) => {
            'worklet';
            console.log('tapped cccc: ' + JSON.stringify(e.x + '---' + e.y))
            console.log('abc start')
            // setVisibleComment(true);
        })
        .onEnd((e) => {
            'worklet';
            console.log('abc ended')
            // setVisibleComment(false);
        })
        .onFinalize((e) => {
            'worklet';
            console.log('abc finalize')
            // setVisibleComment(false);

        });

    return (
            <Pressable style={{}} onPressIn={() => { setVisibleComment(true); console.log('touch in') }} onPressOut={() => { setVisibleComment(false) }}>
                <View>
                    <Image style={{ width: 35, height: 35, borderRadius: 90 }} source={{ uri: item.userIdentity.profilePhoto }} />
                    {visibleComment ? <Text>{item.commentText}</Text> : null}
                </View>
            </Pressable>
    )
}