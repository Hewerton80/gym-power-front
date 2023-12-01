import { PrivatePagesTamplate } from "@/components/templates/PrivatePagesTamplate";
import { ReactNode } from "react";
import { cookies } from "next/headers";
import { CONSTANTS } from "@/utils/constants";
import { redirect } from "next/navigation";
import { getRequestHeaders } from "@/utils/getRequestHeader";

export default async function AppLayout({ children }: { children: ReactNode }) {
  const cookieStore = cookies();
  const response = await fetch(`${process.env.BASE_URL}/api/me/user`, {
    headers: getRequestHeaders(
      String(cookieStore.get(CONSTANTS.COOKIES_KEYS.TOKEN)?.value)
    ),
  });
  const loggedUser = await response.json();

  if (!loggedUser) {
    redirect("/auth/login");
  }
  return (
    <PrivatePagesTamplate loggedUser={loggedUser}>
      {children}
    </PrivatePagesTamplate>
  );
}
