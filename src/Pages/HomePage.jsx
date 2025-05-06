import React from "react";
import Banner from "../Component /Banner";
import homepagepetsimage from "../assets/images/homepagepetsimage.png";
// import CategorySlider from "../Component /CategorySlider";
import FeaturedProducts from "../Component /FeaturedProducts";
import HomeAbout from "../Component /HomeAbout";
import Testimonials from "../Component /Testimonials";
import Blogs from "../Component /Blogs";
import ProductGrid from "../Component /ProductGrid";
import { products } from "../util/productsDetails";
const HomePage = () => {
  const homeBannerDetails = {
    mainHeading: "A pet store with everything you need",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: homepagepetsimage,
    isHome: true,
    isButton: true,
  };
  return (
    <div>
      <Banner bannerDetails={homeBannerDetails} />
      {/* <CategorySlider /> */}
      <FeaturedProducts />
      <HomeAbout />
      <div>
        <h1 className="title-heading text-center">Best selling products</h1>
        <ProductGrid products={products.slice(0, 8)} />
      </div>
      <Testimonials />
      <Blogs />
    </div>
  );
};

export default HomePage;
