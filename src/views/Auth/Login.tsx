import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ValidationLogin } from "./validation";
import HFTextField from "../../components/FormElements/HFTextField";
import authService from "../../services/auth/authService";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/auth.slice";

const Login = () => {
  const dispatch = useDispatch()
  const schema = ValidationLogin();
  const {
    control,
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    authService.registerFn(JSON.stringify(data)).then((res: any) => {      
      const states = {
        user: res,
        isAuth: true
      }
      if (res?.id) dispatch(authActions.login(states));
    })
  };

  return (
    <div className="text-black flex flex-col items-center justify-center w-full h-full p-10">
      <h2 className="text-3xl font-bold">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 w-full">
        <HFTextField
          name="name"
          control={control}
          placeholder="Write name"
          label="Name"
          required={true}
        />
        <HFTextField
          name="email"
          control={control}
          placeholder="Write email"
          label="Email"
          required={true}
        />
        <HFTextField
          name="key"
          control={control}
          placeholder="Write a key"
          label="Key"
          required={true}
        />
        <HFTextField
          name="secret"
          control={control}
          placeholder="Write a secret"
          label="Secret"
          required={true}
        />
        <button type="submit" className="bg-[#007aff] h-[40px] rounded-[10px] text-white mt-5">Register</button>
      </form>
    </div>
  );
};

export default Login;
