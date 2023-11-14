"use client";
import * as Popover from "@radix-ui/react-popover";
import { Avatar } from "../../dataDisplay/Avatar";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth";
import { FiLogOut, FiUser } from "react-icons/fi";
import assets from "../../../../../assets.json";
import slideAndFadeANimation from "@/components/helpers/slideAndFade.module.css";
import { UserRole } from "@/types/User";

const menuItemClasseName =
  "flex items-center px-6 py-2 text-sm hover:text-primary hover:bg-light gap-3 cursor-pointer";

export function ProfilePopover() {
  const { logout, loggedUser } = useAuth();

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="flex gap-4 items-center cursor-pointer">
          <Avatar username={loggedUser?.name} />
          <div className="flex flex-col">
            <strong className="text-black text-base">{loggedUser?.name}</strong>
            <p className="text-xs">
              {loggedUser?.roles?.map((role) => UserRole[role])?.join(", ")}
            </p>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={8} align="end" asChild>
          <div
            className={twMerge(
              "flex flex-col w-52 py-4 z-50",
              "bg-white outline-none shadow-lg",
              "animate- origin-top-right",
              slideAndFadeANimation.root,
              "rounded"
            )}
          >
            <Link href="#" className={menuItemClasseName}>
              <FiUser color={assets.colors.primary} size={20} /> Perfil
            </Link>
            <div className={menuItemClasseName} onClick={logout}>
              <FiLogOut color={assets.colors.danger} size={20} /> Logout
            </div>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
