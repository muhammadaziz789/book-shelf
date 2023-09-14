import { useMutation } from "react-query";
import authService from "./authService";

interface Props {
  registerProps?: any;
  loginProps?: any
}

const useAuth = ({ registerProps, loginProps }: Props) => {
  const signup = useMutation(authService.registerFn, registerProps);
  const login = useMutation(authService.loginFn, loginProps);

  return {
    signup,
    login,
  };
};

export default useAuth;
