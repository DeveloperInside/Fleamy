import { View, Text } from 'react-native'
import React from 'react'
import { Card, Modal } from '@ui-kitten/components'
import CommentableImage from './CommentableImage'

export default function PostView({post}) {
  return (
    <View>
      <Modal visible={true}
        style={{ backgroundColor: 'yellow' }}
        backdropStyle={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        onBackdropPress={() => { }}
      >
        <Card>
          <CommentableImage item={post} username={undefined} profilePhoto={post.postPhoto} userID={undefined} />
          <Text>{JSON.stringify(post)}</Text>
        </Card>
      </Modal>
    </View>
  )
}