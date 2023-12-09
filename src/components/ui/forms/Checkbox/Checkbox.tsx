"use state";
import { twMerge } from "tailwind-merge";
import React, { ComponentProps } from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { FaCheck } from "react-icons/fa";

export interface CheckboxProps
  extends ComponentProps<typeof RadixCheckbox.Root> {
  label?: string;
  disabled?: boolean;
}

export function Checkbox({
  className,
  label,
  disabled,
  ...restProps
}: CheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <RadixCheckbox.Root
        disabled={disabled}
        className={twMerge(
          "flex items-center justify-center",
          "w-5 h-5 border border-primary rounded-md",
          "data-[state=checked]:bg-primary",
          !disabled && "cursor-pointer"
        )}
        {...restProps}
      >
        <RadixCheckbox.Indicator>
          <FaCheck className="text-white text-xs" />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      {label && (
        <label className="text-xs sm:text-sm" htmlFor={restProps?.id}>
          {label}
        </label>
      )}
    </div>
  );
}
