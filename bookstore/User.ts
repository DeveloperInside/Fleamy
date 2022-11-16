import { applySnapshot, getParent, onSnapshot, types } from "mobx-state-tree";
import { postListModel } from "./PostList";
import { friendListModel } from "./FriendList";
import { initialState } from "../configs/conf_api";
import { getData, storeData } from "../constants/Functions";


export const userModel = types
    .model('User', {
        userID: types.identifier,
        username: types.string,
        profilePhoto: types.string,
        userPosts: types.optional(postListModel, { posts: [] }),
        friends: types.optional(friendListModel, { friends: [] })
    })


export const user: typeof userModel = userModel.create(initialState)

const persist = async () => {
    const savedData = await getData('userData')
    if (savedData) {
        applySnapshot(user, JSON.parse(savedData))
    }
}
persist()

onSnapshot(user, snapshot => { storeData('userData', JSON.stringify(snapshot)) })