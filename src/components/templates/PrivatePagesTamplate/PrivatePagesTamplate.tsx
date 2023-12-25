"use client";
import { ProfilePopover } from "@/components/ui/overlay/ProfilePopover";
import { useAuth } from "@/hooks/api/useAuth";
import { BASE_PATHS, INavItem, navItems } from "@/shared/navItems";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";
import { FaBarsStaggered } from "react-icons/fa6";
import { Slot } from "@radix-ui/react-slot";
import { Resizable } from "re-resizable";
import { IconButton } from "@/components/ui/buttons/IconButton";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "@/hooks/utils/useTheme";

const initialSideBarWidth = 214;
const minWidth = initialSideBarWidth - 100;

interface IPrivatePagesTamplateProps {
  children: ReactNode;
}

export function PrivatePagesTamplate({ children }: IPrivatePagesTamplateProps) {
  const currentPath = usePathname();
  const { theme, toggleTheme } = useTheme();
  const { loggedUser } = useAuth();

  const [showSideBar, setShowSideBar] = useState(false);
  const [showOnlyIcons, setShowOnlyIcons] = useState(false);
  const [sideBarWidth, setSideBarWidth] = useState(initialSideBarWidth);
  const [resizingSideBar, setResizingSideBar] = useState(false);

  useEffect(() => {
    if (sideBarWidth < minWidth) {
      setShowOnlyIcons(true);
      setSideBarWidth(initialSideBarWidth);
    } else if (sideBarWidth < initialSideBarWidth) {
      setSideBarWidth(initialSideBarWidth);
    }
  }, [sideBarWidth]);

  const avaliableNavItems = useMemo<INavItem[]>(() => {
    return navItems.filter((navItems) =>
      loggedUser?.roles?.some((role) => navItems.avaliablesRoles[role])
    );
  }, [loggedUser]);

  const toogleSideBarButtonElement = useMemo(() => {
    return (
      <span className="items-center justify-center cursor-pointer">
        <FaBarsStaggered className="text-primary dark:text-light text-3xl" />
      </span>
    );
  }, []);

  const sideBarElement = useMemo(() => {
    return (
      <aside
        className={twMerge(
          "bg-card dark:bg-dark-card/70 shadow-sm",
          "duration-100 ease-linear overflow-hidden"
        )}
      >
        <Resizable
          className={twMerge(
            "flex flex-col duration-100 ease-linear overflow-hidden",
            "border-card dark:border-dark-card/70"
          )}
          enable={{ right: !showOnlyIcons }}
          size={{ width: showOnlyIcons ? 80 : sideBarWidth, height: "100vh" }}
          onResizeStart={() => setResizingSideBar(true)}
          onResizeStop={(e, direction, ref, d) => {
            setResizingSideBar(false);
            console.log({ futureW: sideBarWidth + d.width });
            setSideBarWidth(() => sideBarWidth + d.width);
          }}
          handleWrapperClass={twMerge(
            "[&>div]:duration-100 [&>div]:ease-linear",
            "[&>div]:border-r-8 [&>div]:border-r-card [&>div]:dark:border-r-dark-card/70",
            "[&>div]:hover:border-r-primary",
            resizingSideBar && "[&>div]:border-r-primary"
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
              className={twMerge(
                "dark:brightness-[35.5]",
                "h-6",
                showOnlyIcons ? "hidden" : "block"
              )}
              src="/images/logo-2.png"
              alt="logo2"
              width={108}
              height={24}
              priority
            />
          </div>
          <nav className="flex w-full h-full">
            <ul
              className={twMerge(
                "flex flex-col w-full py-4 gap-y-2.5",
                showOnlyIcons ? "pt-4 pr-3.5 pl-3.5" : "pl-6 pr-0"
              )}
            >
              {avaliableNavItems.map(({ title, icon, path, basePath }, i) => {
                const isActive = currentPath.startsWith(`/${basePath}`);
                return (
                  <li
                    key={`${title}-${i}`}
                    className={twMerge(
                      "flex w-full",
                      basePath === BASE_PATHS.BASE_STUDENT_PATH &&
                        avaliableNavItems.length > 1 &&
                        "mt-auto"
                    )}
                  >
                    <Link
                      onClick={() => setShowSideBar(false)}
                      href={path}
                      className={twMerge(
                        "flex items-center w-full gap-4 font-medium relative whitespace-nowrap",
                        "hover:text-link duration-100 ease-linear rounded-[0.625rem]",
                        showOnlyIcons ? "p-3.5" : "p-5",
                        isActive &&
                          twMerge(
                            "text-link bg-link/10 after:absolute after:bg-link",
                            "dark:text-white dark:bg-dark-body after:dark:bg-white",
                            "after:right-0 after:h-full after:w-1.5 after:rounded-md",
                            showOnlyIcons ? "after:hidden" : "after:block"
                          )
                      )}
                    >
                      <span className="text-2xl">{icon}</span>
                      <span className={showOnlyIcons ? "hidden" : "block"}>
                        {title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </Resizable>
      </aside>
    );
  }, [
    avaliableNavItems,
    currentPath,
    sideBarWidth,
    showOnlyIcons,
    resizingSideBar,
  ]);

  return (
    <>
      {showSideBar && (
        <div
          className="block md:hidden fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setShowSideBar(false)}
        />
      )}
      <div
        className={twMerge(
          "flex h-screen overflow-y-hidden",
          // "bg-[url('/images/bg.svg')]",
          "dark:bg-[url('/images/bg-dark.svg')] bg-cover bg-no-repeat"
        )}
      >
        <Slot className="hidden md:flex">{sideBarElement}</Slot>
        <Slot
          className={twMerge(
            "flex md:hidden fixed top-0 left-0 -translate-x-full z-[9999]",
            showSideBar && "translate-x-0"
          )}
        >
          {sideBarElement}
        </Slot>
        <div className="flex flex-col flex-1 overflow-x-hidden">
          <header className="bg-card dark:bg-dark-card/70 h-20 shadow-sm">
            <div className="flex items-center h-full px-4 sm:px-8">
              <Slot
                className="flex md:hidden"
                onClick={() =>
                  setShowSideBar((currentShowSideBar) => !currentShowSideBar)
                }
              >
                {toogleSideBarButtonElement}
              </Slot>
              <Slot
                className="hidden md:flex"
                onClick={() =>
                  setShowOnlyIcons(
                    (currentShowOnlyIcons) => !currentShowOnlyIcons
                  )
                }
              >
                {toogleSideBarButtonElement}
              </Slot>
              <div className="flex gap-4 items-center ml-auto">
                <IconButton
                  variantStyle="primary-ghost"
                  icon={theme === "dark" ? <FaMoon /> : <FaSun />}
                  onClick={() => toggleTheme()}
                />
                <ProfilePopover />
              </div>
            </div>
          </header>
          <div className={twMerge("h-full p-4 sm:p-8 overflow-y-auto flex-1")}>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
