import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { EffectFade, Autoplay } from "swiper/modules";
import { getApiData } from "../helpers/getApiData";
import Loader from "../components/utils/Loader";

const HeroBanner = ({ numOfSlides = 1 }) => {
  //* GET BANNERS FROM API
  const [Banners, setBanners] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    getApiData("products", { sort: "desc", limit: numOfSlides }).then((res) => {
      setBanners(res);
      setIsLoaded(true);
    });
  });

  return (
    <HeroBannerWrapper
      className={`container px-0 px-lg-3 ${
        isLoaded == false ? "place-center" : ""
      }`}
    >
      {isLoaded != true ? (
        <Loader />
      ) : (
        <Swiper
          modules={[EffectFade, Autoplay]}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
          effect="fade"
          slidesPerView={1}
          className="h-100"
        >
          {Banners?.map((banner) => (
            <SwiperSlide
              key={banner.id}
              className="h-100"
              style={{
                backgroundImage: `url(${banner.image})`,
              }}
            >
              <div className="row h-100 align-items-center">
                <div className="slideCnt col-lg-5 ps-5">
                  <h2>{banner.title}</h2>
                  <p style={{ "--i": 1 }}>{banner.description}</p>
                  <NavLink
                    style={{ "--i": 2 }}
                    to={`/product/${banner.id}`}
                    className="btn btn-primary rounded-0 "
                  >
                    View Now
                  </NavLink>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </HeroBannerWrapper>
  );
};

const HeroBannerWrapper = styled.section`
  height: 80vh;
  margin: 20px auto;
  border-radius: 50px;
  overflow: hidden;

  .swiper-slide {
    background-size: cover;
    background-position: right;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.18);
    background-blend-mode: multiply;
    border-radius: 50px;
    background-attachments: fixed;
  }

  .swiper-slide .slideCnt * {
    color: white;
    text-decoration: none;
    transform: translateY(80px);
    opacity: 0;
    transition: 0.5s ease;
    transition-delay: calc(var(--i) * 200ms);
  }
  .swiper-slide .slideCnt p {
    font-size: 14px;
  }
  .swiper-slide.swiper-slide-active .slideCnt * {
    transform: translateY(0px);
    opacity: 1;
  }
  &.place-center {
    display: grid;
    place-items: center;
  }
  @media (max-width: 991px) {
    border-radius: 0;
    margin: 0;
    max-width: 100%;
    .swiper-slide {
      border-radius: 0;
    }
  }
`;

export default HeroBanner;
