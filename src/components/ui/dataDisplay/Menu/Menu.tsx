import { Slot } from "@radix-ui/react-slot";
import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface MenuProps extends ComponentPropsWithRef<"div"> {
  asChild?: boolean;
}
interface MenuItemProps extends ComponentPropsWithRef<"div"> {
  asChild?: boolean;
}

export const Root = forwardRef(
  ({ children, className, asChild, ...restProps }: MenuProps, ref?: any) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        role="menu"
        className={twMerge(
          "flex flex-col py-4 z-50 bg-white dark:bg-dark-body",
          "outline-none shadow-lg rounded",
          className
        )}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }
);

export const Item = forwardRef(
  (
    { children, className, asChild, ...restProps }: MenuItemProps,
    ref?: any
  ) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref}
        role="menuitem"
        className={twMerge(
          "flex items-center px-6 py-2 text-sm sm:text-base cursor-pointer gap-3",
          "hover:text-primary hover:bg-light hover:dark:bg-dark-card/60",
          className
        )}
        {...restProps}
      >
        {children}
      </Comp>
    );
  }
);

const Menu = { Root, Item };

export { Menu };
