import { createAsyncThunk } from "@reduxjs/toolkit";
import submitData from "../../../api/submitData";

//TODO: correct types
export const submit = createAsyncThunk("cv/submit", async (data: {}) => {
  return await submitData(data);
});
