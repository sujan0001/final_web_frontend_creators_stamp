import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { registerUser } from "../services/authService";

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const res = await registerUser(formData);
      alert(res.message); // You can replace this with react-toastify
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed.");
    }
  };

  return (
  <div className="min-h-screen flex items-center justify-center bg-red-600 dark:bg-red-900 px-4 relative">
    {/* 🔙 Back Button */}
    <button
      onClick={() => navigate("/login")}
      className="absolute top-4 left-4 text-white text-sm hover:underline"
    >
      ← Back to Login
    </button>

    {/* Centered Box */}
    <div className="w-full max-w-lg bg-white dark:bg-gray-800 shadow-2xl rounded-2xl p-8 sm:p-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Create an Account
      </h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  </div>
);

}
