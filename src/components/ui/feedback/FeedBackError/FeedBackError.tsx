import Image from "next/image";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/buttons/Button";
import { IoReload } from "react-icons/io5";

interface FeedBackErrorProps {
  onTryAgain?: () => void;
}

export function FeedBackError({ onTryAgain }: FeedBackErrorProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col items-end justify-center w-full space-y-4"
      )}
    >
      <Image
        className="mx-auto w-40 h-40 sm:w-60 sm:h-60"
        src="/images/feedback-error.svg"
        alt="logo"
        width={240}
        height={240}
        priority
      />
      <Button className="mx-auto" rightIcon={<IoReload />} onClick={onTryAgain}>
        Tentar novamente
      </Button>
    </div>
  );
}
