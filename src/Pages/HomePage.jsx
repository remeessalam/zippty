import React from "react";
import Banner from "../Component /Banner";
import homepagepetsimage from "../assets/images/homepagepetsimage.png";
import CategorySlider from "../Component /CategorySlider";
import FeaturedProducts from "../Component /FeaturedProducts";
import HomeAbout from "../Component /HomeAbout";
import Testimonials from "../Component /Testimonials";
import Blogs from "../Component /Blogs";
const HomePage = () => {
  const homeBannerDetails = {
    mainHeading: "The smarter way to shop for your pet",
    paragraph: `At Zippty, we know your pets are more than just animals—they're
    family. Whether you have a curious kitten or an energetic dog,`,
    image: homepagepetsimage,
    isHome: true,
  };
  return (
    <div>
      <Banner bannerDetails={homeBannerDetails} />
      <CategorySlider />
      <FeaturedProducts />
      <HomeAbout />
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default HomePage;
