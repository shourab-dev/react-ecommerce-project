import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../utils/ProductCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//* GET API DATA
import { getApiData } from "../../helpers/getApiData";
import styled from "styled-components";

const ProductSlider = ({ category }) => {
  const [products, setProducts] = useState();
  useEffect(() => {
    getApiData(`products/category/${category}`).then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <>
      <Swipers
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        breakpoints={{
          450: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {products?.map((product) => {
          return (
            <SwiperSlide>
              <ProductCard
                items={{ sm: 1, md: 1, lg: 1, xl: 1, xxl: 1 }}
                product={product}
              />
            </SwiperSlide>
          );
        })}
      </Swipers>
    </>
  );
};

const Swipers = styled(Swiper)`
  &.swiper{
    padding: 40px 0;
  }
  
  & .swiper-pagination-bullet-active {
    background: var(--primaryColor);
  }
`;

export default ProductSlider;
