import React from "react";
import Banner from "../Component /Banner";
import AllProducts from "../Component /AllProducts";
import CategorySlider from "../Component /CategorySlider";
import aboutuspetsimage from "../assets/images/aboutuspetsimage.png";
import TwoDogs from "../Component /TwoDogs";

const ProductsPage = () => {
  const aboutBannerDetails = {
    mainHeading: "The smarter way to shop for your pet",
    paragraph: `At Zippty, we know your pets are more than just animals—they're
        family. Whether you have a curious kitten or an energetic dog,`,
    image: aboutuspetsimage,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <CategorySlider />
      <AllProducts />
      <TwoDogs />
    </div>
  );
};

export default ProductsPage;
