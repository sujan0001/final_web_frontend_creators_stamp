
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../auth/useAuth";

// export default function CreatorNavigation() {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
//       <div className="flex space-x-6">
//         <Link
//           to="/creator-dashboard"
//           className="hover:text-green-400 font-semibold"
//         >
//           Dashboard
//         </Link>
//         <Link
//           to="/creator-dashboard/create-collection"
//           className="hover:text-green-400 font-semibold"
//         >
//           Create Collection
//         </Link>
//       </div>

//       <button
//         onClick={handleLogout}
//         className="bg-red-600 px-3 py-1 rounded hover:bg-red-700 transition"
//       >
//         Logout
//       </button>
//     </nav>
//   );
// }
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";
import logo from "../assets/hehe.png"; // adjust path if needed
import defaultProfile from "../assets/artist.png"; // adjust path if needed
import { useState } from "react";

export default function CreatorNavigation() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center relative sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center space-x-4 cursor-pointer" onClick={() => navigate("/creator-dashboard")}>
        <img src={logo} alt="Logo" className="h-8 w-8 object-cover" />
        <h1 className="text-xl font-bold text-gray-800">CREATOR'S STAMP</h1>
      </div>

      {/* Middle: Nav Links */}
      <div className="flex items-center space-x-6">
        <button
          onClick={() => navigate("/creator-dashboard")}
          className="text-gray-700 hover:text-green-600 font-medium"
        >
          Dashboard
        </button>
        <button
          onClick={() => navigate("/creator-dashboard/create-collection")}
          className="text-gray-700 hover:text-green-600 font-medium"
        >
          Create Collection
        </button>
        <button
          onClick={() => navigate("/creator/requests")}
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Requests
        </button>


        {/* Profile Dropdown */}
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
              {/* Profile info */}
              <div className="flex items-center space-x-3 p-4 border-b">
                <img
                  src={defaultProfile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-800">
                    Welcome, {user?.firstName || "Creator"}!
                  </p>
                  <p className="text-sm text-gray-500 capitalize">
                    {user?.role || "Creator"}
                  </p>
                </div>
              </div>

              {/* Links (optional, you can customize or remove) */}
              <div className="py-2">
                {[
                  "Edit Profile",
                  "Settings & Privacy",
                  "Help & Support",
                  "Display & Accessibility",
                ].map((text, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDropdownOpen(false);
                      navigate("/creator-dashboard"); // placeholder, customize as needed
                    }}
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
