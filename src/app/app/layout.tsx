"use client";
import { ProfilePopover } from "@/components/ui/overlay/ProfilePopover";
import { useAuth } from "@/hooks/api/useAuth";
import { UserRolesNamesType } from "@/types/User";
import { INavItem, navItems } from "@/utils/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";

export default function AppLayout({ children }: { children: ReactNode }) {
  const currentPath = usePathname();
  const { loggedUser } = useAuth();

  const avaliableNavItems = useMemo<INavItem[]>(() => {
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
            "flex flex-col w-20 lg:w-[17rem] bg-white h-100vh shadow-sm",
            "duration-100 ease-linear"
          )}
        >
          <div className="flex items-center px-6 gap-3 h-20 w-full">
            <Image
              src="/images/logo-1.png"
              alt="logo"
              width={52}
              height={52}
              priority
            />
            <Image
              className="h-6 hidden lg:block"
              src="/images/logo-2.png"
              alt="logo2"
              width={108}
              height={24}
              priority
            />
          </div>
          <nav className="flex w-full">
            <ul
              className={twMerge(
                "flex flex-col w-full pt-4 pr-3.5 pl-3.5 lg:pl-6 lg:pr-0 space-y-2.5"
              )}
            >
              {avaliableNavItems.map(({ title, icon, path }, i) => {
                const isActive = currentPath.includes(path);
                return (
                  <li key={`${title}-${i}`} className="flex w-full">
                    <Link
                      href={path}
                      className={twMerge(
                        "flex items-center w-full p-3.5 lg:p-5 gap-4 font-medium relative",
                        "hover:text-link duration-100 ease-linear rounded-[0.625rem]",
                        isActive &&
                          twMerge(
                            "text-link bg-link/10 after:absolute ",
                            "after:right-0 after:h-full after:w-1.5 after:rounded-md after:bg-link",
                            "after:hidden lg:after:block"
                          )
                      )}
                    >
                      <span className="text-2xl">{icon}</span>
                      <span className="hidden lg:block">{title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
      )}

      <div className="flex flex-col flex-1 overflow-x-hidden">
        <header className="bg-white h-20 shadow-sm">
          <div className="flex items-center h-full px-9">
            <div className="flex ml-auto">
              <ProfilePopover />
            </div>
          </div>
        </header>
        <div className="h-full p-4 sm:p-8 overflow-y-auto flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
