import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex bg-emerald-200 h-screen text-xl font-medium justify-center items-center">
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
