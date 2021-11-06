import { createSlice } from "@reduxjs/toolkit";

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
});

export const { setProgress, setQuestions, setUserInputs } = cvSlice.actions;

export default cvSlice.reducer;
