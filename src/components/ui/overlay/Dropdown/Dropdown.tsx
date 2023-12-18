"use client";
import React, { ComponentPropsWithRef } from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";
import slideAndFadeANimation from "@/components/sharedStyles/slideAndFade.module.css";

export interface DropdownProps
  extends ComponentPropsWithRef<typeof RadixDropdown.Root> {}
export interface DropdowToogleProps
  extends RadixDropdown.DropdownMenuTriggerProps {}

export interface DropdowMenuProps extends RadixDropdown.MenuContentProps {}
export interface DropdowItemProps extends RadixDropdown.MenuItemProps {}

function Dropdown({ children }: DropdownProps) {
  return <RadixDropdown.Root modal={false}>{children}</RadixDropdown.Root>;
}

function Toogle({ children, ...restProps }: DropdowToogleProps) {
  return (
    <RadixDropdown.Trigger {...restProps}>{children}</RadixDropdown.Trigger>
  );
}

function Menu({
  children,
  className,

  ...restProps
}: DropdowMenuProps) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        className={twMerge(
          "flex flex-col min-w-[13rem] py-4 z-50",
          "bg-white dark:bg-dark-body outline-none shadow-lg",
          "origin-top-right",
          slideAndFadeANimation.root,
          "rounded"
        )}
        sideOffset={6}
        alignOffset={8}
        align="end"
        role="menu"
        {...restProps}
      >
        {children}
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

function Item({ children, className, ...restProps }: DropdowItemProps) {
  return (
    <RadixDropdown.Item
      className={twMerge(
        "flex items-center px-6 py-2 text-sm sm:text-base cursor-pointer gap-3",
        "hover:text-primary hover:bg-light hover:dark:bg-dark-card/60",
        className
      )}
      role="menuitem"
      {...restProps}
    >
      {children}
    </RadixDropdown.Item>
  );
}

Dropdown.Toogle = Toogle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export { Dropdown };
