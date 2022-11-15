import { getParent, types } from "mobx-state-tree";
import { commentListModel } from "./CommentList";
import { user, userModel } from "./User";


export const commentModel = types
    .model('Comment',{
        commentID: types.identifierNumber,
        commentText: types.string,
        relative_x: types.string,
        relative_y: types.string,
        userIdentity: types.reference(types.late(() => userModel))
    })
    .actions(self => ({
        remove() {
            // 1 up is items array, 2 up is the ItemList
            getParent<typeof commentListModel>(self, 2).delete(self)
        }
    }))
    .views(self => ({
        // user(){
        //     return getParent(self, 3)
        // }
    }))