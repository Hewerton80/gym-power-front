import { ComponentPropsWithRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { FormLabel } from "@/components/ui/forms/FormLabel";
import { FormHelperText } from "@/components/ui/forms/FormHelperText";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "className"> {
  formControlClassName?: string;
  inputClassName?: string;
  label?: string;
  error?: string;
}

export const Input = forwardRef(
  (
    {
      formControlClassName,
      inputClassName,
      label,
      error,
      ...restProps
    }: InputProps,
    ref?: any
  ) => {
    return (
      <div className={twMerge("flex flex-col w-full", formControlClassName)}>
        {label && <FormLabel htmlFor={restProps?.id}>{label}</FormLabel>}
        <input
          ref={ref}
          className={twMerge(
            "px-3 py-1.5 h-11 2xl:h-14 w-full rounded-md bg-white text-body-text text-sm shadow-sm",
            "outline-none border border-border focus:border-primary",
            "duration-150 ease-linear disabled:bg-border",
            error && "border-danger/60 focus:border-danger",
            inputClassName
          )}
          {...restProps}
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </div>
    );
  }
);
