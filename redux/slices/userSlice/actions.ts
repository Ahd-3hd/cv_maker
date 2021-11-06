import { createAsyncThunk } from "@reduxjs/toolkit";
import loginApi from "../../../api/loginApi";
import { ILoginCredentials } from "../../../interfaces/user.interface";

export const login = createAsyncThunk(
  "user/login",
  async (credentials: ILoginCredentials) => {
    return await loginApi(credentials);
  }
);
