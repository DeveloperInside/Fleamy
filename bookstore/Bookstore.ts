import axios from "axios";
import { types, flow } from "mobx-state-tree";

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