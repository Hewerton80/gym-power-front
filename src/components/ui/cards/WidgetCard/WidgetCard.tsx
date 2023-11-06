import { Card, CardProps } from "@/components/ui/cards/Card";
import { isStrig } from "@/utils/isType";
import { twMerge } from "tailwind-merge";

const variants = {
  success: {
    bg: "bg-success",
    bgTransparent: "bg-success/20",
    text: "text-success",
  },
  info: {
    bg: "bg-info",
    bgTransparent: "bg-info/20",
    text: "text-info",
  },
  secondary: {
    bg: "bg-secondary",
    bgTransparent: "bg-secondary/20",
    text: "text-secondary",
  },
};

interface WidgetCardProps extends Omit<CardProps, "title"> {
  title: string | JSX.Element;
  description: string | JSX.Element;
  icon: JSX.Element;
  variant?: keyof typeof variants;
}

export function WidgetCard({
  title,
  description,
  icon,
  variant = "success",
  className,
  children,
  ...restProps
}: WidgetCardProps) {
  return (
    <Card className={twMerge("relative", className)} {...restProps}>
      <Card.Body className="flex-row items-center gap-6">
        <span
          className={twMerge(
            "flex items-center justify-center rounded-full  text-4xl",
            "min-w-[5rem] min-h-[5rem] max-w-[5rem] max-h-[5rem]",
            variants[variant].bgTransparent,
            variants[variant].text
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col w-full gap-3">
          {isStrig(title) ? <p className="text-sm">{title}</p> : title}

          {isStrig(description) ? (
            <b className="text-black text-[1.75rem] font-semibold">
              {description}
            </b>
          ) : (
            description
          )}
        </div>
      </Card.Body>
      <div
        className={twMerge(
          "absolute h-1 w-full bottom-0",
          variants[variant].bg
        )}
      />
    </Card>
  );
}