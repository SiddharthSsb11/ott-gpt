import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});

export default appStore;
