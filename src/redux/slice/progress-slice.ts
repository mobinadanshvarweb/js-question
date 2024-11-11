import { createSlice } from "@reduxjs/toolkit";

export interface ProgressState {
  know: number;
  learn: number;
  skip: number;
  currentQuestionIndex: number;
  number: number;
  bar: number;
  show: boolean;
}
const initialState: ProgressState = {
  know: 0,
  learn: 0,
  skip: 0,
  currentQuestionIndex: 0,
  number: 0,
  bar: 0,
  show: false,
};
export const progressSlice = createSlice({
  name: "progress",
  initialState,
  reducers: {
    setKnow: (state) => {
      if (state.number == 25) return;
      state.know = state.know + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 4;
      state.show = false;
    },
    setLearn: (state) => {
      if (state.number == 25) return;
      state.learn = state.learn + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 4;
      state.show = false;
    },
    setSkip: (state) => {
      if (state.number == 25) return;
      state.skip = state.skip + 1;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 4;
      state.show = false;
    },
    setNext: (state) => {
      if (state.number == 25) return;
      state.number = state.number + 1;
      state.currentQuestionIndex = state.currentQuestionIndex + 1;
      state.bar = state.bar + 4;
      state.show = false;
    },
    setPreviouse: (state) => {
      if (state.number == 0) return;
      state.number = state.number - 1;
      state.currentQuestionIndex = state.currentQuestionIndex - 1;
      state.bar = state.bar - 4;
      state.show = false;
    },
    setShow: (state) => {
      state.show = !state.show;
    },
    restart: () => {
      return initialState;
    },
  },
});
export const {
  setKnow,
  setLearn,
  setSkip,
  setNext,
  setPreviouse,
  setShow,
  restart,
} = progressSlice.actions;

export default progressSlice.reducer;
