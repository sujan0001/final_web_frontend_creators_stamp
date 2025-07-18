// import { useEffect, useState } from "react";
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import { getProductById, resellProduct, buyProductById } from "../services/productService";

// import Nevigate from "../components/nevigate";

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
//         setProduct(res.data.data); // ✅ Access proper product object
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

//   const handleBuy = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       alert("Please login to continue.");
//       return navigate("/login");
//     }

//     try {
//       setBuying(true);
//       await buyProductById(product._id);
//       alert("Product purchased!");
//     } catch (err) {
//       console.error("Purchase failed", err);
//       alert("Failed to buy product.");
//     } finally {
//       setBuying(false);
//     }
//   };

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center text-red-500">Product not found.</p>;

//   return (
//     <><Nevigate /><div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">

//       <img
//         src={`http://localhost:5050/${product.image}`}
//         alt={product.name}
//         className="w-full h-64 object-cover rounded mb-4" />
//       <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//       <p className="text-gray-700 mb-2">{product.description}</p>

//       <p className="text-sm text-gray-500 mb-1">
//         Collection: {product.collection?.title || "N/A"}
//       </p>
//       <p className="text-sm text-gray-500 mb-1">
//         Creator: {product.creator?.firstName} {product.creator?.lastName}
//       </p>
//       <p className="text-green-700 font-bold text-lg mt-2">
//         Price: Rs. {product.resalePrice || product.originalPrice}
//       </p>

//       {/* 👇 Conditional Actions */}
//       {isOwned ? (
//         <>
//           {resellMode ? (
//             <div className="mt-4">
//               <input
//                 type="number"
//                 value={resalePrice}
//                 onChange={(e) => setResalePrice(parseFloat(e.target.value))}
//                 placeholder="Set resale price"
//                 className="border p-2 rounded w-full mb-2" />
//               <button
//                 onClick={handleResell}
//                 className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
//               >
//                 Confirm Resell
//               </button>
//               <button
//                 onClick={() => setResellMode(false)}
//                 className="ml-2 text-gray-600 underline"
//               >
//                 Cancel
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={() => setResellMode(true)}
//               className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Resell
//             </button>
//           )}
//         </>
//       ) : (
//         <button
//           onClick={handleBuy}
//           disabled={buying}
//           className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//         >
//           {buying ? "Buying..." : "Buy Now"}
//         </button>
//       )}

//       {/* 👇 Ownership History */}
//       <div className="mt-6">
//         <h2 className="font-semibold mb-2">Ownership History:</h2>
//         {product.soldHistory?.length > 0 ? (
//           <ul className="text-sm text-gray-600 list-disc ml-5">
//             {product.soldHistory.map((entry, i) => (
//               <li key={i}>
//                 Owner ID: {entry.owner} | Price: Rs. {entry.price} |{" "}
//                 {new Date(entry.date).toLocaleDateString()}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-500">No ownership records yet.</p>
//         )}
//       </div>
//     </div></>
//   );
// }
import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getProductById, resellProduct, buyProductById } from "../services/productService";

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
    if (!resalePrice || resalePrice <= 0) return alert("Enter a valid resale price");

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
      return navigate("/login");
    }

    try {
      setBuying(true);
      await buyProductById(product._id);
      alert("Product purchased!");
    } catch (err) {
      console.error("Purchase failed", err);
      alert("Failed to buy product.");
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
              Creator: <span className="font-medium">{product.creator?.firstName} {product.creator?.lastName}</span>
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
                {buying ? "Buying..." : "Buy Now"}
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
                  <span className="font-medium">Date:</span> {new Date(entry.date).toLocaleDateString()}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No ownership records yet.</p>
          )}
        </div>
        
      </div>
      <Footer/>
    </>
  );
}
