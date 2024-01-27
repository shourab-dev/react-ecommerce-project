import React from "react";
import HeroBanner from "../components/HeroBanner";
import TrendingProducts from "../components/TrendingProducts";
const Home = () => {
  return (
    <>
      {/* * HERO  BANNER */}
      <HeroBanner numOfSlides="2" />
      {/* * HERO  BANNER ENDS*/}
      <TrendingProducts />
    </>
  );
};

export default Home;
