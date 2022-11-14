import { getParent, types } from "mobx-state-tree";
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
        
    }))
    .views(self => ({
        // user(){
        //     return getParent(self, 3)
        // }
    }))