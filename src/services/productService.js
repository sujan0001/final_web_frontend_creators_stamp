// import axiosInstance from "../api/axiosInstance";

// export const createProduct = async (formData) => {
//   return await axiosInstance.post("/product/create", formData, {
//     headers: {
//       "Content-Type": "multipart/form-data",
//     },
//   });
// };
// export const getProductsByCollection = (collectionId) => {
//   return axiosInstance.get(`/product/my/collection/${collectionId}`);
// };
// // productService.js
// export const getProductById = async (productId) => {
//   return await axiosInstance.get(`/product/${productId}`);
// };



// export const deleteProductById = async (id) => {
//   const token = localStorage.getItem("token");
//   return await axiosInstance.delete(`/product/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// // ===========start of consumer functions===============
// export const getAvailableProducts = async () => {
//   return await axiosInstance.get("/product/available");
// };

// export const buyProductById = async (productId) => {
//   const token = localStorage.getItem("token");
//   return await axiosInstance.post(`/product/buy/${productId}`, {}, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const getMyOwnedProducts = async () => {
//   const token = localStorage.getItem("token");
//   return await axiosInstance.get("/product/ownership/my", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const resellProduct = async (productId, resalePrice) => {
//   const token = localStorage.getItem("token");
//   return await axiosInstance.put(
//     `/product/resell/${productId}`,
//     { resalePrice },
//     {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }
//   );
// };

// // Get products that are resold (i.e. onSale === true and owner != null)
// export const getResoldProducts = async () => {
//   return await axiosInstance.get("/product/sold");
// };

// this is my new product service to incorporate the new features=======================

import axiosInstance from "../api/axiosInstance";

// ========== Creator ==========

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

export const deleteProductById = async (id) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.delete(`/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// ========== Public ==========

export const getProductById = async (productId) => {
  return await axiosInstance.get(`/product/${productId}`);
};

export const getAvailableProducts = async () => {
  return await axiosInstance.get("/product/available");
};

export const getResoldProducts = async () => {
  return await axiosInstance.get("/product/sold");
};

// ========== Consumer ==========

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

// ====== UPDATED Transfer Logic (matches backend routes) ======

export const requestProductTransfer = async (productId) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.post(`/product/request-transfer/${productId}`, {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const respondToTransferRequest = async (productId, action) => {
  const token = localStorage.getItem("token");
  return await axiosInstance.post(`/product/respond-transfer/${productId}`, { action }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getTransferRequestsForUser = async () => {
  const token = localStorage.getItem("token");
  return await axiosInstance.get(`/product/incoming-transfers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
