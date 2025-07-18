
// import { useEffect, useState } from "react";
// import { getAllCollections } from "../services/collectionService";

// export default function CollectionList() {
//   const [collections, setCollections] = useState([]);
//   const [error, setError] = useState("");

//   useEffect(() => {
//   const fetchCollections = async () => {
//     try {
//       const res = await getAllCollections();
//       console.log("Collection response:", res.data); // 🔍 check the shape

//       // Choose the correct one based on the console
//       const incoming = Array.isArray(res.data) ? res.data : res.data?.data;

//       setCollections(incoming || []);
//     } catch (err) {
//       setError("Failed to fetch collections");
//       console.error("Fetch collections error:", err);
//     }
//   };

//   fetchCollections();
// }, []);


//   return (
//     <div className="mt-6 px-4">
//       <h3 className="text-2xl font-semibold mb-6 text-gray-800">All Collections</h3>
//       {error && <p className="text-red-500">{error}</p>}
//       <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {collections.map((col) => (
//           <li
//             key={col._id}
//             className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-200"
//           >
//             <div className="flex">
//               {col.coverImage && (
//                 <img
//                   src={`http://localhost:5050/${col.coverImage}`}
//                   alt={col.title}
//                   className="w-32 h-32 object-cover"
//                 />
//               )}
//               <div className="p-4">
//                 <h4 className="text-lg font-bold text-gray-900">{col.title}</h4>
//                 <p className="text-sm text-gray-500 mb-1">
//                   By: {col.creator?.firstName} {col.creator?.lastName}
//                 </p>
//                 <p className="text-gray-700 text-sm">{col.description}</p>
//               </div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getAllCollections } from "../services/collectionService";

export default function CollectionList() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState("");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await getAllCollections();
        setCollections(res.data);
      } catch (err) {
        setError("Failed to fetch collections");
        console.error("Fetch collections error:", err);
      }
    };

    fetchCollections();
  }, []);

  const firstThree = collections.slice(0, 3);
  const rest = collections.slice(3);

  return (
    <div className="mt-6 px-4">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">All Collections</h3>
      {error && <p className="text-red-500">{error}</p>}

      {/* First 3 collections in responsive grid */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4">
        {firstThree.map((col) => (
          <li
            key={col._id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 flex gap-4 items-start p-4"
          >
            {col.coverImage && (
              <img
                src={`http://localhost:5050/${col.coverImage}`}
                alt={col.title}
                className="w-24 h-24 object-cover rounded-lg"
              />
            )}
            <div>
              <h4 className="text-lg font-bold text-gray-900">{col.title}</h4>
              <p className="text-sm text-gray-500 mb-1">
                By: {col.creator?.firstName} {col.creator?.lastName}
              </p>
              <p className="text-gray-700 text-sm">{col.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {/* Rest collections */}
      {showAll && rest.length > 0 && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((col) => (
            <li
              key={col._id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 flex gap-4 items-start p-4"
            >
              {col.coverImage && (
                <img
                  src={`http://localhost:5050/${col.coverImage}`}
                  alt={col.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              )}
              <div>
                <h4 className="text-lg font-bold text-gray-900">{col.title}</h4>
                <p className="text-sm text-gray-500 mb-1">
                  By: {col.creator?.firstName} {col.creator?.lastName}
                </p>
                <p className="text-gray-700 text-sm">{col.description}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {collections.length > 3 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-blue-600 hover:underline font-medium"
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      )}
    </div>
  );
}
