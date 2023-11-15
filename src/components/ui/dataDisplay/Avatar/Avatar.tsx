"use client";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { useMemo, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import assets from "../../../../../assets.json";

export interface AvatarProps extends ComponentProps<typeof RadixAvatar.Root> {
  src?: string;
  alt?: string;
  username?: string;
  bgColor?: string;
}

export function Avatar({
  src,
  alt,
  username = "",
  bgColor = assets.colors.primary,
  className,
  ...restProps
}: AvatarProps) {
  const nameInities = useMemo(() => {
    if (!username) return "";
    const names = username.split(" ");

    if (names.length >= 2) {
      const firstLetterFirstName = names[0][0];
      const firstLetterSecondName = names[1][0];
      return `${firstLetterFirstName}${firstLetterSecondName}`;
    } else if (names.length === 1) {
      const firstLetterSingleName = names[0][0];
      return `${firstLetterSingleName}`;
    }
  }, [username]);

  return (
    <RadixAvatar.Root
      className={twMerge(
        "inline-flex items-center justify-center",
        "h-10 w-10 overflow-hidden rounded-full select-none align-middle",
        className
      )}
      {...restProps}
    >
      {src && (
        <RadixAvatar.Image
          className="h-full w-full object-cover rounded-[inherit]"
          src={src}
          alt={alt}
        />
      )}
      <RadixAvatar.Fallback
        className={twMerge(
          "flex items-center justify-center h-full w-full",
          "text-base uppercase text-white"
        )}
        style={{ backgroundColor: bgColor }}
      >
        {nameInities}
      </RadixAvatar.Fallback>
    </RadixAvatar.Root>
  );
}
