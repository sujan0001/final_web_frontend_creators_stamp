import axios from "../api/axiosInstance";

// Register
export const registerUser = async (formData) => {
  const response = await axios.post("/auth/register", formData);
  return response.data;
};

// Login
export const loginUser = async ({ email, password }) => {
  const response = await axios.post("/auth/login", { email, password });
  return response.data;
};
