import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (Cookies.get("theme") === "dark") {
      setTheme("dark");
    }
    Cookies.set("theme", "dark");
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      Cookies.set("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      Cookies.set("theme", "light");
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
