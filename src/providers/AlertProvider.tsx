import { ReactNode } from "react";
import Alerts from "../components/Alerts";

const AlertProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <Alerts />
      {children}
    </>
  );
};

export default AlertProvider;
