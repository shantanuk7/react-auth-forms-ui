import "./App.css";
import ToastEmitter from "./components/common/ToastEmitter";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <AppRoutes />
      <ToastEmitter />
    </UserContextProvider>
  );
}

export default App;