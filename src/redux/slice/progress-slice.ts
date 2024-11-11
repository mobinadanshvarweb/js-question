import { createSlice } from "@reduxjs/toolkit";

export interface ProgressState {
  know: number;
  learn: number;
  skip: number;
  currentQuestionIndex: number;
  number: number;
  bar: number;
}
const initialState: ProgressState = {
  know: 0,
  learn: 0,
  skip: 0,
  currentQuestionIndex: 0,
  number: 0,
  bar: 0,
};
export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setKnow: (state) => {
      state.know = state.know + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 1.4;
    },
    setLearn: (state) => {
      state.learn = state.learn + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 1.4;
    },
    setSkip: (state) => {
      state.skip = state.skip + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 1.4;
    },
    setNext: (state) => {
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 1.4;
    },
    setPreviouse: (state) => {
      if (state.number == 0) return;
      state.number = state.number - 1;
      state.currentQuestionIndex = state.currentQuestionIndex - 1;
      state.bar = state.bar - 1.4;
    },
    restart: () => {
      return initialState;
    },
  },
});
export const { setKnow, setLearn, setSkip, setNext, setPreviouse, restart } =
  progressSlice.actions;

export default progressSlice.reducer;
