"use client";
import React, { ComponentPropsWithRef } from "react";
import * as RadixDropdown from "@radix-ui/react-dropdown-menu";
import { twMerge } from "tailwind-merge";
import slideAndFadeANimation from "@/components/sharedStyles/slideAndFade.module.css";
import { Menu as MenuList } from "@/components/ui/dataDisplay/Menu";

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

function Menu({ children, className, ...restProps }: DropdowMenuProps) {
  return (
    <RadixDropdown.Portal>
      <RadixDropdown.Content
        asChild
        sideOffset={6}
        alignOffset={8}
        align="end"
        {...restProps}
      >
        <MenuList.Root
          className={twMerge(
            "origin-top-right min-w-[13rem]",
            slideAndFadeANimation.root,
            className
          )}
        >
          {children}
        </MenuList.Root>
      </RadixDropdown.Content>
    </RadixDropdown.Portal>
  );
}

function Item({ children, ...restProps }: DropdowItemProps) {
  return (
    <RadixDropdown.Item asChild {...restProps}>
      <MenuList.Item>{children}</MenuList.Item>
    </RadixDropdown.Item>
  );
}

Dropdown.Toogle = Toogle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;

export { Dropdown };
