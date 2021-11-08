import { createAsyncThunk } from "@reduxjs/toolkit";
import submitData from "../../../api/submitData";

export const submit = createAsyncThunk("cv/submit", async (userInput: {}) => {
  return await submitData(userInput);
});
