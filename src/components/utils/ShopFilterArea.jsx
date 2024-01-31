import React from "react";
import styled from "styled-components";
import FilterByPrice from "./FilterByPrice";
import FilterByRating from "./FilterByRating";

const ShopFilterArea = () => {
  return (
    <>
      <ShopFilterWrapper>
        <FilterByPrice />
        <div className="my-3">
          <FilterByRating />
        </div>
      </ShopFilterWrapper>
    </>
  );
};

const ShopFilterWrapper = styled.section`
  padding: 50px 20px;
  height: 100vh;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default ShopFilterArea;
