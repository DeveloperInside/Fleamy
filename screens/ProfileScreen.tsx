import { View, Text, Image } from 'react-native'
import React from 'react'
import { observer } from 'mobx-react'
import { user } from '../bookstore/User'

function ProfileScreen() {
  return (
    <View>
      <Image source={{ uri: user.profilePhoto }} style={{ width: 75, height: 75, borderRadius: 90 }} />
      <View>
        <Text>{user.username}</Text>
        <Text>{user.friends.friends.length}</Text>
        <Text>{user.userPosts.posts.length}</Text>
      </View>
      <View>
        {user.userPosts.posts.map((item, key) => (
          <View key={key} style={{}}>
            <Image source={{ uri: item.postPhoto }} style={{ width: 100, height: 100, borderRadius: 6 }} />
          </View>
        ))}
      </View>
    </View>
  )
}
export default observer(ProfileScreen)