import { Link } from "react-router-dom";
import Header from "../components/ui/Header";

const Home: React.FC = () => {
    return (
        <div className="">
            <Header/>
            <div className="w-96 p-10 bg-cyan-50 rounded-lg">
                <div>
                    Welcome to Homepage! 
                    <br/>
                    <Link to={"/create-ticket"} className="text-blue-800">Create Ticket</Link>
                </div>
            </div>
        </div>
    );
}

export default Home;