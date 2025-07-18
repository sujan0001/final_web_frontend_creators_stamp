import axiosInstance from "../api/axiosInstance";

export const createProduct = async (formData) => {
  return await axiosInstance.post("/product/create", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const getProductsByCollection = (collectionId) => {
  return axiosInstance.get(`/product/my/collection/${collectionId}`);
};
// productService.js
export const getProductById = async (productId) => {
  return await axiosInstance.get(`/product/${productId}`);
};



export const deleteProductById = async (id) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ===========start of consumer functions===============
export const getAvailableProducts = async () => {
  return await axiosInstance.get("/product/available");
};

export const buyProductById = async (productId) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.post(`/product/buy/${productId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyOwnedProducts = async () => {
  const token = localStorage.getItem("token");
  return await axiosInstance.get("/product/ownership/my", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resellProduct = async (productId, resalePrice) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.put(
    `/product/resell/${productId}`,
    { resalePrice },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

// Get products that are resold (i.e. onSale === true and owner != null)
export const getResoldProducts = async () => {
  return await axiosInstance.get("/product/sold");
};
