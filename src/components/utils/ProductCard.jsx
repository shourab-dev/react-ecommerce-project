import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ items = {}, product }) => {
  const { sm = 1, md = 3, lg = 4, xl = 4, xxl = 4 } = items;
  return (
    <Product
      className={`my-2  col-sm-${12 / sm} col-md-${12 / md} col-lg-${
        12 / lg
      } col-xl-${12 / xl} col-xxl-${12 / xxl}`}
    >
      <div className="productCnt">
        <div className="productImage">
          <Link to={`/product/${product.id}`}>
            <img loading="lazy" src={product.image} alt="" />
          </Link>
        </div>
        <div className="productDetails">
          <h6>
            <Link to={`/product/${product.id}`}>{product.title}</Link>
          </h6>
          <p className="price mb-0">
            $ <strong>{product.price}</strong>
          </p>
          <div className="rating d-flex align-items-center">
            <ReactStars
              activeColor="#ff9b00"
              value={product.rating.rate}
              isHalf={true}
              size={24}
              edit={false}
            />
            <span className="ms-1"> ({product.rating.count})</span>
          </div>
        </div>
      </div>
    </Product>
  );
};

const Product = styled.div`
  .productCnt {
    border: 1px solid #eee;
    text-align: center;
  }
  .productImage {
    padding: 15px 20px;
  }
  .productImage img {
    max-width: 100%;
    height: 250px;
    
  }
  .productDetails {
    padding: 15px 10px;
    border: 1px solid #eee;
    text-align: left;
  }
  .productDetails a {
    text-decoration: none;
    color: var(--secondaryColor);
    transition: 0.35s ease;
    font-size: 14px;
  }
  .productDetails a:hover {
    color: var(--primaryColor);
  }
`;

export default ProductCard;
