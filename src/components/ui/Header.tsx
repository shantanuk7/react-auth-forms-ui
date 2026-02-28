import { Link } from "react-router-dom";
import logout from "../../utils/auth.logout";

const Header: React.FC= () => {
    return <header className="bg-teal-800 p-4 text-white shadow-lg">
        <div className="mx-auto flex justify-between items-center">
            <h1 className="text-md font-medium">Customer Support System</h1>
            <nav>
                <ul className="flex space-x-4">
                    <Link to={"/"} className="hover:text-emerald-200 text-md">Home</Link>
                    <li><a href="#" className="hover:text-emerald-200 text-md" onClick={logout}>Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
}

export default Header;