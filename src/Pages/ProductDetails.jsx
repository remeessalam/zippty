import React, { useState } from "react";
import { productDetails, products } from "../util/productsDetails";
import productdetailspetsimage from "../assets/images/productdetailspetsimage.png";
import Banner from "../Component /Banner";
import CategorySlider from "../Component /CategorySlider";
import ProductFilters from "../Component /ProductFilters";
import TwoDogs from "../Component /TwoDogs";
import ProductGrid from "../Component /ProductGrid";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const aboutBannerDetails = {
    mainHeading: "The friendly and caring small pet store",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: productdetailspetsimage,
  };
  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <CategorySlider />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 wrapper">
        {/* Left Sidebar */}
        <ProductFilters />

        {/* Main Content */}
        <div className="flex-1 md:col-span-3 ">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <img
                src={productDetails[0].productImage}
                alt="E&E Bestlife Smart Car Remote Control"
                className="w-full rounded-lg"
              />
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="small-heading">
                E&E Bestlife Smart Car Remote Control
              </h1>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">$1,099</span>
                <span className="text-sm text-gray-500">
                  Count(11,959 / Count)
                </span>
              </div>
              <div className="flex items-center gap-1">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i} className="text-yellow-400">
                    {star}
                  </span>
                ))}
              </div>
              <p className="text-gray-600">
                Your home deserves safer key keeps your pets entertained. Remote
                control system designed to give your pet their freedom modern
                best patterns that trigger their natural chase instinct. An
                exciting, active charge anytime inside of safe and working
                environment. Pets can play with this toy when they are alone at
                homes
              </p>

              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded">
                  <button
                    onClick={decreaseQuantity}
                    className="px-3 py-1 border-r hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-4">{quantity}</span>
                  <button
                    onClick={increaseQuantity}
                    className="px-3 py-1 border-l hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button className="bg-black text-white px-6 py-2 rounded flex items-center gap-2">
                  <span>Add To Cart</span>
                </button>
              </div>

              {/* Additional Information */}
            </div>
          </div>
          <div className="grid md:grid-cols-2 paddingTop paddingBottom">
            <div className="space-y-4">
              <h3 className="small-heading">Additional Information</h3>
              <div className="grid grid-cols-1 gap-4 text-sm">
                {Object.entries(productDetails[0].additionalInformation).map(
                  ([key, value]) => (
                    <div key={key} className="grid grid-cols-2">
                      <p className="font-bold">{key}</p>
                      <p>{Array.isArray(value) ? value.join(", ") : value}</p>
                    </div>
                  )
                )}
              </div>
            </div>
            <div>
              {" "}
              <div className="space-y-4">
                <img
                  src={productDetails[0].productImage}
                  alt="E&E Bestlife Smart Car Remote Control"
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          <div className="grid md grid-cols-3 gap-8">
            {productDetails[0].images.map((obj, i) => (
              <img
                key={i}
                src={obj}
                alt="product-image"
                className={`rounded-3xl`}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
        <ProductGrid products={products.slice(0, 4)} />
      </div>
      <TwoDogs />
    </div>
  );
};

export default ProductDetails;
