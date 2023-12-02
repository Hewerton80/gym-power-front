import { PrivatePagesTamplate } from "@/components/templates/PrivatePagesTamplate";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { CONSTANTS } from "@/shared/constants";
import { redirect } from "next/navigation";
import { removeAllCookies } from "@/lib/cookie";

export default function AppLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const cachedUser = cookieStore.get(CONSTANTS.COOKIES_KEYS.USER)?.value;
  const chachedToken = cookieStore.get(CONSTANTS.COOKIES_KEYS.TOKEN)?.value;
  if (!cachedUser || !chachedToken) {
    removeAllCookies();
    redirect("/auth/login");
  }
  return <PrivatePagesTamplate>{children}</PrivatePagesTamplate>;
}
