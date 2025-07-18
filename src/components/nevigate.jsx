
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/useAuth";
// import logo from "../assets/hehe.png";
// import defaultProfile from "../assets/default-profile.png"; // 👈 You need this or use a placeholder
// import { useState } from "react";

// export default function Navigate() {
//   const { logout } = useAuth();
//   const navigate = useNavigate();
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-white shadow px-6 py-4 flex justify-between items-center relative">
//       {/* Left: Logo */}
//       <div className="flex items-center space-x-4">
//         <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
//         <h1 className="text-xl font-bold text-gray-800">CREATOR'S STAMP</h1>
//       </div>

//       {/* Middle: Nav Links */}
//       <div className="flex items-center space-x-6">
//         <button onClick={() => navigate("/dashboard")} className="text-gray-700 hover:text-blue-600 font-medium">
//           Discover
//         </button>
//         <button onClick={() => navigate("/secondary-marketplace")} className="text-gray-700 hover:text-blue-600 font-medium">
//           Secondary Marketplace
//         </button>
//         <button onClick={() => navigate("/my-ownership")} className="text-gray-700 hover:text-blue-600 font-medium">
//           My Ownership
//         </button>

//         {/* Right: Profile Dropdown */}
//         <div className="relative">
//           <img
//             src={defaultProfile}
//             alt="Profile"
//             className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           />

//           {dropdownOpen && (
//             <div
//               onMouseLeave={() => setDropdownOpen(false)}
//               className="absolute right-0 mt-2 w-64 bg-white shadow-xl border rounded-lg z-50"
//             >
//               {/* Profile */}
//               <div className="flex items-center space-x-3 p-4 border-b">
//                 <img src={defaultProfile} alt="Profile" className="w-10 h-10 rounded-full" />
//                 <div>
//                   <p className="font-semibold text-gray-800">Username</p>
//                   <p className="text-sm text-gray-500">Consumer</p>
//                 </div>
//               </div>

//               {/* Links */}
//               <div className="py-2">
//                 {["Edit Profile", "Settings & Privacy", "Help & Support", "Display & Accessibility"].map((text, idx) => (
//                   <button
//                     key={idx}
//                     onClick={() => navigate("/dashboard")}
//                     className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
//                   >
//                     {text}
//                   </button>
//                 ))}
//               </div>

//               {/* Logout */}
//               <div className="border-t px-4 py-2">
//                 <button
//                   onClick={handleLogout}
//                   className="w-full text-left text-red-600 hover:text-red-700"
//                 >
//                   Logout
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import logo from "../assets/hehe.png";
import defaultProfile from "../assets/default-profile.png";
import { useState } from "react";

export default function Nevigate() {
  const { logout, user } = useAuth(); // ✅ Get user from context
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center relative sticky top-0 z-50 bg-white shadow-md py-3 px-6">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
        <h1 className="text-xl font-bold text-gray-800">CREATOR'S STAMP</h1>
      </div>

      {/* Middle: Nav Links */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => navigate("/dashboard")}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Discover
        </button>
        <button
          onClick={() => navigate("/secondary-marketplace")}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Secondary Marketplace
        </button>
        <button
          onClick={() => navigate("/my-ownership")}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          My Ownership
        </button>

        {/* Right: Profile Dropdown */}
        <div className="relative">
          <img
            src={defaultProfile}
            alt="Profile"
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-300"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          />

          {dropdownOpen && (
            <div
              onMouseLeave={() => setDropdownOpen(false)}
              className="absolute right-0 mt-2 w-64 bg-white shadow-xl border rounded-lg z-50"
            >
              {/* Profile */}
              <div className="flex items-center space-x-3 p-4 border-b">
                <img
                  src={defaultProfile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Welcome, {user?.firstName || "User"}!
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {user?.role || "Consumer"}
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="py-2">
                {[
                  "Edit Profile",
                  "Settings & Privacy",
                  "Help & Support",
                  "Display & Accessibility",
                ].map((text, idx) => (
                  <button
                    key={idx}
                    onClick={() => navigate("/dashboard")} // placeholder route
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {text}
                  </button>
                ))}
              </div>

              {/* Logout */}
              <div className="border-t px-4 py-2">
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-red-600 hover:text-red-700"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
