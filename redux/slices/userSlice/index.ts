import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login } from "./actions";

const initialState = {
  email: "",
  accessToken: "",
  loggedIn: false,
  loginError: false,
  loading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, { payload }) => {
      state.loading = true;
    });

    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.loginError = false;
      state.loggedIn = true;
      state.accessToken = payload.accessToken;
      state.email = payload.email;
    });

    builder.addCase(login.rejected, (state, { payload }) => {
      state.loading = false;
      state.loginError = false;
    });
  },
});

export default userSlice.reducer;
