import { CONSTANTS } from "@/utils/constants";
import axios from "axios";
import Cookies from "js-cookie";

export const apiBase = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000",
  headers: {
    Authorization: `Bearer ${Cookies.get(CONSTANTS.COOKIES_KEYS.TOKEN)}`,
  },
});
