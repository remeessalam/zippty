import React from "react";
import Banner from "../Component /Banner";
import cartpagepetsimage from "../assets/images/cartpagepetsimage.png";
import CartItems from "../Component /CartItems";
const CartPage = () => {
  const homeBannerDetails = {
    mainHeading: "Check Out ",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: cartpagepetsimage,
    isHome: true,
  };
  return (
    <div>
      <Banner bannerDetails={homeBannerDetails} />
      <CartItems />
    </div>
  );
};

export default CartPage;
