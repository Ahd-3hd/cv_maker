import { createSlice } from "@reduxjs/toolkit";
import { submit } from "./actions";

const initialState = {
  progress: 0,
  questions: [
    {
      id: "name",
      question: "Enter your full name",
    },
    {
      id: "position",
      question: "Enter your position",
    },
    {
      id: "summary",
      question: "Enter summary",
    },
    {
      id: "email",
      question: "Enter your email",
    },
    {
      id: "phone",
      question: "Enter your phone number",
    },
    {
      id: "linkedin",
      question: "Enter your linkedin profile link",
    },
    {
      id: "website",
      question: "Enter your website",
    },
    {
      id: "jobTitle",
      question: "Enter Job title",
    },
    {
      id: "companyName",
      question: "Enter company name",
    },
    {
      id: "educationName",
      question: "Enter instituation name",
    },
    {
      id: "skills",
      question: "Enter your skills",
    },
    {
      id: "languages",
      question: "Enter languages you speak",
    },
  ],
  userInputs: {},
  submitLoading: false,
  submitError: false,
  pdfUrl: "",
};

const cvSlice = createSlice({
  name: "cv",
  initialState: initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    setProgress: (state, action) => {
      state.progress = action.payload;
    },

    setUserInputs: (state, action) => {
      state.userInputs = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(submit.pending, (state, { payload }) => {
      state.submitLoading = true;
    });
    builder.addCase(submit.fulfilled, (state, { payload }) => {
      state.submitLoading = false;
      state.submitError = false;
      state.pdfUrl = payload;
    });
    builder.addCase(submit.rejected, (state, { payload }) => {
      state.submitLoading = false;
      state.submitError = true;
    });
  },
});

export const { setProgress, setQuestions, setUserInputs } = cvSlice.actions;

export default cvSlice.reducer;
