// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axiosInstance from "../api/axiosInstance";

// export default function CollectionDetailPage() {
//   const { collectionId } = useParams();

//   const [collection, setCollection] = useState(null);
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const [loadingCollection, setLoadingCollection] = useState(true);
//   const [loadingProducts, setLoadingProducts] = useState(true);

//   // Retrieve token from localStorage (or wherever you store it)
//   const token = localStorage.getItem("token");

//   useEffect(() => {
//     const fetchCollection = async () => {
//       try {
//         setLoadingCollection(true);
//         const res = await axiosInstance.get(`/collections/${collectionId}`);
//         setCollection(res.data.data);
//       } catch (err) {
//         console.error("Error fetching collection:", err);
//         setError("Failed to load collection");
//       } finally {
//         setLoadingCollection(false);
//       }
//     };

//     const fetchProducts = async () => {
//       try {
//         setLoadingProducts(true);
//         const res = await axiosInstance.get(`/product/my/collection/${collectionId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProducts(res.data.data);
//       } catch (err) {
//         console.error("Error fetching products:", err);
//         setError("Failed to load products");
//       } finally {
//         setLoadingProducts(false);
//       }
//     };

//     fetchCollection();
//     fetchProducts();
//   }, [collectionId, token]);

//   if (error) {
//     return <div className="text-red-600 p-4">{error}</div>;
//   }

//   if (loadingCollection) {
//     return <div className="p-4">Loading collection details...</div>;
//   }

//   return (
//     <div className="p-6">
//       <div className="mb-6">
//         <img
//           src={`http://localhost:5050/${collection.coverImage}`}
//           alt={collection.title}
//           className="w-full h-60 object-cover rounded mb-4"
//         />
//         <h2 className="text-3xl font-bold">{collection.title}</h2>
//         <p className="text-gray-700">{collection.description}</p>
//       </div>

//       <h3 className="text-2xl font-semibold mb-4">Your Products in this Collection</h3>

//       {loadingProducts ? (
//         <p>Loading products...</p>
//       ) : products.length === 0 ? (
//         <p>No products yet.</p>
//       ) : (
//         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="border rounded shadow p-4 hover:shadow-md transition"
//             >
//               <img
//                 src={`http://localhost:5050/${product.image}`}
//                 alt={product.name}
//                 className="w-full h-40 object-cover mb-2 rounded"
//               />
//               <h4 className="font-semibold text-lg">{product.name}</h4>
//               <p className="text-sm text-gray-600">{product.description}</p>
//               <p className="font-bold text-blue-700 mt-1">Rs. {product.originalPrice}</p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import CreatorNavigation from "../../components/CreatorNavigation";

export default function CollectionDetailPage() {
  const { collectionId } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loadingCollection, setLoadingCollection] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoadingCollection(true);
        const res = await axiosInstance.get(`/collections/${collectionId}`);
        setCollection(res.data.data);
      } catch (err) {
        console.error("Error fetching collection:", err);
        setError("Failed to load collection");
      } finally {
        setLoadingCollection(false);
      }
    };

    const fetchProducts = async () => {
      try {
        setLoadingProducts(true);
        const res = await axiosInstance.get(
          `/product/my/collection/${collectionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(res.data.data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchCollection();
    fetchProducts();
  }, [collectionId, token]);

  const handleDeleteProduct = async (productId) => {
    const confirm = window.confirm("Are you sure you want to delete this product?");
    if (!confirm) return;

    try {
      await axiosInstance.delete(`/product/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProducts((prev) => prev.filter((p) => p._id !== productId));
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product");
    }
  };

  if (error) return <div className="text-red-600 p-4">{error}</div>;
  if (loadingCollection) return <div className="p-4">Loading collection details...</div>;

  return (
    <><CreatorNavigation /><div className="p-6">
      <div className="mb-6">
        <img
          src={`http://localhost:5050/${collection.coverImage}`}
          alt={collection.title}
          className="w-full h-60 object-cover rounded mb-4" />
        <h2 className="text-3xl font-bold">{collection.title}</h2>
        <p className="text-gray-700">{collection.description}</p>
      </div>
      <button
        onClick={() => navigate(`/collections/${collection._id}/add-product`)}
        className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
      >
        + Add Product
      </button>

      <h3 className="text-2xl font-semibold mb-4">Your Products in this Collection</h3>

      {loadingProducts ? (
        <p>Loading products...</p>
      ) : products.length === 0 ? (
        <p>No products yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded shadow p-4 hover:shadow-md transition"
            >
              <img
                src={`http://localhost:5050/${product.image}`}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded" />
              <h4 className="font-semibold text-lg">{product.name}</h4>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-bold text-blue-700 mt-1">Rs. {product.originalPrice}</p>

              <div className="flex gap-2 mt-3">
                {/* <button
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                      View Details
                    </button> */}

                <button
                  onClick={() => {
                    console.log("Navigating to product:", product._id);
                    navigate(`/product/${product._id}`);
                  } }
                  className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  View Details
                </button>
                <button
                  onClick={() => handleDeleteProduct(product._id)}
                  className="px-4 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div></>
  );
}
