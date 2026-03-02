export type SignUpFormValues = {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginResponse = {
  data: {
    token: string;
  };
};

export interface User {
  id: string;
  email: string;
  role: "CUSTOMER" | "SUPPORT_AGENT";
}