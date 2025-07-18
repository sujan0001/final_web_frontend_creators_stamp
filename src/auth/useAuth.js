// export function useAuth() {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   const isLoggedIn = !!token;

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   return { token, user, isLoggedIn, logout };
// }
// export function useAuth() {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user"));

//   const isLoggedIn = !!token;
//   const role = user?.role;

//   console.log("Auth Debug:", { token, user, isLoggedIn, role }); // 👈

//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//   };

//   return { token, user, role, isLoggedIn, logout };
// }
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const token = localStorage.getItem("token");
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;

  const isLoggedIn = !!token;
  const role = user?.role;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return { token, user, role, isLoggedIn, logout };
}
