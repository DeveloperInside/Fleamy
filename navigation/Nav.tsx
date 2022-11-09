import React, { useState } from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { CurvedBottomBar } from 'react-native-curved-bottom-bar';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons, Foundation, Octicons  } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import ShareScreen from '../screens/ShareScreen';
import CommentScreen from '../screens/CommentScreen';

export const Nav = () => {
  
  //*for featured media
  const [featuredBase64String, setFeaturedBase64String] = useState('')
  const [featuredPathString, setFeaturedPathString] = useState('')

  const _renderIcon = (routeName: string, selectedTab: string) => {

    type iconTypes = 'home' | 'circle' | 'flame'
    let icon:iconTypes = 'home';

    switch (routeName) {
      case 'title1':
        icon = 'home';
        break;
      case 'title2':
        icon = 'circle';
        break;
      case 'title3':
        icon = 'flame';
        break;
    }

    return (
      <Octicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? 'black' : 'gray'}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={0.5}
          strokeColor="#DDDDDD"
          height={55}
          circleWidth={55}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          screenOptions={{headerShown:false}}
          renderCircle={({ selectedTab, navigate, routeName }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  // Alert.alert('Click Action')
                  navigate(routeName)
                }}>
                {/* <Ionicons name={'apps-sharp'} color="gray" size={25} /> */}
                {_renderIcon(routeName, selectedTab)}
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="title1"
            position="LEFT"
          >
            {props => <CommentScreen />}
          </CurvedBottomBar.Screen>
          <CurvedBottomBar.Screen
            name="title2"
            position="RIGHT"
          >
            {props => <ProfileScreen />}
          </CurvedBottomBar.Screen>
          <CurvedBottomBar.Screen
            name='title3'
            position='CENTER'
          >
            {props => <ShareScreen pathArray={[featuredPathString, setFeaturedPathString]} base64Array={[featuredBase64String, setFeaturedBase64String]} />}
          </CurvedBottomBar.Screen>
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  img: {
    width: 30,
    height: 30,
  },
});