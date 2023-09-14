import axios from "axios";
import { store } from "../store/index";
import { showAlert } from "../store/alert/alert.thunk";
import { authActions } from "../store/auth/auth.slice";

export const baseURL = import.meta.env.VITE_BASE_URL;

const request = axios.create({
  baseURL,
  timeout: 100000,
});

const errorHandler = (error: any) => {
  const status = error.response?.status;

  if (status === 403) {
    showAlert({
      title: `Forbidden: ${error.response?.data?.data}`,
    });
    store.dispatch(authActions.logout());
  } else if (status === 401) {
    console.log('refresh token');
  } else store.dispatch(showAlert({ title: "___ERROR___" }));

  return Promise.reject(error.response);
};

request.interceptors.request.use(
  (config) => {
    const user: any = store.getState().auth.user;
    console.log('user', user);
    
    if (user?.sign) {
      console.log(request);
    }
    return config;
  },

  (error) => errorHandler(error)
);

request.interceptors.response.use(
  (response) => response.data.data,
  errorHandler
);

export default request;