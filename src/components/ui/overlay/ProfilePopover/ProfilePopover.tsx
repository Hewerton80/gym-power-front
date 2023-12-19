"use client";
import * as Popover from "@radix-ui/react-popover";
import { Avatar } from "../../dataDisplay/Avatar";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { useAuth } from "@/hooks/api/useAuth";
import { FiLogOut, FiUser } from "react-icons/fi";
import assets from "../../../../../assets.json";
import slideAndFadeANimation from "@/components/sharedStyles/slideAndFade.module.css";
import { getContrastColor } from "@/shared/colors";
import colors from "tailwindcss/colors";
import { UserRole } from "@/types/User";
import { Menu } from "@/components/ui/dataDisplay/Menu";

export function ProfilePopover() {
  const { logout, loggedUser } = useAuth();
  if (!loggedUser) {
    return <></>;
  }

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <div className="flex gap-2 sm:gap-4 items-center cursor-pointer">
          <Avatar
            username={loggedUser?.name}
            bgColor={loggedUser?.avatarBgColor}
            color={
              loggedUser?.avatarBgColor
                ? getContrastColor(loggedUser?.avatarBgColor)
                : colors.black
            }
          />
          <div className="flex flex-col">
            <strong className="text-black dark:text-white text-sm sm:text-base">
              {loggedUser?.name}
            </strong>
            <p className="text-xs text-body-text dark:text-white">
              {loggedUser?.roles?.map((role) => UserRole[role]).join(", ")}
            </p>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content sideOffset={8} align="end" asChild>
          <Menu.Root
            className={twMerge(
              "origin-top-right w-52",
              slideAndFadeANimation.root
            )}
          >
            <Menu.Item asChild>
              <Link href="#">
                <FiUser color={assets.colors.primary} size={20} /> Perfil
              </Link>
            </Menu.Item>
            <Menu.Item onClick={logout}>
              <FiLogOut color={assets.colors.danger} size={20} /> Logout
            </Menu.Item>
          </Menu.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
