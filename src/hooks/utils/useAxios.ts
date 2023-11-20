import { getCurretToken } from "@/lib/cookie";
import axios from "axios";
import { useMemo } from "react";

export const useAxios = () => {
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
  return { apiBase };
};
