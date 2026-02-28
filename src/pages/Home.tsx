import { Link } from "react-router-dom";
import Header from "../components/ui/Header";
import TicketsTable from "../components/dashboard/TicketsTable";
import Dashboard from "../components/dashboard/Dashboard";

const Home: React.FC = () => {
    return (
        <div className="">
            <Header/>
            <Dashboard/>
        </div>
    );
}

export default Home;