import { FormikErrors } from "formik";
import { SignUpFormValues, LoginFormValues } from "../types/auth.types";

export const validateSignup = (
	values: SignUpFormValues,
): FormikErrors<SignUpFormValues> => {
	const errors: FormikErrors<SignUpFormValues> = {};
	const maxNameLength = 100;
	const minNameLength = 3;

	if (!values.name) {
		errors.name = "Required";
	} else if (values.name.length > maxNameLength) {
		errors.name = `Name must be less than ${maxNameLength} characters`;
	} else if (values.name.length < minNameLength) {
		errors.name = `Name must be greater than ${minNameLength} characters`;
	}

	if (!values.email) {
		errors.email = "Required";
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
		errors.email = "Invalid email address";
	}

	if (!values.password) {
		errors.password = "Required";
	} else if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/.test(
			values.password,
		)
	) {
		errors.password =
			"Password must contain lowercase, uppercase, number and special character";
	}

	if (!values.confirmPassword) {
		errors.confirmPassword = "Required";
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
    errors.email = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};