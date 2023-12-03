import { getCurretToken } from "@/lib/cookie";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useAlertModal } from "./useAlertModal";
import { useRouter } from "next/navigation";
import { CONSTANTS } from "@/shared/constants";
import { useAuth } from "../api/useAuth";

export const useAxios = () => {
  const { showAlert } = useAlertModal();
  const router = useRouter();
  const { logout } = useAuth();

  const apiBase = useMemo(
    () =>
      axios.create({
        baseURL: "/api",
        headers: {
          Authorization: `Bearer ${getCurretToken()}`,
        },
      }),
    []
  );

  useEffect(() => {
    apiBase.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        const reponseError = error.response;
        if (
          reponseError.status === 401 &&
          reponseError?.data?.message ===
            CONSTANTS.API_RESPONSE_MENSSAGES.INVALID_TOKEN
        ) {
          showAlert({
            title: "Sua sessão expirou",
            description: "Faça login novamente",
            variant: "info",
            onClose: logout,
          });
        }
        return Promise.reject(error);
      }
    );
    return () => {
      apiBase.interceptors.response.clear();
    };
  }, [apiBase, showAlert, logout]);

  return { apiBase };
};
