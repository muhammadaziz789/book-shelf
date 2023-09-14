import axios from "axios";
import { store } from "../store/index";
import { showAlert } from "../store/alert/alert.thunk";
import { authActions } from "../store/auth/auth.slice";
import md5 from 'md5'

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
      
      // const concatenatedString = `${'GET'}+${baseURL}+${''}+${user.secret}`;
      // const sign = CryptoJS.md5(concatenatedString);

      // config.headers.Key = user.key
      // config.headers.Sign = sign
    }
    // const token = store.getState().auth.token?.access_token;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },

  (error) => errorHandler(error)
);

request.interceptors.response.use(
  (response) => response.data.data,
  errorHandler
);

export default request;


// GET /books HTTP/1.1
// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Connection: keep-alive
// Host: no23.lavina.tech
// Key: ffff
// Origin: http://localhost:5555
// Referer: http://localhost:5555/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// Sign: 13dc5a10dd534e77ed75f73dc47e36eb
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
// sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "macOS"


// GET /books HTTP/1.1
// Accept: application/json, text/plain, */*
// Accept-Encoding: gzip, deflate, br
// Accept-Language: en-US,en;q=0.9
// Connection: keep-alive
// Host: no23.lavina.tech
// Key: nnnn
// Origin: https://lavina-tech-three.vercel.app
// Referer: https://lavina-tech-three.vercel.app/
// Sec-Fetch-Dest: empty
// Sec-Fetch-Mode: cors
// Sec-Fetch-Site: cross-site
// Sign: a6d7ff4a7a9a7a6ee23dd7a2d83a2095
// User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
// sec-ch-ua: "Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"
// sec-ch-ua-mobile: ?0
// sec-ch-ua-platform: "macOS"