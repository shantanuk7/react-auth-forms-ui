import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";

const ProtectedRoute: React.FC = () => {
  const { token } = useUserContext();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export { ProtectedRoute };