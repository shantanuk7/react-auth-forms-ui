import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import CreateTicket from "../pages/CreateTicket";
import NotFound from "../pages/NotFound";
import { ProtectedRoute } from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home />} />
        <Route path="/create-ticket" element={<CreateTicket />} />
      </Route>

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}