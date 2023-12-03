"use client";
import { PrivatePagesTamplate } from "@/components/templates/PrivatePagesTamplate";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/api/useAuth";
import { SplashScreen } from "@/components/ui/feedback/SplashScreen";
import { useGetMe } from "@/hooks/api/useUser";
import { useAlertModal } from "@/hooks/utils/useAlertModal";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { showAlert } = useAlertModal();
  const { handleSetContextLoggedUser, logout, isLogged } = useAuth();
  const { me, meError } = useGetMe();

  useEffect(() => {
    if (me) {
      console.log({ me });
      handleSetContextLoggedUser(me);
    }
  }, [me, handleSetContextLoggedUser]);

  useEffect(() => {
    if (meError) {
      const responseError =
        (meError as any)?.response?.data?.message || meError?.message;
      showAlert({
        title: "Erro ao recuperar informações",
        description: responseError,
        variant: "info",
        onClose: logout,
      });
    }
  }, [meError, logout, showAlert]);

  if (meError) {
    return <></>;
  }

  if (!isLogged) {
    return <SplashScreen />;
  }

  return <PrivatePagesTamplate>{children}</PrivatePagesTamplate>;
}
