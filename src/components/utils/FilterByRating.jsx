import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { updateQuery } from "../../store/features/FilterSlice";

const FilterByRating = () => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);

  return (
    <>
      <h6>Filter By Rating</h6>
      <div className="rating d-flex align-items-center">
        <ReactStars
          activeColor="#ff9b00"
          onChange={(value) =>
            dispatch(updateQuery({ key: "rating", value: value }))
          }
          isHalf={true}
          size={24}
        />
      </div>
    </>
  );
};

export default FilterByRating;
