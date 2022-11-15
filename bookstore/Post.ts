import { getParent, types } from "mobx-state-tree";
import { commentModel } from "./Comment";
import { commentListModel } from "./CommentList";
import { postListModel } from "./PostList";
import { userModel } from "./User";


export const postModel = types
    .model('Post', {
        postID: types.identifierNumber,
        postMessage: types.string,
        postPhoto: types.string,
        postComments: types.optional(commentListModel, { comments: [] }),
        userIdentity: types.maybe(types.reference(types.late(() => userModel)))
    }).actions(self => ({
        remove() {
            // 1 up is items array, 2 up is the ItemList
            getParent<typeof postListModel>(self, 2).deletePost(self)
        }
    }))