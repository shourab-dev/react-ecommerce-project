import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getApiData } from "../../helpers/getApiData";
const FilterCategory = ({ selectedCategory }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getApiData("products/categories").then((res) => setCategories(res));
  }, []);

  return (
    <FilterWrapper className={`col-lg-3`}>
      <select
        onChange={(e) => selectedCategory(e.target.value)}
        defaultValue={"defaultValue"}
      >
        <option value={"defaultValue"} disabled >
          Select a Category
        </option>
        {categories?.map((category, index) => {
          return (
            <option key={category} value={category}>
              {category.toUpperCase()}
            </option>
          );
        })}
      </select>
    </FilterWrapper>
  );
};

const FilterWrapper = styled.div`
  select {
    width: 100%;
    border: none;
    border: 1px solid #ccc;
    padding: 8px 15px;
  }
  select:focus {
    outline: none;
  }
`;

export default FilterCategory;
