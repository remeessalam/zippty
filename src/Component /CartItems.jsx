"use client";

import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { useCart } from "../Store/cartContext";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import bird from "../assets/images/bird.gif";

const CartItems = () => {
  const { cartItems, removeFromCart } = useCart();
  const buttonRef = useRef(null);
  // const [birdPosition, setBirdPosition] = useState({ x: "80vw", y: "80vh" });

  // useEffect(() => {
  //   if (buttonRef.current) {
  //     const buttonRect = buttonRef.current.getBoundingClientRect();

  //     // Set bird position slightly above the button
  //     const birdX = `${buttonRect.left + window.scrollX}px`;
  //     const birdY = `${buttonRect.top + window.scrollY - 50}px`; // Adjusted to stay above

  //     setBirdPosition({ x: birdX, y: birdY });

  //     // Apply new CSS variables dynamically for animation to target button position
  //     document.documentElement.style.setProperty("--target-x", birdX);
  //     document.documentElement.style.setProperty("--target-y", birdY);
  //   }
  // }, [cartItems]);

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-4">
        <BsCart3 size={64} className="text-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          Looks like you haven't added any items yet
        </p>
        <div className="flex justify-center mt-6">
          <Link
            to="/shop"
            className="bg-orange-500 text-white px-6 py-2 rounded-full shadow-md hover:bg-orange-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Cart Items</h1>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="text-left p-4">PRODUCT</th>
              <th className="text-left p-4">PRICE</th>
              <th className="text-left p-4">QUANTITY</th>
              <th className="text-left p-4">TOTAL</th>
              <th className="text-left p-4">EDIT</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-16 h-16 object-cover"
                    />
                    <span>{item.name}</span>
                  </div>
                </td>
                <td className="p-4">${item?.price?.toFixed(2)}</td>
                <td className="p-4">
                  <div className="border text-center w-fit mr-auto px-8 py-1 rounded-xl">
                    {item.quantity}
                  </div>
                </td>
                <td className="p-4">
                  ${(item?.price * item?.quantity)?.toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-black hover:text-gray-700"
                  >
                    <RxCross2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-6">
        <div className="text-right">
          <div className="text-lg font-semibold mb-4">
            CART TOTAL = ${calculateTotal()?.toFixed(2)}
          </div>
          <div className="relative">
            {cartItems.length > 0 && (
              <img
                src={bird}
                alt="Flying Parrot"
                className="absolute w-[5rem] -top-[3rem] -left-[2rem] scale-x-[-1]"
              />
            )}
            <button
              ref={buttonRef}
              className="bg-[#2F5F3A] text-white py-3 px-6 rounded w-full md:w-auto"
            >
              Save and pay now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
