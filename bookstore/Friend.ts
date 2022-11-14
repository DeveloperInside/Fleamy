import { types } from "mobx-state-tree";
import { postListModel } from "./PostList";
import { userModel } from "./User";


export const friendModel = types
    .model('Friend', {
        userID: types.identifier,
        username: types.string,
        profilePhoto: types.string,
        userPosts: types.optional(postListModel, { posts: [] })
    })


// export const user = friendModel.create({ userID: 0, username: 'guest', profilePhoto: '', userComments: {}, userPosts: {} })
