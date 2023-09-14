import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";

const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.leftSide}>
        <div className={styles.logoBlock}>
          <img src="/logo.svg" alt="logo" />
          <h1 className={styles.title}>Welcome</h1>
        </div>
      </div>
      <div className={styles.rightSide}>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
