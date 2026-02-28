import { FormikErrors } from "formik";
import { SignUpFormValues, LoginFormValues } from "../types/auth.types";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateSignup = (values: SignUpFormValues): FormikErrors<SignUpFormValues> => {
    const errors: FormikErrors<SignUpFormValues> = {};

    if (!values.name) {
        errors.name = "Name is Required";
    } else if (values.name.length < 3 || values.name.length > 100) {
        errors.name = "Name must be between 3 and 100 characters";
    } else if (!/^[a-zA-Z\s'-]+$/.test(values.name)) { // Added support for hyphens/apostrophes
        errors.name = "Name contains invalid characters";
    }

	if (!values.email) {
		errors.email = "Email is Required";
	} else if (!emailRegex.test(values.email)) {
		errors.email = "Invalid email address";
	}

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;
    if (!values.password) {
        errors.password = "Password is Required";
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
    } else if (!passwordRegex.test(values.password)) {
        errors.password = "Password must include uppercase, lowercase, number, and symbol";
    }

	if (!values.confirmPassword) {
		errors.confirmPassword = "Confirm Password is Required";
	} else if (values.confirmPassword !== values.password) {
		errors.confirmPassword = "Password must match";
	}

	return errors;
};

export const validateLogin = (
  values: LoginFormValues
): FormikErrors<LoginFormValues> => {
  const errors: FormikErrors<LoginFormValues> = {};

  if (!values.email) {
    errors.email = "Email is Required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }

  return errors;
};