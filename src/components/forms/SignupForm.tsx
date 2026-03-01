import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import { validateSignup } from "../../utils/auth.validations";
import { registerUser } from "../../services/auth.service";
import { SignUpFormValues } from "../../types/auth.types";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

const SignupForm: React.FC = () => {
  const navigate = useNavigate();

  const initialValues: SignUpFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const onSubmit = async (values: SignUpFormValues) => {
    try {
      await registerUser(values);
      toast.success("Registration successful! Please login.");
      setTimeout(() => navigate("/login"), 2000);
    } catch (error: unknown) {
      console.error(error);

      if (error instanceof AxiosError && error.response?.status === 409) {
        toast.error("User already exists");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateSignup}
      onSubmit={onSubmit}
      validateOnBlur={true}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <CustomInput type="text" label="Name" name="name" />
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="password" label="Password" name="password" />
          <CustomInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <button
            className="bg-teal-600 text-white p-2 mt-2 rounded-md w-full hover:cursor-pointer hover:bg-teal-500"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
