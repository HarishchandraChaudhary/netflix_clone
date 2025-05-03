import {configureStore}from "@reduxjs/toolkit";
import userReducer from "./userSlice";
const store = configureStore({
    name:"app",
    reducer:{
        user:userReducer
    }
})
export default store;