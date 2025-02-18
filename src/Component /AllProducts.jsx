import { AiOutlineHeart } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";

function AllProducts() {
  const categories = [
    { name: "Furniture", count: 21 },
    { name: "Bowls", count: 29 },
    { name: "Clothing", count: 45 },
    { name: "Food", count: 80 },
    { name: "Toys", count: 50 },
    { name: "Sale", count: 24 },
  ];

  const brands = [
    { name: "Natural food", count: 29 },
    { name: "Pet Care", count: 18 },
    { name: "Dogs friend", count: 76 },
    { name: "Pet food", count: 43 },
    { name: "Favorite pet", count: 29 },
    { name: "Green line", count: 15 },
  ];

  const tags = [
    "Dog food",
    "Cat food",
    "Natural",
    "Parrot",
    "Small dog",
    "Cat",
  ];

  const popularProducts = [
    {
      name: "Premium Dog Food",
      price: 99,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Cat Bowl",
      price: 22,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Dog Leash",
      price: 25,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Cat Bed",
      price: 30,
      image: "/placeholder.svg?height=48&width=48",
    },
    {
      name: "Premium Cat Food",
      price: 20,
      image: "/placeholder.svg?height=48&width=48",
    },
  ];

  const products = [
    {
      title:
        "Remote Control Cat Interactive Moving Toy with 2-Speed Adjustment",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      onSale: true,
    },
    {
      title: "JoyZZZ Automatic Cat Laser Toy, Interactive Cat Toy",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Cat Laser Toy, Automatic Rotating Laser Pointer for Cats",
      price: 25.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Premium Cat Food",
      price: 10.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Dog Bowl",
      price: 4.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Cat Bag Luggage",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Dog Leash",
      price: 9.95,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Dog Bed",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Premium Dog Food",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Dog Hoodie",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      title: "Dog Food",
      price: 24.99,
      image: "/placeholder.svg?height=300&width=300",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="space-y-8">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4">Filter by categories</h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`category-${category.name}`}
                      className="rounded border-gray-300"
                    />
                    <label
                      htmlFor={`category-${category.name}`}
                      className="text-sm flex-1 cursor-pointer"
                    >
                      {category.name}
                    </label>
                    <span className="text-sm text-gray-500">
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-4">Filter by Price</h3>
              <input
                type="range"
                min="9"
                max="369"
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm">Price: $9 - $369</span>
                <button className="bg-gray-900 text-white px-4 py-1 text-sm rounded">
                  Apply
                </button>
              </div>
            </div>

            {/* Brands */}
            <div>
              <h3 className="font-semibold mb-4">Filter by brands</h3>
              <div className="space-y-3">
                {brands.map((brand) => (
                  <div key={brand.name} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={`brand-${brand.name}`}
                      className="rounded border-gray-300"
                    />
                    <label
                      htmlFor={`brand-${brand.name}`}
                      className="text-sm flex-1 cursor-pointer"
                    >
                      {brand.name}
                    </label>
                    <span className="text-sm text-gray-500">{brand.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="font-semibold mb-4">Filter by tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Products */}
            <div>
              <h3 className="font-semibold mb-4">Popular products</h3>
              <div className="space-y-4">
                {popularProducts.map((product) => (
                  <div key={product.name} className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded overflow-hidden">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{product.name}</h4>
                      <p className="text-sm">${product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

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
                {product.onSale && (
                  <span className="absolute top-2 left-2 z-10 bg-red-500 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </span>
                )}
                <button className="absolute right-2 top-2 z-10 p-2 rounded-full hover:bg-white/80">
                  <AiOutlineHeart className="w-5 h-5 text-gray-600 hover:text-orange-500" />
                </button>
                <a href="#">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="font-bold mt-2">
                      ${product.price.toFixed(2)}
                    </p>
                  </div>
                </a>
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
