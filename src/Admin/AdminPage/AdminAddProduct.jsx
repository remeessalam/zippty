import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import productimage from "../../assets/images/products/wireless-remote-control.jpeg";

const AdminAddProduct = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    brand: "",
    sku: "",
    stock: "",
    regularPrice: "",
    salePrice: "",
    tags: ["Lorem", "Lorem"],
  });

  const [thumbnails, setThumbnails] = useState([
    { id: 1, name: "Product thumbnail.png", selected: true },
    { id: 2, name: "Product thumbnail.png", selected: true },
    { id: 3, name: "Product thumbnail.png", selected: true },
    { id: 4, name: "Product thumbnail.png", selected: true },
  ]);

  useEffect(() => {
    if (isEditMode) {
      fetch(`/api/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProductData(data);
          setThumbnails(data.thumbnails || []);
        });
    }
  }, [id, isEditMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {isEditMode ? "Edit Product" : "Add Product"}
        </h1>
        <div className="text-sm text-gray-600">
          <span>Home</span> &gt; <span>All Products</span> &gt;{" "}
          <span>{isEditMode ? "Edit Product" : "Add Product"}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 h-28"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Category</label>
            <input
              type="text"
              name="category"
              value={productData.category}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Brand Name</label>
            <input
              type="text"
              name="brand"
              value={productData.brand}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">SKU</label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Stock Quantity</label>
              <input
                type="text"
                name="stock"
                value={productData.stock}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-1">Regular Price</label>
              <input
                type="text"
                name="regularPrice"
                value={productData.regularPrice}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Sale Price</label>
              <input
                type="text"
                name="salePrice"
                value={productData.salePrice}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>
          <div>
            <label className="block font-medium mb-1">Tags</label>
            <div className="border border-gray-300 rounded p-2 min-h-12">
              <div className="flex flex-wrap gap-2">
                {productData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-primary text-white px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={productimage}
              alt="Product"
              className="w-full h-72 object-contain"
            />
          </div>
          <div className="space-y-2">
            {thumbnails.map((thumbnail) => (
              <div
                key={thumbnail.id}
                className="flex items-center bg-gray-100 rounded-lg p-2"
              >
                <div className="w-12 h-12 bg-gray-300 rounded mr-3">
                  <img
                    src={productimage}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <div className="text-sm">{thumbnail.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <button className="bg-black text-white px-6 py-2 rounded">
          {isEditMode ? "UPDATE" : "ADD"}
        </button>
        {isEditMode && (
          <button className="bg-blue-800 text-white px-6 py-2 rounded">
            DELETE
          </button>
        )}
        <button className="border border-gray-300 px-6 py-2 rounded">
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default AdminAddProduct;
