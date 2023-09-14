import requestAuth from "../../utils/requestAuth";
const authService = {
  loginFn: (data: object) => requestAuth.post("/myself", data),
  registerFn: (data?: any) => requestAuth.post(`/signup`, data)
};

export default authService;
