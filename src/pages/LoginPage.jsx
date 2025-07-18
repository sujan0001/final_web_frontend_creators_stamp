// import { useNavigate } from "react-router-dom";
// import LoginForm from "../components/LoginForm";
// import { loginUser } from "../services/authService";

// export default function LoginPage() {
//   const navigate = useNavigate();

//   const handleLogin = async (credentials) => {
//     const res = await loginUser(credentials);
//     localStorage.setItem("token", res.token);
//     localStorage.setItem("user", JSON.stringify(res.user));
//     navigate("/dashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <LoginForm onLogin={handleLogin} />
//       <button onClick={() => navigate("/register")}
//   className="text-blue-600 underline mt-4"
// >
// Register
// </button>
//     </div>
   
//   );
// }

import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { loginUser } from "../services/authService";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const res = await loginUser(credentials);
      
      // Save user and token to localStorage
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));

      // Role-based navigation
      const role = res.user.role;

      if (role === "creator") {
        navigate("/creator-dashboard");
      } else if (role === "consumer") {
        navigate("/dashboard");
      } else if (role === "admin") {
        navigate("/admin-dashboard"); // optional
      } else {
        navigate("/unauthorized");
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <LoginForm onLogin={handleLogin} />

      <button
        onClick={() => navigate("/register")}
        className="text-blue-600 underline mt-4"
      >
        Register
      </button>
    </div>
  );
}

