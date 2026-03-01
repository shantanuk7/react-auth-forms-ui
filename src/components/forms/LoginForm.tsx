import { Form, Formik } from "formik";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import { useUserContext } from "../../hooks/useUserContext";
import { LoginFormValues } from "../../types/auth.types";
import { validateLogin } from "../../utils/auth.validations";
import { loginUser } from "../../services/auth.service";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { token, setToken } = useUserContext();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const onSubmit = async (
    values: LoginFormValues
  ) => {
    try {
      const response = await loginUser(values);

      const token = response.data.data.token;
      localStorage.setItem("token", token);
      setToken(token);

      toast.success("Successfully logged in.");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      if(error instanceof AxiosError && error.response?.status === 401) {
        toast.error("Invalid email or password");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateLogin}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="password" label="Password" name="password" />
          <button
            type="submit"
            className="bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer hover:bg-amber-300"
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default LoginForm;