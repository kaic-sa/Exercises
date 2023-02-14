import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

const topics = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: (action, state) => {
      const { id, name, icon } = action.payload;
      state.id = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    }
  }
});
export const selectTopics = (state = state.topics.topics);
export default topics;
