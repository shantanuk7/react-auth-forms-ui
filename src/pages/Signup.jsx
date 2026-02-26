import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className='w-96 mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-slate-100'>
        <h1 className="text-center font-bold mb-5 text-gray-600">
          Signup Form
        </h1>
        <SignupForm />
        <div className="mt-6 text-sm text-slate-700 flex justify-center">
          <span>Already have an account?</span>
          <Link className="text-slate-600 font-bold ml-1" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
