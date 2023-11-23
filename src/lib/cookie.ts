import { CONSTANTS } from "@/utils/constants";
import Cookies from "js-cookie";

export const getCurretToken = () => {
  return Cookies.get(CONSTANTS.COOKIES_KEYS.TOKEN);
};

export const removeAllCookies = () => {
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    if (cookies.hasOwnProperty(cookie)) {
      Cookies.remove(cookie);
    }
  }
};
