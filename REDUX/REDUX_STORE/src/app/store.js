// Import createStore and combineReducers here.
import { createStore, combineReducers } from "redux";
// Import the slice reducers here.
import { cartReducer } from "../features/cart/cartSlice.js";
import { currencyFilterReducer } from "../features/currencyFilter/currencyFilterSlice.js";
import { inventoryReducer } from "../features/inventory/inventorySlice.js";
import { searchTerm } from "../features/searchTerm/searchTermSlice.js";
// Create and export the store here.
const reducers = {
  cart: cartReducer,
  currencyFilter: currencyFilterReducer,
  inventory: inventoryReducer,
};

export const store = createStore(combineReducers(reducers));
