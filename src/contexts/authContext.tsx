"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { CONSTANTS } from "@/utils/constants";
import { removeAllCookies } from "@/lib/cookie";
// import { BASE_PATHS } from "@/utils/navItems";
import axios, { AxiosRequestConfig } from "axios";
import { getRandomRGBColor } from "@/utils/colors";
import { useAxios } from "@/hooks/utils/useAxios";
import { navItems } from "@/utils/navItems";
import { User } from "@prisma/client";
import { LoginCredentials } from "@/dtos/loginCredentials";

interface IResponseLogin {
  token: string;
  user: User;
}
interface IAuthContextProviderProps {
  children: ReactNode;
}

interface ILoginContext {
  loginError: any;
  isLoging: boolean;
  isLogged: boolean;
  loggedUser: User | null;
  handleSetUser: (User: User | null) => void;
  login: (loginCredentials: LoginCredentials) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ILoginContext);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const router = useRouter();
  const { apiBase } = useAxios();

  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const isLogged = useMemo(() => Boolean(loggedUser), [loggedUser]);

  const handleSetUser = useCallback((user: User | null) => {
    setLoggedUser(user);
    if (user) {
      Cookies.set(CONSTANTS.COOKIES_KEYS.USER, JSON.stringify(user));
    } else {
      Cookies.remove(CONSTANTS.COOKIES_KEYS.USER);
    }
  }, []);

  const onLoginSuccess = useCallback(
    async ({ user, token }: IResponseLogin) => {
      Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, token);
      console.log({ user, token });
      if (user?.isAdmin) {
        router.replace("/admin/users");
      } else if (user?.isTeacher) {
        router.replace("/teacher/students");
      } else {
        router.replace("/student/home");
      }
    },
    [router]
  );

  const {
    isPending: isLoging,
    error: loginError,
    mutate: login,
  } = useMutation({
    mutationFn: (loginCrentials: LoginCredentials) =>
      apiBase
        .post<IResponseLogin>("/auth/login", loginCrentials)
        .then((res) => res.data),
    onSuccess: onLoginSuccess,
  });

  const logout = useCallback(() => {
    handleSetUser(null);
    removeAllCookies();
    router.replace("/auth/login");
  }, [router, handleSetUser]);

  useEffect(() => {
    const loggedUserInCache = Cookies.get(CONSTANTS.COOKIES_KEYS.USER);
    if (loggedUserInCache) {
      handleSetUser(JSON.parse(loggedUserInCache) as User);
    }
  }, [handleSetUser]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        handleSetUser,
        isLogged,
        loggedUser,
        isLoging,
        loginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
