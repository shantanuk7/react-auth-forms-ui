import { Toaster } from "react-hot-toast";
import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <UserContextProvider>
        <AppRoutes />
        <Toaster position="top-right" />
    </UserContextProvider>
  );
}

export default App;