import React, { useState } from "react";
import { productDetails, products } from "../util/productsDetails";
import productdetailspetsimage from "../assets/images/productdetailspetsimage.png";
import Banner from "../Component /Banner";
import CategorySlider from "../Component /CategorySlider";
import ProductFilters from "../Component /ProductFilters";
import TwoDogs from "../Component /TwoDogs";
import ProductGrid from "../Component /ProductGrid";
import { useCart } from "../Store/cartContext";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = productDetails[0];

  // State to track selected image
  const [selectedImage, setSelectedImage] = useState(product.productImage);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.productName,
      price: product.actualPrice,
      image: product.productImage,
      quantity: quantity,
    });
  };

  const isInCart = cartItems.some((item) => item.id === product.id);

  const aboutBannerDetails = {
    mainHeading: "The friendly and caring small pet store",
    paragraph: `At Zippty, we know your pets are more than just animals—they’re family. Whether you have a curious kitten or an energetic dog,`,
    image: productdetailspetsimage,
  };

  return (
    <div>
      <Banner bannerDetails={aboutBannerDetails} />
      <CategorySlider />

      <div className=" gap-8 wrapper">
        {/* Left Sidebar */}
        {/* <ProductFilters /> */}

        {/* Main Content */}
        <div className="flex-1 md:col-span-3 ">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <img
                src={selectedImage}
                alt={product.productName}
                className="w-full rounded-lg"
              />
              {/* Thumbnails */}
              <div className="flex gap-4">
                {[product.productImage, ...product.images].map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`Thumbnail ${i}`}
                    className={`w-20 h-20 rounded-lg cursor-pointer border ${
                      selectedImage === img ? "border-black" : "border-gray-300"
                    }`}
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4">
              <h1 className="small-heading">{product.productName}</h1>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold">
                  ${product.actualPrice}
                </span>
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
              <p className="text-gray-600">{product.description}</p>

              {/* Quantity and Cart Buttons */}
              <div className="flex items-center gap-4">
                {!isInCart ? (
                  <>
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
                    <button
                      onClick={handleAddToCart}
                      className="bg-black text-white px-6 py-2 rounded flex items-center gap-2"
                    >
                      <span>Add To Cart</span>
                    </button>
                  </>
                ) : (
                  <Link
                    to="/cartitems"
                    className="bg-green-600 text-white px-6 py-2 rounded flex items-center gap-2"
                  >
                    <span>Go to Cart</span>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 paddingTop paddingBottom">
            <div className="space-y-4">
              <h3 className="small-heading">Additional Information</h3>
              <div className="grid grid-cols-1 gap-4 text-sm">
                {Object.entries(product.additionalInformation).map(
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
              <div className="space-y-4">
                <img
                  src={selectedImage}
                  alt={product.productName}
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="product-image"
                className="rounded-3xl cursor-pointer"
                onClick={() => setSelectedImage(img)}
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
