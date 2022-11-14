import { types } from "mobx-state-tree";
import { friendModel } from "./Friend";
import { userModel } from "./User";

export const friendListModel = types
    .model({
        friends: types.array(types.late(()=> userModel))
    })