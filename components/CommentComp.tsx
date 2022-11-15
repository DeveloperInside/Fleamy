import { View, Text, Image, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import { appStyles } from '../styles/AppStyles'
import { Layout } from '@ui-kitten/components'

export default function CommentComp({ item }) {
    const [visibleComment, setVisibleComment] = useState(false)
    const windowWidth = Dimensions.get('window').width;
    //
    const shouldReverse = item.relative_x > windowWidth / 2 ? true : false
    console.log('should reverse: ' + shouldReverse)
    return (
        <Pressable style={visibleComment ? { zIndex: 10 } : { zIndex: 1 }} onPressIn={() => { setVisibleComment(true); }} onPressOut={() => { setVisibleComment(false) }}>
            <View style={styles.rowView}>
                <Image style={[styles.userImage35]} source={{ uri: item.userIdentity.profilePhoto }} />
                {visibleComment ?
                    <View style={[styles.onImageCommentContainer, shouldReverse ? { right: 0, marginRight: 50 } : { left: 0, marginLeft: 50 }]}>
                            <Layout style={styles.onImageCommentLayout}>
                            <Text style={styles.usernameText}>{item.userIdentity.username}</Text><Text style={{  }}>{item.commentText}</Text>
                            </Layout>
                    </View> : null}
            </View>
        </Pressable>
    )
}

const styles = appStyles