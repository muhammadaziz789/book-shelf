import * as yup from "yup";
export const ValidationLogin = () => {
  return yup.object().shape({
    name: yup.string().required("Обязательное поле"),
    email: yup.string().required("Обязательное поле"),
    secret: yup.string().required("Обязательное поле"),
    key: yup.string().required("Обязательное поле")
  });
};
