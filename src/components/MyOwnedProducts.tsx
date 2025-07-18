
// import { useEffect, useState } from "react";
// import { getMyOwnedProducts, resellProduct } from "../services/productService";

// type Product = {
//   _id: string;
//   name: string;
//   description?: string;
//   image: string;
//   originalPrice: number;
//   resalePrice?: number;
//   creator: {
//     firstName: string;
//     lastName: string;
//   };
//   collection: {
//     title: string;
//   };
// };

// export default function MyOwnedProducts() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   const [resellModalOpen, setResellModalOpen] = useState(false);
//   const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
//   const [resalePrice, setResalePrice] = useState<number>(0);

//   const openModal = (productId: string) => {
//     setSelectedProductId(productId);
//     setResellModalOpen(true);
//   };

//   const closeModal = () => {
//     setResellModalOpen(false);
//     setSelectedProductId(null);
//     setResalePrice(0);
//   };

//   const handleResell = async () => {
//     if (!selectedProductId || resalePrice <= 0) return alert("Enter valid price");
//     try {
//       await resellProduct(selectedProductId, resalePrice);
//       closeModal();
//       // Refresh list
//       const res = await getMyOwnedProducts();
//       setProducts(res.data.data);
//     } catch (err) {
//       console.error("Resell failed", err);
//     }
//   };

//   useEffect(() => {
//     const loadOwned = async () => {
//       try {
//         const res = await getMyOwnedProducts();
//         setProducts(res.data.data);
//       } catch (err) {
//         console.error("Failed to load owned products", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadOwned();
//   }, []);

//   if (loading) return <p>Loading your products...</p>;

//   return (
//     <div className="relative">
//       <h1 className="text-2xl font-bold mb-4">My Owned Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {products.map((product) => (
//           <div key={product._id} className="p-4 rounded-xl shadow-md border bg-white">
//             <img
//               src={`http://localhost:5050/${product.image}`}
//               alt={product.name}
//               className="w-full h-48 object-cover rounded-md mb-2"
//             />
//             <h2 className="text-xl font-semibold">{product.name}</h2>
//             <p className="text-gray-700">{product.description}</p>
//             <p className="text-sm text-gray-500 mt-1">
//               Collection: {product.collection?.title || "N/A"}
//             </p>
//             <p className="text-green-700 font-bold mt-2">Rs. {product.originalPrice}</p>
//             <p className="text-sm text-gray-500">
//               By: {product.creator.firstName} {product.creator.lastName}
//             </p>

//             <button
//               onClick={() => openModal(product._id)}
//               className="mt-4 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
//             >
//               Resell
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {resellModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
//             <h2 className="text-xl font-bold mb-3">Set Resale Price</h2>
//             <input
//               type="number"
//               value={resalePrice}
//               onChange={(e) => setResalePrice(parseFloat(e.target.value))}
//               placeholder="Enter resale price"
//               className="w-full p-2 border rounded mb-4"
//             />
//             <div className="flex justify-end space-x-2">
//               <button
//                 onClick={closeModal}
//                 className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResell}
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//               >
//                 Confirm
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyOwnedProducts, resellProduct } from "../services/productService";
import Nevigate from "./nevigate";
import Footer from "./footer";

type Product = {
  _id: string;
  name: string;
  description?: string;
  image: string;
  originalPrice: number;
  resalePrice?: number;
  creator: {
    firstName: string;
    lastName: string;
  };
  collection: {
    title: string;
  };
};

export default function MyOwnedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [resellModalOpen, setResellModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [resalePrice, setResalePrice] = useState<number>(0);

  const navigate = useNavigate();

  const openModal = (productId: string) => {
    setSelectedProductId(productId);
    setResellModalOpen(true);
  };

  const closeModal = () => {
    setResellModalOpen(false);
    setSelectedProductId(null);
    setResalePrice(0);
  };

  const handleResell = async () => {
    if (!selectedProductId || resalePrice <= 0) return alert("Enter valid price");
    try {
      await resellProduct(selectedProductId, resalePrice);
      closeModal();
      const res = await getMyOwnedProducts();
      setProducts(res.data.data);
    } catch (err) {
      console.error("Resell failed", err);
    }
  };

  useEffect(() => {
    const loadOwned = async () => {
      try {
        const res = await getMyOwnedProducts();
        setProducts(res.data.data);
      } catch (err) {
        console.error("Failed to load owned products", err);
      } finally {
        setLoading(false);
      }
    };
    loadOwned();
  }, []);

  if (loading) return <p>Loading your products...</p>;

  return (
    <div className="relative">
      <Nevigate/>
      <h1 className="text-2xl font-bold mb-4">My Owned Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="p-4 rounded-xl shadow-md border bg-white">
            <img
              src={`http://localhost:5050/${product.image}`}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md mb-2"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              Collection: {product.collection?.title || "N/A"}
            </p>
            <p className="text-green-700 font-bold mt-2">Rs. {product.originalPrice}</p>
            <p className="text-sm text-gray-500">
              By: {product.creator.firstName} {product.creator.lastName}
            </p>

            <button
              onClick={() => openModal(product._id)}
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
            >
              Resell
            </button>

            <button
              onClick={() => navigate(`/consumer/product/${product._id}?owned=true`)}
              className="mt-2 w-full bg-gray-800 text-white py-1 rounded hover:bg-gray-900"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {resellModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-80 shadow-lg">
            <h2 className="text-xl font-bold mb-3">Set Resale Price</h2>
            <input
              type="number"
              value={resalePrice}
              onChange={(e) => setResalePrice(parseFloat(e.target.value))}
              placeholder="Enter resale price"
              className="w-full p-2 border rounded mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleResell}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
