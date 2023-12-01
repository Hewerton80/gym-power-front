import { getCurretToken } from "@/lib/cookie";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useAlertModal } from "./useAlertModal";
import { useRouter } from "next/navigation";
import { apiBase } from "@/lib/axios";

export const useAxios = () => {
  const { showAlert } = useAlertModal();
  const router = useRouter();

  useEffect(() => {
    apiBase.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const reponseError = error.response;
        if (
          reponseError.status === 401 &&
          reponseError?.data?.messages?.includes("token is expired")
        ) {
          showAlert({
            title: "Sua sessão expirou",
            description: "Faça login novamente",
            variant: "info",
            onClose: () => router.replace("/auth/login"),
          });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      apiBase.interceptors.response.clear();
    };
  }, [showAlert, apiBase, router]);

  return { apiBase };
};
