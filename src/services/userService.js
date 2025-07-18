// import axiosInstance from "../api/axiosInstance";


// export const getAllCreators = async () => {
//   const response = await axios.get(`${API_BASE}/GetAllCreators`);
//   return response.data;
// };
import axiosInstance from "../api/axiosInstance";

export const getAllCreators = async () => {
  const response = await axiosInstance.get("/auth/GetAllCreators");
  return response.data;
};
