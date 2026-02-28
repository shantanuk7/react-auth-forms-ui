import api from "../lib/axios";
import { SignUpFormValues } from "../types/auth.types";

export const registerUser = (values: SignUpFormValues): Promise<any> =>
  api.post("/auth/register", values);