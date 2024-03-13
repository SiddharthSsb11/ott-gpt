import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSliceReducer from "./movieSlice";
import gptSlicereducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movie: movieSliceReducer,
    gpt: gptSlicereducer,
  },
});

export default appStore;
