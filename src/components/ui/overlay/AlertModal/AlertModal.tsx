"use client";
import React, { forwardRef, useContext } from "react";
import { Modal, ModalProps } from "@/components/ui/overlay/Modal";
import { twMerge } from "tailwind-merge";
import { Button, ButtonVariantStyle } from "@/components/ui/buttons/Button";
import { isString } from "@/utils/isType";
import { AlertContext } from "@/contexts/alertContext";

// type VariantsMap = {
//   [Property in Variant]: { icon: JSX.Element };
// };

const variants = {
  default: { color: "text-black" },
  success: { color: "text-success" },
  info: { color: "text-info" },
  warning: { color: "text-warning" },
  danger: { color: "text-danger" },
};

type VariantType = keyof typeof variants;

export interface AlertModalProps
  extends Omit<ModalProps, "children" | "hideCloseIcon"> {
  title?: string;
  variant?: VariantType;
  showCancelButton?: boolean;
  isSubmiting?: boolean;
  description?: string | JSX.Element;
  confirmButtonText?: string;
  cancelButtonText?: string;
  confirmButtonVariantStyle?: ButtonVariantStyle;
  cancelButtonVariantStyle?: ButtonVariantStyle;
  onClickConfirmButton?: () => void;
  onClickCancelButton?: () => void;
}

const AlertModal = forwardRef(() => {
  const {
    alertArgs: {
      show,
      title,
      description,
      variant = "default",
      isSubmiting,
      confirmButtonText = "Ok",
      cancelButtonText = "Voltar",
      confirmButtonVariantStyle = "danger-outlined",
      cancelButtonVariantStyle = "primary-outlined",
      showCancelButton,
      onClose,
      onClickConfirmButton,
      onClickCancelButton,
      ...restProps
    },
  } = useContext(AlertContext);
  return (
    <Modal
      show={show}
      onClose={() => !isSubmiting && onClose?.()}
      className=" shadow-gray-100"
      hideCloseIcon
      {...restProps}
    >
      <Modal.Body>
        <div className="flex flex-col items-center space-y-3">
          {title && (
            <h4
              className={twMerge(
                "text-[1.375rem] text-center font-bold",
                variants[variant].color
              )}
            >
              {title}
            </h4>
          )}

          {isString(description) ? <p>{description}</p> : description}
        </div>
      </Modal.Body>
      <Modal.Footer orientation="center">
        {showCancelButton && (
          <Button
            variantStyle={variant as ButtonVariantStyle}
            onClick={onClickCancelButton}
            disabled={isSubmiting}
          >
            {cancelButtonText}
          </Button>
        )}
        <Button
          variantStyle={variant as ButtonVariantStyle}
          onClick={onClickConfirmButton}
          isLoading={isSubmiting}
        >
          {confirmButtonText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export { AlertModal };
