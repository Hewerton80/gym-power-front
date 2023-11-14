"use client";
import { ProfilePopover } from "@/components/ui/overlay/ProfilePopover";
import { useAuth } from "@/hooks/useAuth";
import { UserRolesNamesType } from "@/types/User";
import { INavItem, navItems } from "@/utils/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathName = usePathname();
  const { loggedUser } = useAuth();

  const avaliableNavItems = useMemo<INavItem[]>(() => {
    console.log({ roles: loggedUser?.roles });
    return navItems.filter(({ avaliablesRoles }) =>
      loggedUser?.roles?.some(
        (role) => avaliablesRoles[role as unknown as UserRolesNamesType]
      )
    );
  }, [loggedUser]);

  const showSideNar = useMemo(() => {
    return (
      loggedUser?.roles?.includes("ADMIN") ||
      loggedUser?.roles?.includes("TEACHER")
    );
  }, [loggedUser]);

  return (
    <div className="flex h-screen overflow-y-hidden">
      {showSideNar && (
        <aside
          className={twMerge(
            "flex flex-col w-[272px] bg-white h-100vh shadow-sm"
          )}
        >
          <div className="flex items-center px-6 gap-3 h-[7.5rem] w-full">
            <Image
              src="/images/logo-1.png"
              alt="logo"
              width={52}
              height={52}
              priority
            />
            <Image
              src="/images/logo-2.png"
              alt="logo2"
              width={108}
              height={24}
              className="h-6"
              priority
            />
          </div>
          <nav className="flex w-full">
            <ul className="flex flex-col w-full pt-4 pl-6 space-y-2.5">
              {avaliableNavItems.map(({ title, icon, path }, i) => {
                const isActive = path === pathName;
                return (
                  <li key={`${title}-${i}`} className="flex w-full">
                    <Link
                      href={path}
                      className={twMerge(
                        "flex items-center w-full p-5 gap-4 font-medium relative",
                        "hover:text-link duration-100 ease-linear rounded-[0.625rem]",
                        isActive &&
                          twMerge(
                            "text-link bg-link/10 after:absolute ",
                            "after:right-0 after:h-full after:w-1.5 after:rounded-md after:bg-link"
                          )
                      )}
                    >
                      <span className="text-2xl">{icon}</span>
                      {title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}

      <div className="flex flex-col flex-1">
        <header className="bg-white h-[7.5rem] shadow-sm">
          <div className="flex items-center h-full px-9">
            <div className="flex ml-auto">
              <ProfilePopover />
            </div>
          </div>
        </header>
        <div className="h-full px-8 py-8 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
