import moviesSlice from "./moviesSlice";
import userSlice from "./userSlice";

import { configureStore } from "@reduxjs/toolkit";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movies: moviesSlice,
  },
});
export default appStore;
