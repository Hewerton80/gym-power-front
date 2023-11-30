"use client";
import { UserRolesNamesType } from "@/types/User";
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
import { getRandomRGBColor } from "@/utils/getRandomColor";
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
  loggedUser: User | null;
  //   handleSetUser: (User: User | null) => void;
  login: (loginCredentials: LoginCredentials) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ILoginContext);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const router = useRouter();
  const { apiBase } = useAxios();

  const [loggedUser, setLoggedUser] = useState<User | null>(null);

  const handleSetUser = useCallback((user: User | null) => {
    setLoggedUser(user);
    if (user) {
      Cookies.set(CONSTANTS.COOKIES_KEYS.USER, JSON.stringify(user));
    } else {
      Cookies.remove(CONSTANTS.COOKIES_KEYS.USER);
    }
  }, []);

  // const geStudant = useCallback(
  //   async ({
  //     roles,
  //     requestConfig,
  //   }: {
  //     roles: UserRolesNamesType[];
  //     requestConfig: AxiosRequestConfig;
  //   }) => {
  //     try {
  //       const { data } = await apiBase.get<User>(
  //         "/me/students",
  //         requestConfig
  //       );
  //       handleSetUser({ ...data, roles, avatarBgColor: getRandomRGBColor() });
  //       router.replace("/app/student/home");
  //     } catch (error) {
  //       removeAllCookies();
  //       setUserError(error);
  //     }
  //   },
  //   [handleSetUser, router, apiBase]
  // );

  // const geAdminOrTeacher = useCallback(
  //   async ({
  //     roles,
  //     requestConfig,
  //   }: {
  //     roles: UserRolesNamesType[];
  //     requestConfig: AxiosRequestConfig;
  //   }) => {
  //     try {
  //       const { data } = await apiBase.get<User>("/me/users", requestConfig);
  //       handleSetUser({ ...data, roles, avatarBgColor: getRandomRGBColor() });
  //       const foundedNavItem = navItems.find(
  //         (navItem) => navItem.avaliablesRoles[roles[0]]
  //       );
  //       router.replace(foundedNavItem?.path as string);
  //     } catch (error) {
  //       removeAllCookies();
  //       setUserError(error);
  //     }
  //   },
  //   [handleSetUser, router, apiBase]
  // );

  const onLoginSuccess = useCallback(
    // async ({ roles, token }: IResponseLogin) => {
    async ({ user, token }: IResponseLogin) => {
      Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, token);
      console.log({ user, token });
      handleSetUser(user);
      if (user?.isAdmin) {
        router.replace("/app/admin/users");
      } else if (user?.isTeacher) {
        router.replace("/app/teacher/students");
      } else {
        router.replace("/app/student/home");
      }
      // const requestConfig = {
      //   headers: { Authorization: `Bearer ${token}` },
      // };
      // if (roles.includes("ADMIN") || roles.includes("TEACHER")) {
      //   await geAdminOrTeacher({ roles, requestConfig });
      // } else if (roles.includes("STUDENT")) {
      //   await geStudant({ roles, requestConfig });
      // }
    },
    [router, handleSetUser]
  );

  const {
    isPending: isLoging,
    error: loginError,
    mutate: login,
  } = useMutation({
    mutationFn: (loginCrentials: LoginCredentials) =>
      // apiBase
      //   .post<IResponseLogin>("/auth/login", loginCrentials)
      //   .then((res) => res.data),
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

  //   useEffect(() => {
  //     const isInSomeLoggedPage =
  //       selectedLayoutSegment !== BASE_PATHS.BASE_AUTH_PATH;
  //     const loggedUserInCache = Cookies.get(CONSTANTS.COOKIES_KEYS.USER);
  //     const tokenInCache = Cookies.get(CONSTANTS.COOKIES_KEYS.TOKEN);
  //     const hasNotSomeImportantIndo = !loggedUserInCache || !tokenInCache;
  //     if (isInSomeLoggedPage && hasNotSomeImportantIndo) {
  //       logout();
  //     }
  //   }, [selectedLayoutSegment, logout]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        // handleSetUser,
        loggedUser,
        isLoging,
        loginError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
