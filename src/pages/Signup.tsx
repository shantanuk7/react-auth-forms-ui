import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import Form from "../components/Form";

const Signup: React.FC = () => {
  return (
    <Form formTitle="Signup Form">
        <SignupForm />
        <div className="mt-6 text-sm text-slate-700 flex justify-center">
          <span>Already have an account?</span>
          <Link className="text-slate-600 font-bold ml-1" to="/login">
            Login
          </Link>
        </div>
    </Form>
  );
}

export default Signup;