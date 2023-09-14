import { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import { useDispatch, useSelector } from "react-redux";
import { websiteActions } from '../store/website/index'
import Books from "../views/Main/Books";
interface Props {
  parent: string;
  link: string;
  title: string;
  icon: string;
  sidebar: boolean;
}

const Router = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state: any) => state.auth.isAuth);
  const [list, setList] = useState<string[]>([]);
  const [routes, setRoutes] = useState({
    main: [],
  });

  const getPath = ({ parent, link, title, icon, sidebar }: Props) => {
    const path = `${parent}/${link}`;
    const obj = {
      path: path,
      sidebar,
      permission: path,
      id: path,
      title,
      icon,
    };

    if (!list.includes(obj.id)) {
      setRoutes((prev: any) => ({
        ...prev,
        [parent]: [...prev[parent], obj],
      }));
      setList((prev) => [...prev, obj.id]);
    }

    return path;
  };

  useEffect(() => {
    dispatch(websiteActions.setRoutes({ ...routes }));
  }, []);

  if (!isAuth) {
    return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Navigate to="/registration" />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="/registration" />} />
        </Route>
        <Route path="*" element={<Navigate to="/registration" />} />
      </Routes>
    );
  }

  return (
    <Suspense fallback={"Loading..."}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="main/books" />} />
          <Route
            path={getPath({
              parent: "main",
              link: "books",
              sidebar: true,
              title: "books",
              icon: "admins",
            })}
            element={<Books />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Router;
