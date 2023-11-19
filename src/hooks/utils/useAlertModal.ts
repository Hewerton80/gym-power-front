import { useContext } from "react";
import { AlertContext, IAlertContext } from "@/contexts/alertContext";

export function useAlertModal(): Omit<IAlertContext, "alertArgs"> {
  const { showAlert, closeAlert } = useContext(AlertContext);
  return { showAlert, closeAlert };
}
