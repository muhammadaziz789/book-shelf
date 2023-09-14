import { FC, ReactNode } from "react";
import "./style.scss";
import CCloser from "../CElements/CCloser";

interface Props {
  children?: ReactNode;
  position: { y: number; x: number };
  visible: boolean;
  closeContextMenu: (val?: any) => void;
}

const ContextMenu: FC<Props> = ({
  children,
  position,
  visible,
  closeContextMenu,
}) => {
  if (!visible) return null;

  const style = {
    top: position.y,
    right: position.x,
  };

  return (
    <div className="ContextMenu" style={style}>
      <div className="relative z-[99] py-2 px-4">{children}</div>

      <CCloser onClick={() => closeContextMenu()} />
    </div>
  );
};

export default ContextMenu;
