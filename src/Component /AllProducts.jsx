import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { products } from "../util/productsDetails";
import { Link } from "react-router-dom";
import ProductFilters from "./ProductFilters";

function AllProducts() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <ProductFilters />
        {/* Main Content */}
        <main className="md:col-span-3">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-gray-500">Showing 12-12 of 14 results</p>
            <select className="border rounded-md px-3 py-1.5 text-sm">
              <option>Sort by latest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Sort by popularity</option>
            </select>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.title}
                className="group relative border rounded-lg overflow-hidden"
              >
                <Link to="#">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex">
                      <h3 className="font-medium text-sm line-clamp-2">
                        {product.title}
                      </h3>
                      <button className=" z-10 px-2 mb-auto rounded-full hover:bg-white/80">
                        <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                      </button>
                    </div>
                    <p className="font-bold mt-2">
                      {!product.stock ? (
                        <span className="text-red-500">
                          Currently unavailable
                        </span>
                      ) : (
                        `$` + product.price.toFixed(2)
                      )}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
              2
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded flex items-center gap-1">
              Next
              <BsChevronRight className="w-4 h-4" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default AllProducts;
