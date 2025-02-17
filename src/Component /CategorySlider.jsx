"use client";

import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const categories = [
  {
    name: "Accessories",
    products: 84,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%202.49.24%E2%80%AFPM-lOO0Wfpl1K0OHaJt4VqizXJcomUosp.png",
  },
  {
    name: "Toys",
    products: 64,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%202.49.24%E2%80%AFPM-lOO0Wfpl1K0OHaJt4VqizXJcomUosp.png",
  },
  {
    name: "Food",
    products: 22,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%202.49.24%E2%80%AFPM-lOO0Wfpl1K0OHaJt4VqizXJcomUosp.png",
  },
  {
    name: "Cloths",
    products: 16,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-17%20at%202.49.24%E2%80%AFPM-lOO0Wfpl1K0OHaJt4VqizXJcomUosp.png",
  },
  {
    name: "Beds",
    products: 45,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Healthcare",
    products: 38,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Grooming",
    products: 29,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    name: "Training",
    products: 52,
    image: "/placeholder.svg?height=300&width=400",
  },
];

export default function CategorySlider() {
  const [startIndex, setStartIndex] = useState(0);

  const showPrevious = () => {
    setStartIndex((prev) => Math.max(0, prev - 4));
  };

  const showNext = () => {
    setStartIndex((prev) => Math.min(categories.length - 4, prev + 4));
  };

  return (
    <div className="px-4 py-8 md:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Browse by category</h2>
        <div className="flex gap-2">
          <button
            variant="outline"
            size="icon"
            onClick={showPrevious}
            disabled={startIndex === 0}
            className="rounded-full"
          >
            <FaChevronLeft className="h-4 w-4" />
          </button>
          <button
            variant="outline"
            size="icon"
            onClick={showNext}
            disabled={startIndex >= categories.length - 4}
            className="rounded-full"
          >
            <FaChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.slice(startIndex, startIndex + 4).map((category) => (
          <div
            key={category.name}
            className="group cursor-pointer overflow-hidden"
          >
            <div className="p-0">
              <div className="relative">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-[200px] object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                      <p className="text-sm opacity-80">
                        {category.products} products
                      </p>
                    </div>
                    <FaArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
