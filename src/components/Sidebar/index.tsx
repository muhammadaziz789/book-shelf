import cls from "./style.module.scss";
import SidebarSection from "./Section";
import { memo } from "react";

const Sidebar = () => {
  return (
    <div className={cls.sidebar}>
      <div className="px-[20px] h-[76px] border border-[var(--lineGray)] flex items-center">
        <img width={40} src="/logo.svg" alt="logo" />
        <p className="font-bold text-2xl ml-3">Books</p>
      </div>
      <SidebarSection />
    </div>
  );
};

export default memo(Sidebar)