import { Tuple, configureStore } from "@reduxjs/toolkit";
import UserReducer from '../features/user/UserSlice'
import { thunk } from "redux-thunk";

export const Store = configureStore({
    reducer:{
        user:UserReducer,
        middleware: () => new Tuple(thunk)
    }
})
