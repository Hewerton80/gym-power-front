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
  alertArgs: AlertArgs;
}

interface Actions {
  setAlertArgs: (alertArgs: AlertArgs) => void;
}

export const useAlertModalStore = create<State & Actions>((set) => ({
  alertArgs: alertInitialValues,
  setAlertArgs: (alertArgs: AlertArgs) => {
    set({ alertArgs });
  },
}));
