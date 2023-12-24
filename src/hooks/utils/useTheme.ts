import { useCallback, useEffect, useState } from "react";
import { CONSTANTS } from "@/shared/constants";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (localStorage.getItem(CONSTANTS.COOKIES_KEYS.THEME) === "dark") {
      setTheme("dark");
    }
    localStorage.setItem(CONSTANTS.COOKIES_KEYS.THEME, "dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem(CONSTANTS.COOKIES_KEYS.THEME, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(CONSTANTS.COOKIES_KEYS.THEME, "light");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
