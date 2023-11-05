import { ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/buttons/Button";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";

interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: ReactNode;
}

export function IconButton({ className, icon, ...restProps }: IconButtonProps) {
  return (
    <Button
      className={twMerge(
        "w-[2.375rem] h-[2.375rem] px-0 py-0 p-0.5 text-2xl",
        className
      )}
      {...restProps}
    >
      {icon}
    </Button>
  );
}
