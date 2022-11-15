import { types } from "mobx-state-tree";
import { postModel } from "./Post";

export const postListModel = types
    .model('PostList',{
        posts: types.array(postModel)
    }).actions(self => ({
        sharePost(post){
            self.posts.push(post)
        },
        deletePost(post){
            self.posts.splice(self.posts.indexOf(post), 1)
        },
    }))