"use client";

import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";

const initialCartItems = [
  {
    id: 1,
    name: "Zippity Interactive Laser Toy",
    price: 12.99,
    quantity: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%204.28.51%E2%80%AFPM-E8URsWJCClX9wyE6depgNbzeOmZtPF.png",
  },
  {
    id: 2,
    name: "Cat Luggage",
    price: 50.0,
    quantity: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%204.28.51%E2%80%AFPM-E8URsWJCClX9wyE6depgNbzeOmZtPF.png",
  },
  {
    id: 3,
    name: "Premium Dog Food",
    price: 45.99,
    quantity: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%204.28.51%E2%80%AFPM-E8URsWJCClX9wyE6depgNbzeOmZtPF.png",
  },
  {
    id: 4,
    name: "Dog Bed",
    price: 99.99,
    quantity: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%204.28.51%E2%80%AFPM-E8URsWJCClX9wyE6depgNbzeOmZtPF.png",
  },
  {
    id: 5,
    name: "Dog Bowl",
    price: 25.98,
    quantity: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%204.28.51%E2%80%AFPM-E8URsWJCClX9wyE6depgNbzeOmZtPF.png",
  },
];

const CartItems = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Number.parseInt(newQuantity) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

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
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="w-20 p-2 border rounded"
                  />
                </td>
                <td className="p-4">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
                <td className="p-4">
                  <button
                    onClick={() => removeItem(item.id)}
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
            CART TOTAL = ${calculateTotal().toFixed(2)}
          </div>
          <button className="bg-[#2F5F3A] text-white py-3 px-6 rounded w-full md:w-auto">
            Save and pay now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
