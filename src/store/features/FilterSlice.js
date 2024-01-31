import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  query: {},
  filteredProducts: []
};

const FilterSlice = createSlice({
  name: "Filter Slice",
  initialState,
  reducers: {
    setProducts: (state, actions) => {
      state.products = actions.payload;
      state.filteredProducts = state.products
    },
    filerProducts: (state, actions) => {
      const { price ,rating} = actions.payload;
      
      // const result = state.products.filter((product) => {
      //   let newProducts = null;
      //   if (product.price <= price) {
      //       newProducts = product
      //     }
      //     if (Math.round(product.rating.rate) === rating) {
      //       newProducts = {product};
            
      //     }
      //     return newProducts;
      //   });


      //* NEW APPROCH
      let newProducts = {};
      if(price){
        if(Object.keys(newProducts).length > 0){
            newProducts = newProducts.filter(item => item.price <= price)
        }else{
            newProducts = state.filteredProducts.filter((item) => item.price <= price);
        }
      }
      if(rating){
        if (Object.keys(newProducts).length > 0) {
          newProducts = newProducts.filter(
            (item) => Math.round(item.rating.rate) == rating
          );
        } else {
          newProducts = state.filteredProducts.filter(
            (item) => Math.round(item.rating.rate) == rating
          );
        }
      }


        

      state.filteredProducts = newProducts;
    },
    updateQuery: (state, actions) => {
      const { key, value } = actions.payload;
      const newState = { ...state.query };
      newState[`${key}`] = value;
      state.query = newState;
    },
  },
});

export const { filerProducts, setProducts, updateQuery } = FilterSlice.actions;

export default FilterSlice.reducer;
