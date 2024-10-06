import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";
import gptSearchSlice from "./gptSearchSlice";
import configSlice from "./configSlice"

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
    GPT: gptSearchSlice,
    config: configSlice,
  },
});
export default appStore;
