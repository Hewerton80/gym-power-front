import { CONSTANTS } from "@/utils/constants";
import Cookies from "js-cookie";

export const getCurretToken = () => {
  const token = Cookies.get(CONSTANTS.COOKIES_KEYS.TOKEN);
  console.log({ token });
  return token;
};

export const removeAllCookies = () => {
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    if (cookies.hasOwnProperty(cookie)) {
      Cookies.remove(cookie);
    }
  }
};
