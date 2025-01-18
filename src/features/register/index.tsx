"use client";

import Link from "next/link";
import { useFormik } from "formik";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerSchema } from "./schema";
import useRegister from "@/hooks/api/auth/useRegister";

export default function RegisterPage() {
  const { mutateAsync: register, isPending } = useRegister();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      fullname: "",
      username: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      await register(values);
    },
  });

  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-[350px] bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-center text-2xl font-bold mb-4">Sign Up</h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign up to see photos and videos from your friends.
        </p>
        <Button className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4 hover:bg-blue-600">
          Log in with Facebook
        </Button>
        <div className="flex items-center justify-center mb-4">
          <div className="h-px bg-gray-300 flex-grow"></div>
          <span className="text-xs text-gray-500 mx-2">OR</span>
          <div className="h-px bg-gray-300 flex-grow"></div>
        </div>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-xs text-red-500">{formik.errors.email}</p>
          )}

          <Input
            id="fullname"
            name="fullname"
            type="text"
            placeholder="Full Name"
            value={formik.values.fullname}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <p className="text-xs text-red-500">{formik.errors.fullname}</p>
          )}

          <Input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-xs text-red-500">{formik.errors.username}</p>
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
            {isPending ? "Signing Up..." : "Sign Up"}
          </Button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          People who use our service may have uploaded your contact information
          to Instagram. <a href="#" className="text-blue-500">Learn More</a>
        </p>

        <p className="text-center text-sm mt-6">
          Have an account? <Link href="/login" className="text-blue-500">Log in</Link>
        </p>
      </div>
    </main>
  );
}
