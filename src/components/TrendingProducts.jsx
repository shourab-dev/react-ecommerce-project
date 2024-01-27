import React, { lazy, useEffect, useState } from "react";
import styled from "styled-components";

const FilterCategory = lazy(() => import("./utils/FilterCategory"));
import { getApiData } from "../helpers/getApiData";
import ProductWrapper from "./utils/ProductWrapper";

const TrendingProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    let url =
      selectedCategory != null
        ? `products/category/${selectedCategory}`
        : "products";
    getApiData(url).then((res) => setProducts(res));
  }, [selectedCategory]);

  return (
    <TrendingProductWrapper>
      <div className="container">
        <div className="row justify-content-end">
          <FilterCategory
            selectedCategory={(value) => setSelectedCategory(value)}
          />
        </div>

        <div className="mt-4">
          <ProductWrapper  products={products} />
        </div>
      </div>
    </TrendingProductWrapper>
  );
};

const TrendingProductWrapper = styled.section`
  margin: 80px 0;
`;

export default TrendingProducts;
