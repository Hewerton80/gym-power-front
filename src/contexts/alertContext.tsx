"use client";

import React, {
  useCallback,
  ReactNode,
  createContext,
  useState,
  useMemo,
  // useEffect,
} from "react";
import { AlertModalProps } from "@/components/ui/overlay/AlertModal";
// import { usePathname } from "next/navigation";

interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "show" | "isSubmiting"
  > {
  isAsync?: boolean;
}
export interface IAlertContext {
  showAlert: (alertModalProps: AlertArgs) => void;
  closeAlert: () => void;
  alertArgs: AlertModalProps;
  // changeLoadAlert?: (load: boolean) => void;
}

const alertInitialValues: AlertArgs = {
  title: "",
  description: "",
  variant: "default",
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  showCancelButton: false,
  isAsync: false,
};

export const AlertContext = createContext({} as IAlertContext);

interface IAlertContextProps {
  children: ReactNode;
}

export function AlertContextProvider({ children }: IAlertContextProps) {
  // const path = usePathname();

  // show,
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [show, setShow] = useState(false);
  const [alertModalValues, setAlertModalValues] =
    useState<AlertArgs>(alertInitialValues);

  const {
    onClose,
    onClickCancelButton,
    onClickConfirmButton,
    isAsync,
    ...restAlertModalValues
  } = useMemo(() => alertModalValues, [alertModalValues]);

  const showAlert = useCallback((alertModalProps: AlertArgs) => {
    setShow(true);
    setAlertModalValues(alertModalProps);
  }, []);

  const closeAlert = useCallback(() => {
    console.log("closeAlert");
    setShow(false);
    setIsSubmiting(false);
    setAlertModalValues(alertInitialValues);
  }, []);

  const handleCloseAlert = useCallback(() => {
    console.log("handleCloseAlert");
    closeAlert();
    onClose?.();
  }, [closeAlert, onClose]);

  const handleClickCancelButton = useCallback(() => {
    handleCloseAlert();
    onClickCancelButton?.();
  }, [handleCloseAlert, onClickCancelButton]);

  const handleClickConfirmButton = useCallback(() => {
    if (isAsync) {
      setIsSubmiting(true);
    } else {
      handleCloseAlert();
    }
    onClickConfirmButton?.();
  }, [isAsync, onClickConfirmButton, handleCloseAlert]);

  // useEffect(() => {
  //   handleCloseAlert();
  // }, [path, handleCloseAlert]);

  return (
    <AlertContext.Provider
      value={{
        showAlert,
        closeAlert,
        alertArgs: {
          show,
          isSubmiting,
          onClose: handleCloseAlert,
          onClickCancelButton: handleClickCancelButton,
          onClickConfirmButton: handleClickConfirmButton,

          ...restAlertModalValues,
        },
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
