import { AlertModalProps } from "@/components/ui/overlay/AlertModal";
import { create } from "zustand";

export const alertInitialValues: AlertArgs = {
  title: "",
  description: "",
  variant: "default",
  confirmButtonText: "Ok",
  cancelButtonText: "Cancel",
  showCancelButton: false,
  isAsync: false,
};

export interface AlertArgs
  extends Omit<
    AlertModalProps,
    "id" | "children" | "className" | "show" | "isSubmiting"
  > {
  isAsync?: boolean;
}

interface State {
  show: boolean;
  alertModalValues: AlertArgs;
  isSubmiting: boolean;
}

interface Actions {
  closeAlert: () => void;
  setShow: (value: boolean) => void;
  setAlertModalValues: (values: AlertArgs) => void;
}

export const useAlertModalStore = create<State & Actions>((set) => ({
  isSubmiting: false,
  show: false,
  alertModalValues: alertInitialValues,
  setShow: (value: boolean) => {
    set(() => ({ show: value }));
  },
  setAlertModalValues: (values: AlertArgs) => {
    set(() => ({ alertModalValues: values }));
  },
  closeAlert: () => {
    set(() => ({
      show: false,
      isSubmiting: false,
      alertModalValues: alertInitialValues,
    }));
  },
}));
