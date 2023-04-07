import postsReducer from "../features/posts/postSlice";
import usersReducer from "../features/users/usersSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
export default store;
