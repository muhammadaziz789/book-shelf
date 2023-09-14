import { md5Generator } from "../../utils/md5Generator";
import requestAuth from "../../utils/requestAuth";
const authService = {
  loginFn: (data: {key: string, sign: string}) => requestAuth({
    url: "myself",
    method: "GET",
    headers: {
      Key: data.key,
      Sign: md5Generator("GET", "/myself", "", data.sign),
    },
  }),
  registerFn: (data?: any) => requestAuth.post(`/signup`, data)
};

export default authService;
