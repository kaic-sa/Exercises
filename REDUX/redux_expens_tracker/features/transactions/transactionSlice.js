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
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionSlice = createSlice({
  name: "transactions",
  initialState: initialState,
  reducers: {
    addTransaction: (action, state) => {
      state.category.map((data) => {
        if (data === action.payload.category) {
          state.data.push(action.payload);
        }
      });
    },
    deleteTransaction: (action, state) => {
      state = state.filter((data) => data.id !== action.payload.id);
    },
  },
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionSlice;
export default transactionSlice;
