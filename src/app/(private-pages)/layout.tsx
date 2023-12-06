"use client";
import { PrivatePagesTamplate } from "@/components/templates/PrivatePagesTamplate";
import { ReactNode, useEffect } from "react";
import { useAuth } from "@/hooks/api/useAuth";
import { SplashScreen } from "@/components/ui/feedback/SplashScreen";
import { useGetMe } from "@/hooks/api/useUser";
import { useAlertModal } from "@/hooks/utils/useAlertModal";
import { getErrorMessage } from "@/shared/getErrorMenssage";

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
      showAlert({
        title: "Erro ao recuperar informações",
        description: getErrorMessage(meError),
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
