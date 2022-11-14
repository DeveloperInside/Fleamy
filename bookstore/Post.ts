import { types } from "mobx-state-tree";
import { commentModel } from "./Comment";
import { commentListModel } from "./CommentList";
import { userModel } from "./User";


export const postModel = types
    .model('Post',{
        postID: types.identifierNumber,
        postMessage: types.string,
        postPhoto: types.string,
        postComments: types.optional(commentListModel, { comments: [] }),
        userIdentity: types.maybe(types.reference(types.late(() => userModel)))
    })