
// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getProductById, resellProduct, buyProductById } from "../services/productService";

// import Nevigate from "../components/nevigate";
// import Footer from "./footer";

// export default function ConsumerProductDetails() {
//   const { id } = useParams();
//   const location = useLocation();
//   const navigate = useNavigate();

//   const isOwned = new URLSearchParams(location.search).get("owned") === "true";

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [resalePrice, setResalePrice] = useState(0);
//   const [resellMode, setResellMode] = useState(false);
//   const [buying, setBuying] = useState(false);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await getProductById(id);
//         setProduct(res.data.data);
//       } catch (err) {
//         console.error("Failed to fetch product", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleResell = async () => {
//     if (!resalePrice || resalePrice <= 0) return alert("Enter a valid resale price");

//     try {
//       await resellProduct(product._id, resalePrice);
//       alert("Product put on sale!");
//       setResellMode(false);
//     } catch (err) {
//       console.error("Resell failed", err);
//       alert("Failed to resell product.");
//     }
//   };

//   // const handleBuy = async () => {
//   //   const token = localStorage.getItem("token");
//   //   if (!token) {
//   //     alert("Please login to continue.");
//   //     return navigate("/login");
//   //   }

//   //   try {
//   //     setBuying(true);
//   //     await buyProductById(product._id);
//   //     alert("Product purchased!");
//   //   } catch (err) {
//   //     console.error("Purchase failed", err);
//   //     alert("Failed to buy product.");
//   //   } finally {
//   //     setBuying(false);
//   //   }
//   // };
//     const handleBuy = async () => {
//       const token = localStorage.getItem("token");
//       if (!token) {
//         alert("Please login to continue.");
//         return navigate("/login");
//       }

//       try {
//         setBuying(true);
//         await requestProductTransfer(product._id);
//         alert("Transfer request sent! Awaiting seller confirmation.");
//       } catch (err) {
//         console.error("Transfer request failed", err);
//         alert(err.response?.data?.message || "Failed to request transfer.");
//       } finally {
//         setBuying(false);
//       }
//     };

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center text-red-500">Product not found.</p>;

//   return (
//     <>
//       <Nevigate />
//       <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-b from-amber-50 to-white text-gray-900">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded shadow">
//           {/* Left Side: Product Image */}
//           <div>
//             <img
//               src={`http://localhost:5050/${product.image}`}
//               alt={product.name}
//               className="w-full h-[400px] object-cover rounded"
//             />
//           </div>

//           {/* Right Side: Product Details */}
//           <div>
//             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
//             <p className="text-gray-600 mb-4">{product.description}</p>

//             <p className="text-sm text-gray-500 mb-1">
//               Collection: <span className="font-medium">{product.collection?.title || "N/A"}</span>
//             </p>
//             <p className="text-sm text-gray-500 mb-4">
//               Creator: <span className="font-medium">{product.creator?.firstName} {product.creator?.lastName}</span>
//             </p>

//             <p className="text-2xl font-semibold text-green-600 mb-6">
//               Rs. {product.resalePrice || product.originalPrice}
//             </p>

//             {/* Action Buttons */}
//             {isOwned ? (
//               resellMode ? (
//                 <div className="space-y-3">
//                   <input
//                     type="number"
//                     value={resalePrice}
//                     onChange={(e) => setResalePrice(parseFloat(e.target.value))}
//                     placeholder="Set resale price"
//                     className="border p-2 rounded w-full"
//                   />
//                   <div className="flex gap-4">
//                     <button
//                       onClick={handleResell}
//                       className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
//                     >
//                       Confirm Resell
//                     </button>
//                     <button
//                       onClick={() => setResellMode(false)}
//                       className="text-gray-600 underline"
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </div>
//               ) : (
//                 <button
//                   onClick={() => setResellMode(true)}
//                   className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//                 >
//                   Resell Product
//                 </button>
//               )
//             ) : (
//               <button
//                 onClick={handleBuy}
//                 disabled={buying}
//                 className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
//               >
//                 {buying ? "Buying..." : "Buy Now"}
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Ownership History Section */}
//         <div className="mt-10 bg-gray-50 p-6 rounded shadow">
//           <h2 className="text-xl font-semibold mb-3">Ownership History</h2>
//           {product.soldHistory?.length > 0 ? (
//             <ul className="text-sm text-gray-700 space-y-2">
//               {product.soldHistory.map((entry, i) => (
//                 <li key={i}>
//                   <span className="font-medium">Owner ID:</span> {entry.owner} |{" "}
//                   <span className="font-medium">Price:</span> Rs. {entry.price} |{" "}
//                   <span className="font-medium">Date:</span> {new Date(entry.date).toLocaleDateString()}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">No ownership records yet.</p>
//           )}
//         </div>
        
//       </div>
//       <Footer/>
//     </>
//   );
// }
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  getProductById,
  resellProduct,
  requestProductTransfer, // <- Use this, NOT buyProductById
} from "../services/productService";

import Nevigate from "../components/nevigate";
import Footer from "./footer";

export default function ConsumerProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const isOwned = new URLSearchParams(location.search).get("owned") === "true";

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [resalePrice, setResalePrice] = useState(0);
  const [resellMode, setResellMode] = useState(false);
  const [buying, setBuying] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductById(id);
        setProduct(res.data.data);
      } catch (err) {
        console.error("Failed to fetch product", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleResell = async () => {
    if (!resalePrice || resalePrice <= 0) {
      alert("Enter a valid resale price");
      return;
    }

    try {
      await resellProduct(product._id, resalePrice);
      alert("Product put on sale!");
      setResellMode(false);
    } catch (err) {
      console.error("Resell failed", err);
      alert("Failed to resell product.");
    }
  };

  const handleBuy = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Please login to continue.");
      navigate("/login");
      return;
    }

    try {
      setBuying(true);
      await requestProductTransfer(product._id);
      alert("Transfer request sent! Awaiting seller confirmation.");
    } catch (err) {
      console.error("Transfer request failed", err);
      alert(err.response?.data?.message || "Failed to request transfer.");
    } finally {
      setBuying(false);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center text-red-500">Product not found.</p>;

  return (
    <>
      <Nevigate />
      <div className="max-w-6xl mx-auto px-6 py-10 bg-gradient-to-b from-amber-50 to-white text-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded shadow">
          {/* Left Side: Product Image */}
          <div>
            <img
              src={`http://localhost:5050/${product.image}`}
              alt={product.name}
              className="w-full h-[400px] object-cover rounded"
            />
          </div>

          {/* Right Side: Product Details */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <p className="text-sm text-gray-500 mb-1">
              Collection: <span className="font-medium">{product.collection?.title || "N/A"}</span>
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Creator:{" "}
              <span className="font-medium">
                {product.creator?.firstName} {product.creator?.lastName}
              </span>
            </p>

            <p className="text-2xl font-semibold text-green-600 mb-6">
              Rs. {product.resalePrice || product.originalPrice}
            </p>

            {/* Action Buttons */}
            {isOwned ? (
              resellMode ? (
                <div className="space-y-3">
                  <input
                    type="number"
                    value={resalePrice}
                    onChange={(e) => setResalePrice(parseFloat(e.target.value))}
                    placeholder="Set resale price"
                    className="border p-2 rounded w-full"
                  />
                  <div className="flex gap-4">
                    <button
                      onClick={handleResell}
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
                    >
                      Confirm Resell
                    </button>
                    <button
                      onClick={() => setResellMode(false)}
                      className="text-gray-600 underline"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setResellMode(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
                >
                  Resell Product
                </button>
              )
            ) : (
              <button
                onClick={handleBuy}
                disabled={buying}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
              >
                {buying ? "Requesting..." : "Buy Now"}
              </button>
            )}
          </div>
        </div>

        {/* Ownership History Section */}
        <div className="mt-10 bg-gray-50 p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-3">Ownership History</h2>
          {product.soldHistory?.length > 0 ? (
            <ul className="text-sm text-gray-700 space-y-2">
              {product.soldHistory.map((entry, i) => (
                <li key={i}>
                  <span className="font-medium">Owner ID:</span> {entry.owner} |{" "}
                  <span className="font-medium">Price:</span> Rs. {entry.price} |{" "}
                  <span className="font-medium">Date:</span>{" "}
                  {new Date(entry.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No ownership records yet.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
