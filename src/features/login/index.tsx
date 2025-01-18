"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useLogin from "@/hooks/api/auth/useLogin";
import { loginSchema } from "./schema";

export default function LoginPage() {
  const { mutateAsync: login, isPending } = useLogin();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      usernameOrEmail: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      await login(values);
    },
  });

  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-[350px] bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-center text-2xl font-bold mb-4">Instagram</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Input
            id="usernameOrEmail"
            name="usernameOrEmail"
            type="text"
            placeholder="Username or Email"
            value={formik.values.usernameOrEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.usernameOrEmail && formik.errors.usernameOrEmail && (
            <p className="text-xs text-red-500">{formik.errors.usernameOrEmail}</p>
          )}

          <div className="relative">
            <Input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xs"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          {formik.touched.password && formik.errors.password && (
            <p className="text-xs text-red-500">{formik.errors.password}</p>
          )}

          <Button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
            disabled={isPending}
          >
            {isPending ? "Logging In..." : "Log In"}
          </Button>
        </form>

        <div className="flex items-center justify-center my-4">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-xs text-gray-500 mx-2">OR</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>

        <Button className="w-full bg-blue-500 text-white py-2 rounded mb-4 hover:bg-blue-600">
          Log in with Facebook
        </Button>

        <p className="text-center text-sm mb-4">
          <Link href="#" className="text-blue-500">
            Forgot password?
          </Link>
        </p>

        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
