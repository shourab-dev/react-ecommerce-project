import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import FilterSlice from "./features/FilterSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: FilterSlice,
  },
});
