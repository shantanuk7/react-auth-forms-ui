import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Form from "../components/Form";

const Login: React.FC = () => {
  return (
    <Form formTitle="Login Form">
      <LoginForm />
      <div className="mt-6 text-sm text-slate-700 flex justify-center">
        <span>Don't have an account?</span>
        <Link className="text-slate-600 font-bold ml-1" to="/signup">
          Signup
        </Link>
      </div>
    </Form>
  );
}

export default Login;