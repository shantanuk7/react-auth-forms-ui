import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="flex bg-emerald-200 h-screen text-xl font-medium justify-center items-center">
            <div className="w-96 p-10 bg-cyan-50 rounded-lg">
                <div>
                    404 Not Found
                    <br/>
                    <Link to={"/"} className="text-blue-800">Go To Homepage</Link>
                </div>
            </div>
        </div>
    );
}
