import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { CONSTANTS } from "@/shared/constants";
import { removeAllCookies } from "@/lib/cookie";
import { useAxios } from "@/hooks/utils/useAxios";
import { User } from "@prisma/client";
import { LoginCredentials } from "@/dtos/loginCredentials";
import { UserWithComputedFields } from "@/types/User";

interface IResponseLogin {
  token: string;
  user: UserWithComputedFields;
}
interface IAuthContextProviderProps {
  children: ReactNode;
}

interface ILoginContext {
  loginError: any;
  isLoging: boolean;
  isLogged: boolean;
  loggedUser: UserWithComputedFields | null;
  handleSetContextLoggedUser: (User: UserWithComputedFields | null) => void;
  login: (loginCredentials: LoginCredentials) => void;
  logout: () => void;
}

export const AuthContext = createContext({} as ILoginContext);

export function AuthContextProvider({ children }: IAuthContextProviderProps) {
  const router = useRouter();
  const { apiBase } = useAxios();

  const [loggedUser, setLoggedUser] = useState<UserWithComputedFields | null>(
    null
  );

  const isLogged = useMemo(() => Boolean(loggedUser), [loggedUser]);

  const handleSetContextLoggedUser = useCallback(
    (user: UserWithComputedFields | null) => {
      setLoggedUser(user);
    },
    []
  );

  const onLoginSuccess = useCallback(
    async ({ user, token }: IResponseLogin) => {
      Cookies.set(CONSTANTS.COOKIES_KEYS.TOKEN, token);
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
    handleSetContextLoggedUser(null);
    removeAllCookies();
    router.replace("/auth/login");
  }, [router, handleSetContextLoggedUser]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        handleSetContextLoggedUser,
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
