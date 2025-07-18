import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/useAuth";

export default function ProtectedRoute({ children, allowedRole }) {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  if (role?.toLowerCase() !== allowedRole.toLowerCase()) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
