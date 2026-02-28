import { FormikErrors } from "formik";
import { SignUpFormValues, LoginFormValues } from "../types/auth.types";

export const validateSignup = (
	values: SignUpFormValues,
): FormikErrors<SignUpFormValues> => {
	const errors: FormikErrors<SignUpFormValues> = {};
	const maxNameLength = 100;
	const minNameLength = 3;
	const nameRegex = /^(?!.*\d)[a-zA-Z\s]{2,50}$/;
	const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
	const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

	if (!values.name) {
		errors.name = "Name is Required";
	} else if (values.name.length > maxNameLength) {
		errors.name = `Name must be less than ${maxNameLength} characters`;
	} else if (values.name.length < minNameLength) {
		errors.name = `Name must be greater than ${minNameLength} characters`;
	} else if (!nameRegex.test(values.name)) {
		errors.name = "Name must not contain numbers and special characters";
	}

	if (!values.email) {
		errors.email = "Email is Required";
	} else if (!emailRegex.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Password is Required";
	} else if (!passwordRegex.test(values.password)) {
		errors.password =
			"Password must contain lowercase, uppercase, number and special character";
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
  } else if (
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Password is Required";
  }

  return errors;
};