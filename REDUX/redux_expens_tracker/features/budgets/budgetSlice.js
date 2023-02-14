import { createSlice } from "@reduxjs/toolkit";

export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = CATEGORIES.map((category) => ({
  category: category,
  amount: 0,
}));

const budgetsSlice = createSlice({
  name: "budgets",
  initialState: initialState,
  reducers: {
    editBudget: (action, state) => {
      state.category.map((data) => {
        if (data === action.payload.category) {
          data.amount = action.pyload.amount;
        }
      });
    },
  },
});

export const { editBudget } = budgetsSlice;
export default budgetsSlice;
