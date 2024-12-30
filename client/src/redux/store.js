import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./features/darkModeSlice";
import userReducer from "./features/userSlice"

// Config store
export const store = configureStore({
  reducer: {
    mode: darkModeReducer,  //darkMode 
    user: userReducer   //isUserAuth
  }
})