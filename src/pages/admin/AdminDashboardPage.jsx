import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";

export default function AdminDashboardPage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.firstName} (Admin)!</h1>
      <p>This is a protected admin dashboard accessible only by users with the 'admin' role.</p>

      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
