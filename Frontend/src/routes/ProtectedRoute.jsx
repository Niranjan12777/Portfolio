import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext.jsx";

function ProtectedRoute({ children }) {
  const { loading, isAuthenticated } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return isAuthenticated ? children : <Navigate to="/admin/login" replace />;
}

export default ProtectedRoute;