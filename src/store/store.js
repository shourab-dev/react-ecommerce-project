import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./features/CartSlice";
import FilterSlice from "./features/FilterSlice";
import AuthSlice from "./features/AuthSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: FilterSlice,
    auth: AuthSlice,
  },
});
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
