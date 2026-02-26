import { Link } from "react-router-dom"
import LoginForm from "../components/LoginForm"

export default function Login() {
    return <div className='h-screen flex justify-center items-center'>
        <div className='w-96 mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-slate-100'>
            <h1 className='text-center font-bold mb-5 text-gray-600'>Login Form</h1>
            <LoginForm/>
            <div className="mt-6 text-sm text-slate-700 flex justify-center">
                <span>Don't have an account?</span>
                <Link className="text-slate-600 font-bold ml-1" to="/signup">
                    Signup
                </Link>
            </div>
        </div>
    </div>
}
