"use client";

import { axiosInstance } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface LoginPayload {
  usernameOrEmail: string;
  password: string;
}

const useLogin = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (payload: LoginPayload) => {
      const { data } = await axiosInstance.post("/auth/login", payload);
      return data;
    },
    onSuccess: async (data) => {
      toast.success("Login Success");
      await signIn("credentials", { ...data, redirect: false });
      router.replace("/");
    },
    onError: (error: AxiosError<any>) => {
        console.log("ini error", error.response?.data);
        toast.error(error.response?.data);
    },
  });
};

export default useLogin;
