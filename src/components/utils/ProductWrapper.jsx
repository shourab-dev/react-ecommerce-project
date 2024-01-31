import React from "react";
import ProductCard from "./ProductCard";

const ProductWrapper = ({ items = {}, products }) => {
  return (
    <div className="productWrapper">
      <div className="row">
        {products.length > 0 ? (
          products.map((product, index) => {
            return (
              <ProductCard key={product.id} items={items} product={product} />
            );
          })
        ) : (
          <h2 className="text-center">No Product Found</h2>
        )}
      </div>
    </div>
  );
};

export default ProductWrapper;
