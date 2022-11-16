import { View, Text, Image, Dimensions, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'
import { observer } from 'mobx-react'
import { user } from '../bookstore/User'
import { Card, Modal, Popover } from '@ui-kitten/components';
import PostView from '../components/PostView';
import CommentableImage from '../components/CommentableImage';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import { postModel } from '../bookstore/post';
import { Portal, Provider } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width - 38;

const ProfileScreen = observer(() => {

  const [selectedPost, setSelectedPost] = useState<typeof postModel>()
  const [showPostModal, setPostModal] = useState(false)

  const [showSettingsButton, setSettingsButton] = useState(false)

  const SettingsButton = () => {
    return (
      <View style={{ position: 'absolute', zIndex: 2, right: 0, top: 12, }}>
        <TouchableOpacity
          style={{ marginRight: 8, padding: 6 }}
          onPress={() => { setSettingsButton(true) }}
        >
          <Entypo name="dots-three-vertical" size={24} color="black" />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <>
      <Portal.Host>
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
          <View style={{ flexDirection: 'row', paddingHorizontal: 12, paddingTop: 6, paddingBottom: 24, alignItems: 'center' }}>
            <View style={{ paddingHorizontal: 12, alignItems: 'center' }}>
              <Image source={{ uri: user.profilePhoto }} style={{ width: 75, height: 75, borderRadius: 90 }} />
              <Text style={{ fontWeight: '600' }}>{user.username}</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 18 }}>
              <View style={{ paddingHorizontal: 28, paddingVertical: 12, alignItems: 'center' }}>
                <Text>Friends</Text>
                <Text style={{ fontWeight: '600' }}>{user.friends.friends.length}</Text>
              </View>
              <View style={{ paddingHorizontal: 28, paddingVertical: 12, alignItems: 'center' }}>
                <Text>Posts</Text>
                <Text style={{ fontWeight: '600' }}>{user.userPosts.posts.length}</Text>
              </View>
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Text style={{ fontWeight: '600', marginLeft: 12, marginBottom: 8 }}>Posts</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
              {user.userPosts.posts.map((item, key) => (
                <View key={key} style={{ padding: 3 }}>
                  <Pressable
                    style={{}}
                    onPress={() => {
                      setSelectedPost(item)
                      setPostModal(true)
                      console.log('pressed post')
                    }}
                  >
                    <Image source={{ uri: item.postPhoto }} style={{ width: windowWidth / 3, height: windowWidth / 3, borderRadius: 6 }} />
                    {/* <PostView post={item} /> */}
                  </Pressable>
                </View>
              ))}
            </View>
          </View>

        </View>
        {showPostModal ?
          <View style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.5)', top: 0, bottom: 0, left: 0, right: 0 }}>
            <TouchableOpacity
              style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}
              onPress={() => { setPostModal(false) }}
            >
            </TouchableOpacity>
            <View style={{ position: 'absolute', top: 40, bottom: 150, left: 20, right: 20 }}>
              <View style={{ flex: 1 }}>
                <Popover
                  visible={showSettingsButton}
                  anchor={SettingsButton}
                  placement={'bottom end'}
                  onBackdropPress={() => setSettingsButton(false)}
                  style={{ marginTop: 20, marginRight: 6 }}
                >
                  <View style={{ paddingHorizontal: 10, paddingVertical: 10 }}>
                    <TouchableOpacity
                      style={{ flexDirection: 'row-reverse', alignItems: 'center', marginBottom: 12 }}
                      onPress={() => {
                        setPostModal(false)
                        setSettingsButton(false)
                      }}>
                      <MaterialIcons name="close" size={24} color="black" />
                      <Text>Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={{ flexDirection: 'row-reverse', alignItems: 'center' }}
                      onPress={() => {
                        setPostModal(false)
                        selectedPost.remove()
                        setSettingsButton(false)
                      }}>
                      <MaterialIcons name="delete-outline" size={24} color="red" />
                      <Text>Delete Post</Text>
                    </TouchableOpacity>
                  </View>
                </Popover>
                <CommentableImage item={selectedPost} username={user.username} profilePhoto={user.profilePhoto} userID={user.userID} />
              </View>
            </View></View> : null}
      </Portal.Host>
    </>
  )
}
)

export default ProfileScreen