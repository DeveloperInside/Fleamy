import { StyleSheet, useWindowDimensions } from "react-native"

export const appStyles = StyleSheet.create({
    c_header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#eee',
        borderTopWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        paddingHorizontal: 12, paddingVertical: 12, borderTopLeftRadius: 12,
        borderTopRightRadius: 12
    },
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    bottomSheetContainer: {
        flex: 1,
        paddingHorizontal: 13,
        paddingBottom: 65
    },
    rowView: {
        flexDirection: 'row'
    },
    rowCentered: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowReverseCentered: {
        // flexDirection: 'row-reverse',
        // position:'absolute',
        right: 0
    },
    alignSelfRight: {
        alignItems: 'flex-end',
        flexGrow: 1,
        paddingRight: 0
    },
    userImage40: {
        width: 40,
        height: 40,
        borderRadius: 60,
        marginRight: 6
    },
    userImage35: {
        width: 35,
        height: 35,
        borderRadius: 90,
    },
    usernameText: {
        fontWeight: '600',
        marginRight: 6
    },
    userText: {
        marginRight: 6,
    },
    commentContainer: {
        paddingVertical: 6,
    },
    postImageBackground: {
        width: '100%',
        minHeight: 350
    },
    scrollSafeArea: {
        backgroundColor: 'rgba(255,255,255,0)',
        zIndex: 2,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        paddingRight: 70
    },
    positionCircle: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderColor: 'rgba(255,255,255,0.6)',
        width: 20,
        height: 20,
        position: 'absolute',
        borderRadius: 90,
        borderWidth: 3,
    },
    onImageCommentContainer: {

        maxWidth: 170,
        height:'auto',
        position: 'absolute',
    },
    onImageCommentLayout:{
        paddingHorizontal: 10,
        paddingVertical: 6,
    },
    onImageCommentInputView: {
        position: 'absolute',
        zIndex: 10,
        marginTop: 20,
    },
    onImageCommentInputBox: {
        width: 200,
        zIndex: 5,
        backgroundColor: 'rgba(255,255,255,0.85)',
        paddingRight: 30
    },
    onImageSendButton:{
        marginLeft: -40, 
        zIndex: 6, 
        paddingHorizontal: 6, 
        marginTop: 6, 
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    showCommentEye:{
        zIndex: 4, position: 'absolute', bottom: 6, right: 12
    },
    showCommentBox:{
        zIndex: 14, 
        position: 'absolute', 
        bottom: 8, 
        right: 52
    },
    bottomIconsLayout:{
        marginTop: 6, 
        marginBottom: 6, 
        marginLeft: 12, 
        flexDirection: 'row'
    }
})