import { Formik, Form, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import CustomInput from "./CustomInput";
import { validateSignup } from "../utils/auth.validations";
import { registerUser } from "../services/auth.service";
import { SignUpFormValues } from "../types/auth.types";

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
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validateSignup}
      onSubmit={onSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput type="text" label="Name" name="name" />
          <CustomInput type="email" label="Email" name="email" />
          <CustomInput type="password" label="Password" name="password" />
          <CustomInput
            type="password"
            label="Confirm Password"
            name="confirmPassword"
          />
          <button
            className="bg-amber-400 p-2 mt-2 rounded-md w-full hover:cursor-pointer hover:bg-amber-300"
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
