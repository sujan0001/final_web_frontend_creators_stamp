// import { useEffect, useState } from "react";
// import { getMyCollections } from "../services/collectionService";

// export default function MyCreationsPage() {
//   const [collections, setCollections] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await getMyCollections();
//       setCollections(res.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">My Collections</h2>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//         {collections.map((col) => (
//           <div
//             key={col._id}
//             className="border p-4 rounded shadow hover:shadow-md transition"
//           >
//             <img
//               src={`http://localhost:5050/${col.coverImage}`}
//               alt={col.title}
//               className="w-full h-40 object-cover mb-2"
//             />
//             <h3 className="font-semibold text-lg">{col.title}</h3>
//             <p className="text-sm text-gray-600">{col.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import this
import { getMyCollections, deleteCollection } from "../../services/collectionService";

export default function MyCreationsPage() {
  const [collections, setCollections] = useState([]);
  const navigate = useNavigate(); // ✅ define it here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyCollections();
        setCollections(res.data);
      } catch (err) {
        console.error("Error fetching collections:", err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this collection?");
    if (!confirmDelete) return;

    try {
      await deleteCollection(id);
      setCollections((prev) => prev.filter((col) => col._id !== id));
    } catch (err) {
      console.error("Error deleting collection:", err);
      alert("Failed to delete. You may not have permission or there was a server issue.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Collections</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((col) => (
          <div
            key={col._id}
            className="border p-4 rounded shadow hover:shadow-md transition relative"
          >
            <img
              src={`http://localhost:5050/${col.coverImage}`}
              alt={col.title}
              className="w-full h-40 object-cover mb-2"
            />
            <h3 className="font-semibold text-lg">{col.title}</h3>
            <p className="text-sm text-gray-600">{col.description}</p>

            <button
              onClick={() => handleDelete(col._id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              title="Delete Collection"
            >
              🗑️ Delete
            </button>

            <button
              onClick={() => navigate(`/collections/${col._id}/add-product`)} // ✅ now works
              className="mt-3 text-sm text-blue-600 hover:underline"
            >
              ➕ Add Product
            </button>
            <button
            onClick={() => navigate(`/collections/${col._id}`)}
            className="mt-2 text-blue-600 underline"
            >
            View Products
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
