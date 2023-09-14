import { ArrowDownFilled, LogoutIcon } from "../../IconGenerator/Svg";
import cls from "./style.module.scss";
import ContextMenu from "../../ContextMenu";
import { useState } from "react";
import { authActions } from "../../../store/auth/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import authService from "../../../services/auth/authService";
import { useQuery } from "react-query";

const UserInfo = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);

  const { data: userInfo } = useQuery<any>(
    ["GET_USER_INFO", user],
    () => {
      return authService.loginFn({ key: user.key, sign: user.secret });
    },
    {
      enabled: !!user.key,
    }
  );
  
  return (
    <div className={cls.wrapper}>
      <div
        className="flex items-center space-x-[10px]"
        onClick={() => setOpen(true)}
      >
        <div className={cls.image}>
          <img src="/images/website/avatar.jpg" alt="avatar" />
        </div>
        <div className={cls.content}>
          <h2 className="font-[600] text-black">{userInfo?.name}</h2>
        </div>
      </div>
      <div className="pl-4 py-3">
        <ArrowDownFilled />
      </div>

      <ContextMenu
        visible={open}
        position={{ y: 50, x: 0 }}
        closeContextMenu={() => setOpen(false)}
      >
        <div
          className="flex items-center space-x-3"
          onClick={() => dispatch(authActions.logout())}
        >
          <LogoutIcon />
          <p className="font-medium">Logout</p>
        </div>
      </ContextMenu>
    </div>
  );
};

export default UserInfo;
