import { ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends Omit<ComponentPropsWithRef<"input">, "className"> {
  formControlClassName?: string;
  inputClassName?: string;
  label?: string;
  error?: string;
}

export function Input({
  formControlClassName,
  inputClassName,
  label,
  error,
  ...resProps
}: InputProps) {
  return (
    <div className={twMerge("flex flex-col w-full", formControlClassName)}>
      {label && (
        <label className="mb-1 font-bold text-body-text" htmlFor={resProps?.id}>
          {label}
        </label>
      )}
      <input
        className={twMerge(
          "px-3 py-1.5 h-11 2xl:h-14 w-full rounded-md bg-white text-dark text-sm shadow-sm",
          "outline-none border border-border focus:border-primary",
          "duration-150 ease-linear",
          error && "border-danger/60 focus:border-danger",
          inputClassName
        )}
        {...resProps}
      />
      {error && (
        <span className="text-danger text-xs whitespace-nowrap mt-1">
          {error}
        </span>
      )}
    </div>
  );
}
