import "./App.css";
import ToastEmitter from "./components/ui/ToastEmitter";
import TicketContextProvider from "./context/TicketContextProvider";
import UserContextProvider from "./context/UserContextProvider";
import AppRoutes from "./routes/AppRoutes";

const App: React.FC = () => {
  return (
    <UserContextProvider>
      <TicketContextProvider>
        <AppRoutes />
        <ToastEmitter />
      </TicketContextProvider>
    </UserContextProvider>
  );
}

export default App;