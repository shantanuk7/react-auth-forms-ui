import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export const ProtectedRoute = () => {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};