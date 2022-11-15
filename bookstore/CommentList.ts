import { IModelType, ISimpleType, IStateTreeNode, types, _NotCustomized } from "mobx-state-tree";
import { NonEmptyObject } from "mobx-state-tree/dist/internal";
import { commentModel } from "./Comment";

export const commentListModel = types
    .model('CommentList',{
        comments: types.array(commentModel)
    })
    .actions(self => ({
        addComment(comm: { commentID: number; commentText: string; relative_x: string; relative_y: string; } & NonEmptyObject & IStateTreeNode<IModelType<{ commentID: ISimpleType<number>; commentText: ISimpleType<string>; relative_x: ISimpleType<string>; relative_y: ISimpleType<string>; }, {}, _NotCustomized, _NotCustomized>>){
            // self.comments.push({...self.comments, commentID: comm.commentID, commentText:comm.commentText, relative_x:comm.relative_x, relative_y:comm.relative_y})
            // console.log('item added')
            self.comments.push(comm)
        },
        delete(comment){
            self.comments.splice(self.comments.indexOf(comment), 1)
        }
    }))