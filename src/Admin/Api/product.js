import axios from "axios";

export const BASE_API_URL = "http://localhost:7070";

const getAuthConfig = () => {
  const token = "asdfasdfasdfasdfasdfasdfasdf";
  //   const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
};

export const addProduct = async (productData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.post(
      BASE_API_URL + "/api/products",
      productData,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to add product");
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const config = getAuthConfig();
    const response = await axios.put(
      BASE_API_URL + `/api/products/${id}`,
      productData,
      config
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to update product"
    );
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(BASE_API_URL + `/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to fetch product");
  }
};
