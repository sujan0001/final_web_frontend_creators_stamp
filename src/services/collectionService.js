import axios from "../api/axiosInstance";
import axiosInstance from "../api/axiosInstance"; // ✅ correct alias
import publicAxios from "../api/publicAxios";


export const createCollection = async (formData) => {
  const res = await axios.post("/collections/create", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res.data;
};

export const getMyCollections = async () => {
  const res = await axios.get("/collections/my");
  return res.data;
};


export const deleteCollection = async (id) => {
  const res = await axios.delete(`/collections/${id}`);
  return res.data;
};

// now starting for consumer part=========================
// getting all the collection regardless of the artist
// export const getAllCollections = async () => {
//   const response = await axiosInstance.get("/collections/allCollection");
//   return response.data;
// };
export const getAllCollections = async () => {
  const res = await publicAxios.get("/collections/allCollection");
  return res.data;
};