import React from "react";
import ProductCard from "./ProductCard";

const ProductWrapper = ({ items = {}, products }) => {
  return (
    <div className="productWrapper">
      <div className="row">
        
        {products.map((product, index) => {
          return (
            <ProductCard key={product.id} items={items} product={product} />
          );
        })}
      </div>
    </div>
  );
};

export default ProductWrapper;
