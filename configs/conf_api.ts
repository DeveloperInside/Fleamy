import axios from "axios";
import { cast, castToSnapshot, IArrayType, IModelType, IMSTArray, ISimpleType, IStateTreeNode, types, unprotect, _NotCustomized, flow, toGenerator } from "mobx-state-tree";
import { } from "../configs/conf_api";

//------------------------------------------
export const theme = types
    .model({
        myTheme: types.union(types.literal('light'), types.literal('dark')),
        isDarkMode: false,
    })
    .actions(self => ({
        toggle() {
            self.myTheme = self.myTheme == 'light' ? 'dark' : 'light'
        }
    }))

export const crtheme = theme.create({ myTheme: 'light' })