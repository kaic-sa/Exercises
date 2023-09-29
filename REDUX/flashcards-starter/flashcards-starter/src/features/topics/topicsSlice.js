import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducer: {
    addTopic: (state, action) => {
      const { name, id, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
});
export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;
