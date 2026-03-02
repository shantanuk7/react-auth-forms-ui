import api from "../lib/axios";
import { SignUpFormValues, LoginFormValues, LoginResponse } from "../types/auth.types";

export const registerUser = (values: SignUpFormValues): Promise<any> =>
  api.post("/auth/register", values);

export const loginUser = async (values: LoginFormValues) => {
  return api.post<LoginResponse>("/auth/login", values);
};

export const getUserProfile = async () => {
  return api.get("/users/me");
};