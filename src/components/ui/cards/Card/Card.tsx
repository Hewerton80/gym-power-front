import { twMerge } from "tailwind-merge";
import React, { ComponentPropsWithRef } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface CardProps extends ComponentPropsWithRef<"div"> {
  asChild?: boolean;
}

export interface CardHeaderProps extends ComponentPropsWithRef<"div"> {}
export interface CardActionsProps extends ComponentPropsWithRef<"div"> {}
export interface CardBodyProps extends ComponentPropsWithRef<"div"> {}
export interface CardFooterProps extends ComponentPropsWithRef<"div"> {
  orientation?: "start" | "end" | "center";
}

function Card({ children, className, asChild, ...restProps }: CardProps) {
  const Comp = asChild ? Slot : "div";
  return (
    <Comp
      className={twMerge(
        "flex flex-col w-full rounded-[1.25rem] shadow-sm overflow-hidden bg-white",
        className
      )}
      {...restProps}
    >
      {children}
    </Comp>
  );
}

function Header({ children, className, ...restProps }: CardHeaderProps) {
  return (
    <div
      className={twMerge(
        "flex items-center justify-between px-4 sm:px-[1.875rem] pt-5 sm:pt-6",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

function Actions({ children, className, ...restProps }: CardActionsProps) {
  return (
    <div className={twMerge("flex items-center", className)} {...restProps}>
      {children}
    </div>
  );
}

function Title({ children, className, ...rest }: CardProps) {
  return (
    <div className={twMerge("flex items-center", className)} {...rest}>
      <h4 className="text-base sm:text-xl text-black font-medium">
        {children}
      </h4>
    </div>
  );
}

function Body({ children, className, ...rest }: CardBodyProps) {
  return (
    <div
      className={twMerge("flex flex-col p-4 sm:p-[1.875rem]", className)}
      {...rest}
    >
      {children}
    </div>
  );
}

function Footer({
  children,
  className,
  orientation = "start",
  ...rest
}: CardFooterProps) {
  return (
    <div
      className={twMerge(
        "flex items-center mt-auto px-4 sm:px-[1.875rem] pb-5",
        orientation === "start" && "justify-start",
        orientation === "center" && "justify-center",
        orientation === "end" && "justify-end",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Title = Title;
Card.Actions = Actions;
Card.Body = Body;
Card.Footer = Footer;

export { Card };
