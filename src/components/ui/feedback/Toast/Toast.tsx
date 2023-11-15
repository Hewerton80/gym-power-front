import { ToastContainer } from "react-toastify";
import style from "./Toast.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "react-toastify/dist/ReactToastify.css";

export function Toast() {
  return (
    <ToastContainer
      icon={<IoIosCheckmarkCircleOutline width={48} height={48} />}
      className={style.root}
    />
  );
}
