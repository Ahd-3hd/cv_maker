import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import cvReducer from "./slices/cvSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cv: cvReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
