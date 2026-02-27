import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export const ProtectedRoute = () => {
  const context = useContext(UserContext);

  if(!context) {
    return <Navigate to="/login" replace />;
  }

  const { token } = context;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};