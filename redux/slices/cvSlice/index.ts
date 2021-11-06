import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  progress: 0,
  questions: [
    {
      question: "Enter your full name",
    },
    {
      question: "Enter your position",
    },
    {
      question: "Enter summary",
    },
    {
      question: "Enter your email",
    },
    {
      question: "Enter your phone number",
    },
    {
      question: "Enter your linkedin profile link",
    },
    {
      question: "Enter your website",
    },
    {
      question: "Enter Job title",
    },
    {
      question: "Enter company name",
    },
    {
      question: "Enter instituation name",
    },
    {
      question: "Enter your skills",
    },
    {
      question: "Enter languages you speak",
    },
  ],
  fullName: "",
  position: "",
  summary: "",
  contactInformation: {
    email: "",
    phoneNumber: "",
    linkedin: "",
    website: "",
  },
  jobExperience: [],
  education: [],
  skills: [],
  languages: [],
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
    setFullName: (state, action) => {
      state.fullName = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setSummary: (state, action) => {
      state.summary = action.payload;
    },
    setContactInformation: (state, action) => {
      state.contactInformation = action.payload;
    },
    setJobExperience: (state, action) => {
      state.jobExperience = action.payload;
    },
    setEducation: (state, action) => {
      state.education = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
  },
});

export const {
  setProgress,
  setFullName,
  setPosition,
  setSummary,
  setContactInformation,
  setJobExperience,
  setEducation,
  setSkills,
  setLanguages,
  setQuestions,
} = cvSlice.actions;

export default cvSlice.reducer;
