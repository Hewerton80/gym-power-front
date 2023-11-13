"use client";
import { IUser, UserRole, UserRolesNamesType } from "@/types/User";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiBase } from "@/lib/apiBase";
import Cookies from "js-cookie";
import { CONSTANTS } from "@/utils/constants";
import { removeAllCookies } from "@/lib/removeAllCookies";
// import { BASE_PATHS } from "@/utils/navItems";
import { AxiosRequestConfig } from "axios";
interface IResponseLogin {
  token: string;
  roles: UserRolesNamesType[];
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
  const [isFetchingUser, setIsFetchingUser] = useState(false);
  const [userError, setUserError] = useState<any>(null);

  const handleSetUser = useCallback((user: IUser | null) => {
    setLoggedUser(user);
    if (user) {
      Cookies.set(CONSTANTS.COOKIES_KEYS.USER, JSON.stringify(user));
    } else {
      Cookies.remove(CONSTANTS.COOKIES_KEYS.USER);
    }
  }, []);

  // const onFetchStudantSuccess = useCallback(
  //   ({ token }: IResponseLogin) => {
  //     console.log({ token });
  //     // Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, access_token);
  //     // handleSetUser(user);
  //     // router.push("/app/hoWme");
  //   },
  //   [router]
  // );

  // const {
  //   isPending: isPendingStudant,
  //   error: fetchStudantError,
  //   refetch: fetchStudant,
  // } = useQuery({
  //   queryFn: () => apiBase.get<IUser>("/me/studants").then((res) => res.data),
  //   // onSuccess: onFetchStudantSuccess,
  //   queryKey: [""],
  // });

  const geStudant = useCallback(
    async (requestConfig: AxiosRequestConfig) => {
      try {
        const { data } = await apiBase.get<IUser>(
          "/me/students",
          requestConfig
        );
        handleSetUser(data);
        router.push("/app/student/home");
      } catch (error) {
        setUserError(error);
      }
    },
    [handleSetUser, router]
  );

  const onLoginSuccess = useCallback(
    ({ roles, token }: IResponseLogin) => {
      setIsFetchingUser(true);
      console.log({ roles, token });
      Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, token);
      setUserError(null);
      // const requestConfig = { headers: { Authorization: `Bearer ${token}` } };
      const requestConfig = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (roles.includes("STUDENT")) {
        geStudant(requestConfig);
      }
      setIsFetchingUser(false);
    },
    [geStudant]
  );

  // const login = useCallback(() => {
  //   handleSetUser({ name: "Hewerton Adão" });
  //   router.push(`/app/student/home`);
  // }, [handleSetUser, router]);

  const {
    isPending: isPendingLogin,
    error: loginError,
    mutate: login,
  } = useMutation({
    mutationFn: (loginCrentials: ILoginCrentials) =>
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
  const isLoging = useMemo(
    () => isPendingLogin || isFetchingUser,
    [isPendingLogin, isFetchingUser]
  );

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        // handleSetUser,
        loggedUser,
        isLoging,
        loginError: loginError || userError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
