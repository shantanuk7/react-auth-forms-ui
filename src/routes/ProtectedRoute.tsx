import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

export const ProtectedRoute = () => {
  const { token } = useUserContext();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};