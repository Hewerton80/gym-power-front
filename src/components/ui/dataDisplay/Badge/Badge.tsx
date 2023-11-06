import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

// type BadgeVariatnsType = {
//   [key in keyof typeof CoupomStatus]: {
//     content: string;
//     cicle: string;
//   };
// };

const variants /*: Omit<BadgeVariatnsType, "Todos">*/ = {
  primary: "",
  success: "",
  danger: "",
  warning: "",
};
interface BadgeProps extends ComponentPropsWithRef<"span"> {
  variant: keyof typeof variants;
}
export const Badge = ({
  children,
  className,
  variant,
  ...restProps
}: BadgeProps) => {
  return (
    <span
      className={twMerge(
        "flex items-center justify-center py-1 px-2 w-fit",
        "text-xs font-bold rounded-2xl text-white",
        variants[variant],
        className
      )}
      {...restProps}
    >
      {children}
    </span>
  );
};
