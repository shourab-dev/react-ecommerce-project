import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ShopFilterArea from "../components/utils/ShopFilterArea";
import ProductWrapper from "../components/utils/ProductWrapper";
import { useDispatch, useSelector } from "react-redux";
import { getApiData } from "../helpers/getApiData";
import { setProducts,filerProducts } from "../store/features/FilterSlice";
const Shop = () => {
  const dispatch = useDispatch();

  let {filteredProducts} = useSelector((state) => state.product);
  let { query } = useSelector((state) => state.product);

  //* GET ALL PRODUCTS
  useEffect(() => {
    getApiData(`products`).then((res) => {
      dispatch(setProducts(res));
    });
  }, []);
  //* GET FILTERING
  useEffect(() => {
    if (Object.keys(query).length > 0) {
      dispatch(filerProducts(query));
      
    }

  }, [query]);

  return (
    <ShopPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <ShopFilterArea />
          </div>
          <div className="col-lg-8">
            <ProductWrapper
              items={{ lg: 3, xl: 3, xxl: 3 }}
              products={filteredProducts}
            />
          </div>
        </div>
      </div>
    </ShopPageWrapper>
  );
};

const ShopPageWrapper = styled.section`
  padding: 50px 0;
`;

export default Shop;
