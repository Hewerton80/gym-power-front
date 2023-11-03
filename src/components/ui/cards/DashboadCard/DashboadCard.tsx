import { Card, CardProps } from "@/components/ui/cards/Card";
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

interface DashboadCardProps extends CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  variant?: keyof typeof variants;
}

export function DashboadCard({
  title,
  description,
  icon,
  variant = "success",
  className,
  children,
  ...restProps
}: DashboadCardProps) {
  return (
    <Card className={twMerge("relative", className)} {...restProps}>
      <Card.Body className="flex-row items-center gap-6">
        <span
          className={twMerge(
            "flex items-center justify-center rounded-full w-20 h-20 text-4xl",
            variants[variant].bgTransparent,
            variants[variant].text
          )}
        >
          {icon}
        </span>
        <div className="flex flex-col gap-3">
          <p className="text-sm text-body-text">{title}</p>
          <b className="text-black text-[1.75rem] font-semibold">
            {description}
          </b>
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
