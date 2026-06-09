// components/ProtectedRoute.jsx
// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  // 1. Not logged in
  if (!token) {
    return <Navigate to="/" replace />;
  }

  // 2. Role restriction (if provided)
  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default ProtectedRoute;