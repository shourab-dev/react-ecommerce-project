import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CartSlice = createSlice({
  name: "cart slice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(state.value);
    },
  },
});

export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
