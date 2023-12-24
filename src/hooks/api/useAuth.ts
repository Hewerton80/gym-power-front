"use client";
import { AuthContext } from "@/contexts/authContext";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
  useContext,
} from "react";
import { z } from "zod";
import { ToZodObjectSchema } from "@/lib/zodHelpers";
import { LoginCredentials } from "@/dtos/loginCredentials";
import { useRouter } from "next/navigation";
import { useAxios } from "@/hooks/utils/useAxios";
import { useAuthStore } from "@/stores/useAuthStore";
import { UserWithComputedFields } from "@/types/User";
import { useMutation } from "@tanstack/react-query";
import { CONSTANTS } from "@/shared/constants";
import Cookies from "js-cookie";
import { removeAllCookies } from "@/lib/cookie";

interface IResponseLogin {
  token: string;
  user: UserWithComputedFields;
}

export const loginFormSchema = z.object<ToZodObjectSchema<LoginCredentials>>({
  email: z.string().min(1, { message: "Um email deve ser informado" }),
  password: z.string().min(1, { message: "Uma senha deve ser informada" }),
});

export function useAuth() {
  const authContext = useContext(AuthContext);
  // const router = useRouter();
  // const { apiBase } = useAxios();
  // const { loggedUser, setContextLoggedUser } = useAuthStore();

  // const isLogged = useMemo(() => Boolean(loggedUser), [loggedUser]);

  // const onLoginSuccess = useCallback(
  //   async ({ user, token }: IResponseLogin) => {
  //     Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, token);
  //     if (user?.roles?.includes("ADMIN")) {
  //       router.replace("/admin/users");
  //     } else if (user?.roles?.includes("TEACHER")) {
  //       router.replace("/teacher/students");
  //     } else {
  //       router.replace("/student/home");
  //     }
  //   },
  //   [router]
  // );

  // const {
  //   isPending: isLoging,
  //   error: error,
  //   mutate: login,
  // } = useMutation({
  //   mutationFn: (loginCrentials: LoginCredentials) =>
  //     apiBase
  //       .post<IResponseLogin>("/auth/login", loginCrentials)
  //       .then((res) => res.data),
  //   onSuccess: onLoginSuccess,
  // });

  // const loginError = useMemo<any>(() => error, [error]);

  // const logout = useCallback(() => {
  //   setContextLoggedUser(null);
  //   removeAllCookies();
  //   router.replace("/auth/login");
  // }, [router, setContextLoggedUser]);

  // return {
  //   loggedUser,
  //   isLogged,
  //   isLoging,
  //   loginError,
  //   handleSetContextLoggedUser: setContextLoggedUser,
  //   login,
  //   logout,
  // };
  return authContext;
}
