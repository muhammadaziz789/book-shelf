import axios from "axios";
import { store } from "../store/index";
import { showAlert } from "../store/alert/alert.thunk";
export const baseURL = import.meta.env.VITE_BASE_URL_AUTH;

const requestAuth = axios.create({
  baseURL,
  timeout: 100000,
});

const errorHandler = (error: any) => {
  if (error.response?.data?.data)
    store.dispatch(showAlert({ title: error.response.data.data }));
  else store.dispatch(showAlert({ title: "___ERROR___" }));

  return Promise.reject(error.response);
};

requestAuth.interceptors.request.use(
  (config) => {
    return config;
  },

  (error) => errorHandler(error)
);

requestAuth.interceptors.response.use(
  (response) => response.data.data,
  errorHandler
);

export default requestAuth;
