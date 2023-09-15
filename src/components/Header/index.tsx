import Search from './Search'
import cls from "./style.module.scss";
import UserInfo from "./UserInfo";
import { memo } from "react";
const Header = () => {

  return (
    <div>
      <div
        className={`${cls.header} border-b border-[var(--lineGray)] px-[24px]`}
      >
        <Search />
        <div className="flex items-center">
          <div className={`${cls.line} mx-[30px] bg-[var(--lineGray)]`}></div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
