import { configureStore } from "@reduxjs/toolkit";
import topics from "../features/topics/topicsSlice";
export default configureStore({
  reducer: { topics },
});
