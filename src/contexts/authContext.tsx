"use client";
import { IUser } from "@/types/User";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import { apiBase } from "@/lib/apiBase";
import Cookies from "js-cookie";
import { CONSTANTS } from "@/utils/constants";
import { removeAllCookies } from "@/lib/removeAllCookies";
// import { BASE_PATHS } from "@/utils/navItems";

interface IResponseLogin {
  access_token: string;
  user: IUser;
}
interface IAuthContextProviderProps {
  children: ReactNode;
}

export interface ILoginCrentials extends Pick<IUser, "email"> {
  password: string;
}

interface ILoginContext {
  loginError: any;
  isLoging: boolean;
  loggedUser: IUser | null;
  //   handleSetUser: (IUser: IUser | null) => void;
  login: (loginCredentials: ILoginCrentials) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ILoginContext);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const router = useRouter();
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const [loggedUser, setLoggedUser] = useState<IUser | null>(null);

  const handleSetUser = useCallback((user: IUser | null) => {
    setLoggedUser(user);
    if (user) {
      Cookies.set(CONSTANTS.COOKIES_KEYS.USER, JSON.stringify(user));
    } else {
      Cookies.remove(CONSTANTS.COOKIES_KEYS.USER);
    }
  }, []);

  const onLoginSuccess = useCallback(
    ({ access_token, user }: IResponseLogin) => {
      console.log({ user });
      Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, access_token);
      handleSetUser(user);
      router.push("/admin/home");
    },
    [router, handleSetUser]
  );

  const login = useCallback(() => {
    handleSetUser({ name: "Hewerton Adão" });
    router.push(`/app/student/home`);
  }, [handleSetUser, router]);

  const {
    isPending: isLoging,
    error: loginError,
    // mutate: login,
  } = useMutation({
    mutationFn: (loginCrentials: ILoginCrentials) =>
      apiBase
        .post<IResponseLogin>("/auth/panel/login", loginCrentials)
        .then((res) => res.data),
    onSuccess: onLoginSuccess,
  });

  const logout = useCallback(() => {
    handleSetUser(null);
    removeAllCookies();
    router.replace("/auth/login");
  }, [router, handleSetUser]);

  //   useEffect(() => {
  //     const loggedUserInCache = Cookies.get(CONSTANTS.COOKIES_KEYS.USER);
  //     if (loggedUserInCache) {
  //       handleSetUser(JSON.parse(loggedUserInCache) as IUser);
  //     }
  //   }, [handleSetUser]);

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
