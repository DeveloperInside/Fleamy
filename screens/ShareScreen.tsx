import { MaterialIcons } from "@expo/vector-icons";
import React, { Component, useState } from "react";
import * as ImagePicker from "expo-image-picker";

import { ScrollView, Pressable, Image, Text, View, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
// import Colors from '../constants/Colors';
import { crtheme } from "../bookstore/Bookstore";
// import { stylist } from '../styles/PublisherPageStyles';
import { Button, Input, Layout } from "@ui-kitten/components";
import { } from "react-native-gesture-handler";
import NeuButton from "../components/NeuButton";


function ShareScreen(props: { pathArray: any; base64Array: any; }, onChange: any) {

    const [pathArray, setPathArray] = props.pathArray;
    const [base64Array, setBase64Array] = props.base64Array;
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
            setPathArray(result.uri);
            setBase64Array(`data:image/${fileExtension};base64,${result.base64}`);
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
            setPathArray(result.uri);
            //image base64 data
            setBase64Array(`data:image/${fileExtension};base64,${result.base64}`);
        }
    };

    return (
        <View style={styles.componentView}>
            <Layout>
                <Input />
            </Layout>
            <Layout style={styles.galleryView}>
                {pathArray ? <Pressable
                    style={styles.galleryPhotoDeleteButton}
                    hitSlop={5}
                    onPress={() => {
                        // var delIndex = pathArray.indexOf(item);
                        setPathArray('');
                        setBase64Array('');
                        console.log("item removed");
                    }}
                >
                    <MaterialIcons name="delete-forever" size={24} color="white" />
                </Pressable> : null}
                {pathArray ? <Image source={{ uri: pathArray }} style={styles.featuredImage}></Image> : <ImageBackground source={require('../assets/adaptive-icon.png')} style={styles.featuredImage} />}
            </Layout>
            <Layout style={styles.componentRowView}>
                <View style={styles.roundedButtonContainer}>
                    <TouchableOpacity style={styles.roundedButton}
                        onPress={() => {
                            showImagePicker()
                        }}>
                        <MaterialIcons name="photo-library" size={28} color="#e04f4a" />
                    </TouchableOpacity>
                </View>
                <Pressable style={({ pressed }) => pressed ? styles.galleryButtonPressed : styles.galleryButton}
                    onPress={() => {
                        openCamera()
                    }}>
                    <MaterialIcons name="add-a-photo" size={28} color="#e04f4a" />
                </Pressable>
            </Layout>
        </View>
    );
}


const styles = StyleSheet.create({
    componentView: {
        flex: 1,
        marginTop: 36,
        marginBottom: 12
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
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 13 },
        shadowRadius: 2,
        shadowOpacity: 0.8,
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
