import {
  ComponentPropsWithRef,
  useMemo,
  createElement,
  ReactNode,
  Children,
  Fragment,
} from "react";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import spinnerStyle from "@/components/helpers/spinner.module.css";

interface ButtonStyle {
  bg: string;
  border: string;
  text: string;
  focusRing?: string;
  activeRing?: string;
  hoverBg?: string;
  hoverText?: string;
  spinnerBorderT: string;
  darkStyles?: string[];
}

const generateButtonStyles = (baseStyles: ButtonStyle) => {
  const {
    bg,
    border,
    text,
    focusRing,
    activeRing,
    hoverBg,
    spinnerBorderT,
    hoverText,
    darkStyles,
  } = baseStyles;
  const commonClasses = [
    bg,
    border,
    text,
    activeRing,
    focusRing,
    hoverBg,
    spinnerBorderT,
    hoverText,
    darkStyles,
  ];

  if (darkStyles) {
    commonClasses.push(...darkStyles);
  }

  return twMerge(...commonClasses);
};

export const buttonVariants = {
  style: {
    primary: generateButtonStyles({
      bg: "bg-primary",
      border: "border-primary",
      text: "text-white",
      focusRing: "focus:ring-primary/40",
      activeRing: "active:ring-primary/40",
      spinnerBorderT: "[&>.spinner]:border-t-white",
    }),
    success: generateButtonStyles({
      bg: "bg-success",
      border: "border-success",
      text: "text-white",
      focusRing: "focus:ring-success/40",
      activeRing: "active:ring-success/40",
      spinnerBorderT: "[&>.spinner]:border-t-white",
    }),
    info: generateButtonStyles({
      bg: "bg-info",
      border: "border-info",
      text: "text-white",
      focusRing: "focus:ring-info/40",
      activeRing: "active:ring-info/40",
      spinnerBorderT: "[&>.spinner]:border-t-white",
    }),

    warning: generateButtonStyles({
      bg: "bg-warning",
      border: "border-warning",
      text: "text-white",
      focusRing: "focus:ring-warning/40",
      activeRing: "active:ring-warning/40",
      spinnerBorderT: "[&>.spinner]:border-t-white",
    }),
    danger: generateButtonStyles({
      bg: "bg-danger",
      border: "border-danger",
      text: "text-white",
      focusRing: "focus:ring-danger/40",
      activeRing: "active:ring-danger/40",
      spinnerBorderT: "[&>.spinner]:border-t-white",
    }),
  },
};

export type ButtonVariantStyle = keyof typeof buttonVariants.style;

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  variantStyle?: ButtonVariantStyle;
  isLoading?: boolean;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  fullWidth?: boolean;
  asChild?: boolean;
}

export function Button({
  children,
  variantStyle = "primary",
  type = "button",
  isLoading,
  disabled,
  className,
  leftIcon,
  rightIcon,
  formTarget,
  fullWidth,
  asChild,
  ...restProps
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  const handledChildren = useMemo(() => {
    let handledChildrenTmp: ReactNode = Children.toArray(children || <></>)[0];

    const hasIcon = leftIcon || rightIcon;
    if (hasIcon) {
      const childrenIsHtmlTag = typeof handledChildrenTmp === "object";
      const ChildrenComp = Object(handledChildrenTmp);
      handledChildrenTmp = createElement(
        childrenIsHtmlTag ? ChildrenComp?.type : Fragment,
        ChildrenComp?.props || {},
        <>
          {leftIcon && <span className="mr-3">{leftIcon}</span>}
          {ChildrenComp?.props?.children || children}
          {rightIcon && <span className="ml-3">{rightIcon}</span>}
        </>
      );
    }
    return handledChildrenTmp;
  }, [children, leftIcon, rightIcon]);

  return (
    <Comp
      className={twMerge(
        "inline-flex items-center justify-center leading-none ease-linear duration-200 relative",
        "h-fit leading-none px-4 py-2.5 cursor-pointer border-2 rounded-lg outline-none font-medium",
        "text-sm",
        "disabled:pointer-events-none disabled:opacity-50",
        "focus:ring-4 active:ring-4",
        fullWidth ? "w-full" : "w-fit",
        buttonVariants.style[variantStyle],
        isLoading && twMerge("text-transparent", spinnerStyle.root),
        className
      )}
      type={type}
      disabled={disabled || isLoading}
      {...restProps}
    >
      {handledChildren}
    </Comp>
  );
}
