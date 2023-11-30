import React, { ComponentPropsWithoutRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { twMerge } from "tailwind-merge";
import { FaTimes } from "react-icons/fa";
import {
  Card,
  CardProps,
  CardBodyProps,
  CardFooterProps,
} from "@/components/ui/cards/Card";

export interface ModalProps extends CardProps {
  show?: boolean;
  hideCloseIcon?: boolean;
  onClose?: () => void;
}
export interface ModalTitleProps extends ComponentPropsWithoutRef<"div"> {}
export interface ModalBodyProps extends CardBodyProps {}
export interface ModalFooterProps extends CardFooterProps {}

const Modal = ({
  children,
  className,
  show,
  hideCloseIcon,
  onClose,
  ...restProps
}: ModalProps) => {
  return (
    <Dialog.Root open={show}>
      <Dialog.Portal>
        <Dialog.Overlay
          className="z-[10000] fixed inset-0 bg-black/30"
          onClick={onClose}
        />
        <Card
          asChild
          className={twMerge(
            "fixed z-[10001] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
            "w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)] max-w-xl",
            className
          )}
        >
          <Dialog.Content
            onOpenAutoFocus={(e) => e.preventDefault()}
            {...restProps}
          >
            {children}
            {!hideCloseIcon && (
              <Dialog.Close
                asChild
                className="absolute top-5 right-6 p-1 cursor-pointer text-black"
                onClick={onClose}
                role="button"
                aria-label="Close"
              >
                <span>
                  <FaTimes />
                </span>
              </Dialog.Close>
            )}
          </Dialog.Content>
        </Card>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
const Title = ({ children, ...restProps }: ModalTitleProps) => {
  return (
    <Card.Header>
      <Card.Title asChild {...restProps}>
        <Dialog.Title>{children}</Dialog.Title>
      </Card.Title>
    </Card.Header>
  );
};

const Body = ({ children, ...restProps }: ModalBodyProps) => {
  return <Card.Body {...restProps}>{children}</Card.Body>;
};

function Footer({ children, ...restProps }: ModalFooterProps) {
  return <Card.Footer {...restProps}>{children}</Card.Footer>;
}

Modal.Title = Title;
Modal.Body = Body;
Modal.Footer = Footer;

export { Modal };