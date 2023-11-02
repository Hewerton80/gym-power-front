import { Avatar } from "@/components/ui/dataDisplay/Avatar";
import { ProfilePopover } from "@/components/ui/overlay/ProfilePopover";
import { navItems } from "@/utils/navItems";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen overflow-y-hidden">
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
            {navItems.map(({ title, icon }, i) => {
              const isActive = i === 1;
              return (
                <li key={`${title}-${i}`} className="flex w-full">
                  <Link
                    href="#"
                    className={twMerge(
                      "flex items-center w-full p-5 gap-4 font-medium text-body-text relative",
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
      <div className="flex flex-col flex-1">
        <header className="bg-white h-[7.5rem] shadow-sm">
          <div className="flex items-center h-full px-9">
            <div className="flex ml-auto">
              <ProfilePopover />
            </div>
          </div>
        </header>
        <div className="h-full px-8 py-8">{children}</div>
      </div>
    </div>
  );
}
