import { useState } from "react";
import productimage from "../../assets/images/products/wireless-remote-control.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowUp } from "react-icons/fa";
const AdminAllProducts = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Product data (repeated for all 12 cards)
  const products = Array(12).fill({
    title: "Zip Interactive Laser Toy",
    category: "Entertainment Toys",
    price: "₹2500",
    summary:
      "Zip Interactive Laser Toy is placeholder text commonly used in the graphic.",
    sales: 1269,
    remaining: 1269,
  });

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb and Add button */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-gray-600">
          <span className="cursor-pointer hover:text-gray-800">Home</span> &gt;{" "}
          <span className="cursor-pointer hover:text-gray-800">
            All Products
          </span>
        </div>
        <button className="bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center">
          <span className="mr-2">+</span> ADD NEW PRODUCT
        </button>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden p-4"
          >
            <div className="relative">
              <div className="flex gap-2">
                <img
                  src={productimage}
                  alt="Product"
                  className="w-24 h-24 object-cover"
                />
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{product.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {product.category}
                  </p>
                  <p className="font-bold mb-3">{product.price}</p>
                </div>
              </div>

              <div className="absolute top-2 right-2">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="pt-5">
              <div className="mb-4">
                <h4 className="font-medium mb-1">Summary</h4>
                <p className="text-sm text-gray-600 mb-3">{product.summary}</p>

                <div className="border p-3 flex flex-col gap-3 rounded-xl border-gray-400">
                  <div className=" ">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sales</span>
                      <span className="flex gap-1 items-center text-amber-500">
                        <FaArrowUp />
                        {product.sales}
                      </span>
                    </div>
                  </div>
                  <hr className="text-gray-300 border border-gray-300" />
                  <div className="grid grid-cols-2 items-center w-full">
                    <div className="flex justify-between text-sm ">
                      Remaining Products
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-full max-w-[5rem] bg-primary rounded-full h-1.5">
                        <div
                          className="bg-amber-500 h-1.5 rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <div>{product.remaining}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <button
          className={`w-8 h-8 flex items-center justify-center rounded-md mr-2 ${
            currentPage === 1 ? "bg-black text-white" : "border border-gray-300"
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </button>
        {[2, 3, 4].map((page) => (
          <button
            key={page}
            className={`w-8 h-8 flex items-center justify-center rounded-md mr-2 ${
              currentPage === page
                ? "bg-black text-white"
                : "border border-gray-300"
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
        <span className="mx-2 flex items-center">...</span>
        <button
          className="w-8 h-8 flex items-center justify-center rounded-md mr-2 border border-gray-300"
          onClick={() => setCurrentPage(10)}
        >
          10
        </button>
        <button
          className="px-4 h-8 flex items-center justify-center rounded-md border border-gray-300"
          onClick={() =>
            setCurrentPage(currentPage < 10 ? currentPage + 1 : 10)
          }
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default AdminAllProducts;
