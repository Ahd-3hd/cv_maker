import { Platform } from "react-native";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import loginApi from "../../../api/loginApi";
import { ILoginCredentials } from "../../../interfaces/user.interface";

export const login = createAsyncThunk(
  "user/login",
  async (credentials: ILoginCredentials) => {
    try {
      return await loginApi(credentials);
    } catch (error) {
      console.log(error);
    }
  }
);
