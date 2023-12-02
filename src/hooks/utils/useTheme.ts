import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { CONSTANTS } from "@/shared/constants";
export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (Cookies.get(CONSTANTS.COOKIES_KEYS.THEME) === "dark") {
      setTheme("dark");
    }
    Cookies.set(CONSTANTS.COOKIES_KEYS.THEME, "dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      Cookies.set(CONSTANTS.COOKIES_KEYS.THEME, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      Cookies.set(CONSTANTS.COOKIES_KEYS.THEME, "light");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
