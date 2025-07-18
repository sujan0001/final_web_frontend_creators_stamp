// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../auth/useAuth";

// export default function DashboardPage() {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName}!</h1>
//       <p>This is a protected dashboard for 'consumer' users.</p>

//       <button
//         onClick={handleLogout}
//         className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
//       >
//         Logout
//       </button>
//     </div>
//   );
// }
// import { useAuth } from "../auth/useAuth";
// import Navigate from "../components/navigate"; // Adjust path if needed

// export default function DashboardPage() {
//   const { user } = useAuth();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navigate />

//       <main className="p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-2">
//           Welcome, {user?.firstName}!
//         </h2>
//         <p className="text-gray-600">This is your consumer dashboard.</p>
//       </main>
//     </div>
//   );
// }
import { useAuth } from "../auth/useAuth";
import Nevigate from "../components/nevigate";
import CreatorList from "../components/CreatorList"; // ✅ Import component
import CollectionList from "../components/CollectionList";
import AvailableProducts from "../components/AvailableProducts";
import CollectionCarasoul from "../components/CollectionCarasoul";
import Footer from "../components/footer";


export default function DashboardPage() {
  const { user } = useAuth();

  return (
  

    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white text-gray-900">
      <Nevigate className="mb-2" />

      {/* Top: Carousel + Creator List */}
      <div className="flex flex-col md:flex-row gap-6 px-6 py-4 max-w-7xl mx-auto">
        {/* Left */}
        <div className="w-full md:w-[80%]">
          <CollectionCarasoul />
        </div>

        {/* Right */}
        <div className="w-full md:w-[20%]">
          <CreatorList />
        </div>
      </div>

      {/* Bottom: CollectionList + AvailableProducts aligned same as carousel */}
      <div className="px-6 py-4 max-w-7xl mx-auto">
        <div className="w-full md:w-[80%]">
          <CollectionList />
          <div className="py-8">
          <AvailableProducts /></div>
        </div>
      </div>
      <Footer/>
    </div>


    
  );
}

