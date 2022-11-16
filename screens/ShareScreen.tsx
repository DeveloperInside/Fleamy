import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { ScrollView, Pressable, Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity, Alert } from "react-native";
// import Colors from '../constants/Colors';
import { crtheme } from "../bookstore/Bookstore";
// import { stylist } from '../styles/PublisherPageStyles';
import { Button, Input, Layout } from "@ui-kitten/components";
import NeuButton from "../components/NeuButton";
import { TextInput } from "react-native-paper";
import { Octicons, Ionicons } from '@expo/vector-icons';
import { user } from "../bookstore/User";


function ShareScreen() {

    const [path, setPath] = useState('');
    const [base64, setBase64] = useState('');

    const [postMessage, setPostMessage] = useState('')

    type resultType = any
    //* imagePath to show on the screen
    // This function is triggered when the "Select an image" button pressed
    // const styles = stylist()
    const showImagePicker = async () => {

        // Ask the user for the permission to access the media library
        const permissionResult =
            await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }


        const result: resultType = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            allowsEditing: true,
        });

        // Explore the result
        console.log(result);

        if (!result.cancelled) {
            let fileExtension = result.uri.substr(result.uri.lastIndexOf(".") + 1);
            //image path for showing on the screen
            setPath(result.uri);
            setBase64(`data:image/${fileExtension};base64,${result.base64}`);
        }
    };

    // This function is triggered when the "Open camera" button pressed
    const openCamera = async () => {
        // Ask the user for the permission to access the camera
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("You've refused to allow this appp to access your camera!");
            return;
        }

        const result: resultType = await ImagePicker.launchCameraAsync({
            base64: true,
            allowsEditing: true,
        });

        if (!result.cancelled) {
            let fileExtension = result.uri.substr(result.uri.lastIndexOf(".") + 1);
            //image path for showing on the screen
            setPath(result.uri);
            //image base64 data
            setBase64(`data:image/${fileExtension};base64,${result.base64}`);
        }
    };

    return (
        <Layout style={styles.componentView}>
            <View>
                <TextInput mode='outlined' placeholder='Description' label={'Description'}
                    style={{ marginBottom: 20 }}
                    onChangeText={(text) => {
                        setPostMessage(text)
                    }}
                />
            </View>
            <View style={styles.galleryView}>
                {path ? <Pressable
                    style={styles.galleryPhotoDeleteButton}
                    hitSlop={5}
                    onPress={() => {
                        // var delIndex = pathArray.indexOf(item);
                        setPath('');
                        setBase64('');
                        console.log("item removed");
                    }}
                >
                    <MaterialIcons name="delete-forever" size={24} color="white" />
                </Pressable> : null}
                {path ? <Image source={{ uri: path }} style={styles.featuredImage}></Image> : <ImageBackground source={require('../assets/adaptive-icon.png')} style={styles.featuredImage} />}
            </View>
            <View style={[styles.componentRowView, { marginTop: 20 }]}>
                <Pressable style={({ pressed }) => pressed ? styles.galleryButtonPressed : styles.galleryButton}
                    onPress={() => {
                        showImagePicker()
                    }}>
                    <Ionicons name="images-outline" size={28} color="black" />
                </Pressable>
                <Pressable style={({ pressed }) => pressed ? styles.galleryButtonPressed : styles.galleryButton}
                    onPress={() => {
                        openCamera()
                    }}>
                    <Ionicons name="camera-outline" size={28} color="black" />
                </Pressable>
            </View>
            <Pressable style={({ pressed }) => pressed ? styles.shareButtonPressed : styles.shareButton}
                onPress={() => {
                    if (postMessage && path) {
                        user.userPosts.sharePost({
                            postID: 99,
                            postMessage: postMessage,
                            postPhoto: path,
                            postComments: {
                                comments: []
                            }
                        })
                        Alert.alert('Successful','Your post has been shared. Just go to your profile to have a look.')
                        setPostMessage('')
                        setPath('')
                    } else {
                        Alert.alert('There are Gaps!','Please set an image and a description!')
                    }

                }}
            >
                <Octicons name='flame' size={28} color='black' />
            </Pressable>
        </Layout>
    );
}


const styles = StyleSheet.create({
    shareButton: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingHorizontal: 32,
        paddingVertical: 28,
        borderRadius: 90,
        elevation: 3,
        marginTop: 6
    },
    shareButtonPressed: {
        backgroundColor: 'white',
        alignSelf: 'center',
        paddingHorizontal: 32,
        paddingVertical: 28,
        borderRadius: 90,
        elevation: 0,
        marginTop: 6,
        transform: [{ scale: 0.9 }]
    },
    componentView: {
        flex: 1,
        paddingHorizontal: 20
    },
    componentRowView: {
        flexDirection: 'row',
    },
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    centerRowFlex: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    spaceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    galleryButtonView: {
        // backgroundColor: theme.inputField,
        // borderColor: theme.border,
        borderWidth: 1,
        borderRightWidth: 0,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4
    },
    galleryButton: {
        backgroundColor: '#fff',
        elevation: 2,
        padding: 15,
        margin: 5,
        borderRadius: 4,
        width: '50%',
        alignItems: 'center'
    },
    galleryButtonPressed: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 6,
        borderRadius: 4,
        width: '50%',
        alignItems: 'center',
        transform: [{ scale: 0.95 }]
    },
    galleryScrollView: {
        flex: 1,
        // backgroundColor: theme.inputField,
        // borderColor: theme.border,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    galleryView: {
        marginHorizontal: 5,
    },
    galleryPhotoDeleteButton: {
        backgroundColor: 'red',
        opacity: 0.8,
        marginBottom: -40,
        marginRight: 6,
        marginTop: 15,
        padding: 5,
        alignSelf: "flex-end",
        borderRadius: 36,
        elevation: 5,
        zIndex: 5,
    },
    featuredImage: {
        height: 350,
        resizeMode: 'cover',
        borderRadius: 4,
        backgroundColor: '#bbb'
    },
    roundedButtonContainer: {
        height: 80,
        width: '50%',
        backgroundColor: '#fefefe',
        shadowColor: '#eee',
        shadowOpacity: 0.5,
        shadowRadius: 1,
        borderRadius: 5,
        shadowOffset: {
            height: 2,
            width: 2,
        },
        border: 1,
        marginBottom: 20,
        elevation: 1,

    },
    roundedButton: {
        height: 80,
        // width: 80,
        shadowColor: '#e04f4a',
        shadowOpacity: 0.7,
        shadowRadius: 1,
        borderRadius: 5,
        shadowOffset: {
            height: -3,
            width: -3,
        },
        border: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 1,
    },
});

export default ShareScreen;
