import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ValidationLogin } from "./validation";
import HFTextField from "../../components/FormElements/HFTextField";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth/auth.slice";
import usePageRouter from "../../hooks/useObjectRouter";
import useAuth from "../../services/auth/useAuth";
import md5 from 'md5'

const Registration = () => {
  const { navigateTo } = usePageRouter();
  const dispatch = useDispatch();
  const schema = ValidationLogin();
  const { control, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  // const { signup } = useAuth({
  //   registerProps: {
  //     onSuccess: (res: any) => {
        // const states = {
        //   user: res,
        //   isAuth: true,
        // };
        // if (res?.id) {
        //   dispatch(authActions.login(states));
        //   navigateTo("/main/books");
        // }
  //     },
  //   },
  // });

  const onSubmit = (data: any) => {
    // signup.mutate(JSON.stringify(data));

    const apiUrl = "https://no23.lavina.tech"; // Replace with the actual API URL
    const userKey = data.key
    const userSecret = data.secret // Replace with the user secret

    // Construct the authorization string
    const method = "GET";
    const body = ""; // Empty for GET requests
    const concatenatedString = `${method}+${apiUrl}+${body}+${userSecret}`;
    const sign = md5(concatenatedString); // Calculate the MD5 hash

    // Make the GET request
    fetch(apiUrl + '/signup', {
      method: "POST",
      headers: {
        Key: userKey,
        Sign: sign,
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((res) => {
        console.log('responseData', res);
        const states = {
          user: res.data,
          isAuth: true,
        };
        if (res?.data?.id) {
          dispatch(authActions.login(states));
          navigateTo("/main/books");
        }
        
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div className="text-black flex flex-col items-center justify-center w-full h-full p-10">
      <h2 className="text-3xl font-bold">Registration</h2>
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
        <button
          type="submit"
          className="bg-[#007aff] h-[40px] rounded-[10px] text-white mt-5"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
