import { getCurretToken } from "@/lib/cookie";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useAlertModal } from "./useAlertModal";
import { useRouter } from "next/navigation";

export const useAxios = () => {
  const { showAlert } = useAlertModal();
  const router = useRouter();
  const apiBase = useMemo(
    () =>
      axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
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
        // console.log({
        //   errorData:
        //     reponseError.data?.messages?.includes("token is expired"),
        // });
        if (
          reponseError.status === 401 &&
          reponseError?.data?.messages?.includes("token is expired")
        ) {
          // window.location.href = "/login";
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
