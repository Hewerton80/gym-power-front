import Cookies from "js-cookie";

export const removeAllCookies = () => {
  const cookies = Cookies.get();
  for (const cookie in cookies) {
    if (cookies.hasOwnProperty(cookie)) {
      Cookies.remove(cookie);
    }
  }
};
