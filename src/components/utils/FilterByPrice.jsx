import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuery } from "../../store/features/FilterSlice";
const FilterByPrice = () => {
  const dispatch = useDispatch();
  const [price, setPrice] = useState(50);
  // const { query } = useSelector((state) => state.product);
  return (
    <>
      <h6>Filter By Price</h6>
      <div className="price-filter row">
        <label className="col">
          Price ${price}<br />
          <input
            className="w-100 "
            type="range"
            min="0"
            max="500"
            value={price}
            placeholder="$0"
            onInput={(e) => {
              dispatch(updateQuery({ value: e.target.value, key: "price" }));
              setPrice(Number(e.target.value));
            }}
          />
        </label>
        {/* <label className="col">
          Max
          <input
            className="form-control"
            type="number"
            min="0"
            placeholder="$800"
            onFocus={(e) =>
              dispatch(updateQuery({ value: e.target.value, key: "max" }))
            }
          />
        </label> */}
      </div>
    </>
  );
};

export default FilterByPrice;
