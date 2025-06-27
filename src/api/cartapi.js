import axios from "axios";
import { BASE_API_URL } from "../util/contant";

export const addToCart = async (productId, quantity) => {
  const token = localStorage.getItem("token");
  const response = await axios.post(
    `${BASE_API_URL}/api/cart/add`,
    { productId, quantity },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const getCart = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${BASE_API_URL}/api/cart`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(response, "asdfsdfsdfsfd");

  return response.data;
};

export const removeFromCart = async (productId) => {
  const token = localStorage.getItem("token");
  const response = await axios.delete(
    `${BASE_API_URL}/api/cart/remove/${productId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
