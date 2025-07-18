// import { useEffect, useState } from "react";
// import { getAllCreators } from "../services/userService";

// export default function CreatorList() {
//   const [creators, setCreators] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCreators = async () => {
//       try {
//         const res = await getAllCreators();
//         setCreators(res.data); // Assuming res = { success: true, data: [...] }
//       } catch (err) {
//         console.error("Failed to fetch creators:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCreators();
//   }, []);

//   if (loading) return <p>Loading creators...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-3">Our Creators</h2>
//       <ul className="space-y-3">
//         {creators.map((creator) => (
//           <li key={creator._id} className="border rounded-md p-3 shadow-sm">
//             <p className="font-bold">
//               {creator.firstName} {creator.lastName}
//             </p>
//             <p className="text-gray-600 text-sm">{creator.email}</p>
//             <p className="text-gray-400 text-xs">
//               Joined: {new Date(creator.createdAt).toLocaleDateString()}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getAllCreators } from "../services/userService";
import { Check } from "lucide-react";
import face from "../assets/artist.png";
import check from "../assets/instagram_verified.png";

export default function CreatorList() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreators = async () => {
      try {
        const res = await getAllCreators();
        setCreators(res.data); // Assuming res = { success: true, data: [...] }
      } catch (err) {
        console.error("Failed to fetch creators:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCreators();
  }, []);

  if (loading) return <p>Loading creators...</p>;

  return (
    <div className="relative w-full p-4">
      <h2 className="text-lg font-semibold mb-4 text-center">Our Creators</h2>
      <div className="space-y-3">
        {creators.map((creator) => (
          <div
            key={creator._id}
            className="flex items-center gap-3 p-3 border rounded-lg shadow-sm hover:bg-muted/50 transition-colors cursor-pointer"
          >
            {/* Placeholder avatar if needed */}
            <div className="relative">
              <img src={face} alt="Logo" className="h-8 w-8 object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-medium text-sm text-foreground truncate">
                  {creator.firstName} {creator.lastName}
                </p>
                <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                  {/* <Check className="w-3 h-3 text-white" /> */}
                  <img src={check} alt="check" className="h-8 w-8 object-cover" />
                </div>
              </div>
              <p className="text-gray-600 text-xs">{creator.email}</p>
              <p className="text-gray-400 text-xs">
                Joined: {new Date(creator.createdAt).toLocaleDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
