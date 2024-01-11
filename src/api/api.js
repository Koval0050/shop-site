import axios from "axios";

const baseURL = "https://659d33da633f9aee7908e266.mockapi.io/products";

export const getMenu = async () => {
  try {
    const response = await axios.get(baseURL);
    return response.data;
  } catch (error) {
    return error;
  }
};
