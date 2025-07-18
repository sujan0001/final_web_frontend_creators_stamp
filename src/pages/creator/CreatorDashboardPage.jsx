// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/useAuth";

// export default function CreatorDashboardPage() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div className="p-6 space-y-4">
//       <h1 className="text-2xl font-bold">Welcome, {user?.firstName} (Creator)</h1>

//       <button
//         onClick={() => navigate("/creator-dashboard/create-collection")}
//         className="px-4 py-2 bg-green-600 text-white rounded"
//       >
//         + Create Collection
//       </button>

//       <button
//         onClick={() => navigate("/creator-dashboard/my-creations")}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         View My Creations
//       </button>

//       <button
//         onClick={() => {
//           logout();
//           navigate("/login");
//         }}
//         className="px-4 py-2 bg-red-600 text-white rounded"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { getMyCollections, deleteCollection } from "../../services/collectionService";

export default function CreatorDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await getMyCollections();
        setCollections(res.data);
      } catch (err) {
        setError("Failed to load collections");
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this collection?");
    if (!confirmDelete) return;

    try {
      await deleteCollection(id);
      setCollections((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      alert("Failed to delete collection");
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName} 🎨
        </h1>
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/creator-dashboard/create-collection")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Create Collection
        </button>
      </div>

      {/* Collections Section */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Your Collections</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : collections.length === 0 ? (
          <p>No collections yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((collection) => (
              <div
                key={collection._id}
                className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
              >
                <img
                  src={`http://localhost:5050/${collection.coverImage}`}
                  alt={collection.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <h3 className="text-xl font-semibold">{collection.title}</h3>
                <p className="text-gray-600 mb-3">{collection.description}</p>

                <div className="flex flex-col gap-2">
                  <button
                    onClick={() =>
                      navigate(`/collections/${collection._id}/add-product`)
                    }
                    className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-sm"
                  >
                    + Add Product
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/collections/${collection._id}`)
                    }
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
                  >
                    Collection Details
                  </button>

                  <button
                    onClick={() => handleDelete(collection._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Delete Collection
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
