import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  usernameOrEmail: Yup.string()
    .required("Username or email is required")
    .test(
      "is-valid-username-or-email",
      "Invalid username or email format",
      (value) => {
        if (value && value.includes("@")) {
          return Yup.string().email("Invalid email format").isValidSync(value);
        }
        return Yup.string()
          .min(3, "Username must be at least 3 characters")
          .isValidSync(value);
      }
    ),

  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});
