import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../hooks/useUserContext";
import TicketContextProvider from "../context/TicketContextProvider";

const ProtectedRoute: React.FC = () => {
  const { token } = useUserContext();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <TicketContextProvider>
     <Outlet />
  </TicketContextProvider>;
};

export { ProtectedRoute };