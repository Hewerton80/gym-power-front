import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

interface FormLabelProps extends ComponentPropsWithRef<"label"> {}

export function FormLabel({
  children,
  className,
  ...restProps
}: FormLabelProps) {
  return (
    <label
      className={twMerge("mb-1 text-sm sm:text-base font-bold", className)}
      {...restProps}
    >
      {children}
    </label>
  );
}
