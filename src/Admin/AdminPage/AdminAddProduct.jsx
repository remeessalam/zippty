import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm, useFieldArray } from "react-hook-form";
import { addProduct, fetchProduct, updateProduct } from "../Api/product";
import axios from "axios";
import { FaChevronRight } from "react-icons/fa";

const AdminAddProduct = () => {
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "BABORUI 3.0 Upgraded Interactive Cat Toy with 2-Speed Adjustment, Remote Control, Automatic, Orange",
      description: "",
      image: "",
      thumbnailUrls: [""],
      headings: [{ title: "", description: "" }],
      about: [""],
    },
  });

  const {
    fields: headingFields,
    append: appendHeading,
    remove: removeHeading,
  } = useFieldArray({
    control,
    name: "headings",
  });

  const {
    fields: aboutFields,
    append: appendAbout,
    remove: removeAbout,
  } = useFieldArray({
    control,
    name: "about",
  });

  const {
    fields: thumbnailFields,
    append: appendThumbnail,
    remove: removeThumbnail,
  } = useFieldArray({
    control,
    name: "thumbnailUrls",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (isEditMode) {
      fetchProduct(id)
        .then((data) => {
          const product = data.product;
          Object.keys(product).forEach((key) => setValue(key, product[key]));
        })
        .catch((err) => setError(err.message));
    }
  }, [id, isEditMode, setValue]);

  const onSubmit = async (data) => {
    setError("");
    setSuccess("");
    try {
      if (isEditMode) {
        await updateProduct(id, data);
        setSuccess("Product updated successfully");
      } else {
        await addProduct(data);
        setSuccess("Product added successfully");
      }
      setTimeout(() => navigate("/admin/products"), 2000);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    navigate("/admin/products");
  };

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    setError("");
    setSuccess("");
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSuccess("Product deleted successfully");
      setTimeout(() => navigate("/admin/products"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to delete product");
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 font-sans">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {isEditMode ? "Edit Product" : "Add Product"}
        </h1>
        <div className="text-sm text-gray-600 flex items-center gap-1">
          <span>Home</span> <FaChevronRight />
          <span>All Products</span> <FaChevronRight />
          <span>{isEditMode ? "Edit Product" : "Add Product"}</span>
        </div>
      </div>

      {error && <div className="text-red-500 mb-4">{error}</div>}
      {success && <div className="text-green-500 mb-4">{success}</div>}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Product Name</label>
            <input
              {...register("name", { required: "Product name is required" })}
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              {...register("description")}
              className="w-full border border-gray-300 rounded p-2 h-28"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Main Image URL</label>
            <input
              {...register("image", { required: "Main image URL is required" })}
              placeholder="Enter main image URL"
              className="w-full border border-gray-300 rounded p-2"
            />
            {errors.image && (
              <p className="text-red-500 text-sm">{errors.image.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium mb-1">Headings</label>
            {headingFields.map((field, index) => (
              <div key={field.id} className="space-y-2 mb-2">
                <input
                  {...register(`headings.${index}.title`, {
                    required: "Title is required",
                  })}
                  placeholder="Heading Title"
                  className="w-full border border-gray-300 rounded p-2"
                />
                {errors.headings?.[index]?.title && (
                  <p className="text-red-500 text-sm">
                    {errors.headings[index].title.message}
                  </p>
                )}
                <textarea
                  {...register(`headings.${index}.description`, {
                    required: "Description is required",
                  })}
                  placeholder="Heading Description"
                  className="w-full border border-gray-300 rounded p-2 h-20"
                />
                {errors.headings?.[index]?.description && (
                  <p className="text-red-500 text-sm">
                    {errors.headings[index].description.message}
                  </p>
                )}
                {headingFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeHeading(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove Heading
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendHeading({ title: "", description: "" })}
              className="text-blue-500 text-sm"
            >
              Add Heading
            </button>
          </div>
          <div>
            <label className="block font-medium mb-1">About Points</label>
            {aboutFields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2 mb-2">
                <input
                  {...register(`about.${index}`, {
                    required: "Point is required",
                  })}
                  placeholder="Enter about point"
                  className="w-full border border-gray-300 rounded p-2"
                />
                {errors.about?.[index] && (
                  <p className="text-red-500 text-sm">
                    {errors.about[index].message}
                  </p>
                )}
                {aboutFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeAbout(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendAbout("")}
              className="text-blue-500 text-sm"
            >
              Add Point
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border border-gray-300 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={thumbnailFields[0]?.url || "https://via.placeholder.com/300"}
              alt="Product"
              className="w-full h-72 object-contain"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Thumbnail URLs</label>
            {thumbnailFields.map((field, index) => (
              <div key={field.id} className="flex items-center space-x-2 mb-2">
                <input
                  {...register(`thumbnailUrls.${index}`, {
                    required: "Thumbnail URL is required",
                  })}
                  placeholder="Enter thumbnail URL"
                  className="w-full border border-gray-300 rounded p-2"
                />
                {errors.thumbnailUrls?.[index] && (
                  <p className="text-red-500 text-sm">
                    {errors.thumbnailUrls[index].message}
                  </p>
                )}
                <div className="w-12 h-12 bg-gray-300 rounded">
                  <img
                    src={field.url || "https://via.placeholder.com/50"}
                    alt="Thumbnail"
                    className="w-full h-full object-cover"
                  />
                </div>
                {thumbnailFields.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeThumbnail(index)}
                    className="text-red-500 text-sm"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => appendThumbnail("")}
              className="text-blue-500 text-sm"
            >
              Add Thumbnail URL
            </button>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8 col-span-2">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded"
          >
            {isEditMode ? "UPDATE" : "ADD"}
          </button>
          {isEditMode && (
            <button
              type="button"
              onClick={handleDelete}
              className="bg-blue-800 text-white px-6 py-2 rounded"
            >
              DELETE
            </button>
          )}
          <button
            type="button"
            onClick={handleCancel}
            className="border border-gray-300 px-6 py-2 rounded"
          >
            CANCEL
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminAddProduct;
