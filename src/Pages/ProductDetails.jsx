import React, { useState } from "react";
import { productDetails } from "../util/productsDetails";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white p-4 gap-6">
      {/* Left Sidebar */}
      <div className="lg:w-64 space-y-6">
        {/* Filter by categories */}
        <div>
          <h3 className="font-medium mb-2">Filter by categories</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Furniture</span>
              <span className="text-gray-500">(0)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Plants</span>
              <span className="text-gray-500">(1)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Food</span>
              <span className="text-gray-500">(3)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Toys</span>
              <span className="text-gray-500">(4)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Sale</span>
              <span className="text-gray-500">(2)</span>
            </div>
          </div>
        </div>

        {/* Filter by Price */}
        <div>
          <h3 className="font-medium mb-2">Filter by Price</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm">Price: $5 - $999</span>
            <button className="text-xs bg-gray-200 px-2 py-1 rounded">
              Clear
            </button>
          </div>
        </div>

        {/* Filter by brands */}
        <div>
          <h3 className="font-medium mb-2">Filter by brands</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center text-sm">
              <span>Pet zone</span>
              <span className="text-gray-500">(0)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Dogs friend</span>
              <span className="text-gray-500">(1)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Petoria</span>
              <span className="text-gray-500">(3)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Favorite pet</span>
              <span className="text-gray-500">(2)</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span>Green line</span>
              <span className="text-gray-500">(1)</span>
            </div>
          </div>
        </div>

        {/* Filter by tags */}
        <div>
          <h3 className="font-medium mb-2">Filter by tags</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Dog food
            </span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Internet
            </span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
              Small dog
            </span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">Cat</span>
            <span className="text-xs bg-gray-100 px-2 py-1 rounded">Puppy</span>
          </div>
        </div>

        {/* Popular products */}
        <div>
          <h3 className="font-medium mb-2">Popular products</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm">Premium Dog Food</p>
                <p className="text-sm font-medium">$199</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm">Cat Bowl</p>
                <p className="text-sm font-medium">$29</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product"
                className="w-12 h-12 object-cover rounded"
              />
              <div>
                <p className="text-sm">Dog Leash</p>
                <p className="text-sm font-medium">$39</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <img
              src={productDetails[0].images[0]}
              alt="E&E Bestlife Smart Car Remote Control"
              className="w-full rounded-lg"
            />
            {/* <div className="grid grid-cols-3 gap-2">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product view"
                className="w-full rounded-lg"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product view"
                className="w-full rounded-lg"
              />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-18%20at%2011.13.11%E2%80%AFAM-yxloC2nnB1IsqvGeQL3JU8mFsTNg0T.png"
                alt="Product view"
                className="w-full rounded-lg"
              />
            </div> */}
          </div>

          {/* Product Details */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">
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
              control system designed to give your pet their freedom modern best
              patterns that trigger their natural chase instinct. An exciting,
              active charge anytime inside of safe and working environment. Pets
              can play with this toy when they are alone at homes
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
        <div className="grid md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-medium">Additional Information</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Pet Key type</p>
                <p>Remote Tag</p>
              </div>
              <div>
                <p className="font-medium">Target Species</p>
                <p>Cat</p>
              </div>
              <div>
                <p className="font-medium">Recommended Use</p>
                <p>M</p>
              </div>
              <div>
                <p className="font-medium">Pet Product</p>
                <p>Playing</p>
              </div>
              <div>
                <p className="font-medium">Cartoon Character</p>
                <p>No</p>
              </div>
              <div>
                <p className="font-medium">Indoor/Outdoor Usage</p>
                <p>Indoor</p>
              </div>
              <div>
                <p className="font-medium">Color</p>
                <p>Blue</p>
              </div>
              <div>
                <p className="font-medium">Available Sunshine System</p>
                <p>System</p>
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="space-y-4">
              <img
                src={productDetails[0].images[0]}
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
  );
};

export default ProductDetails;
