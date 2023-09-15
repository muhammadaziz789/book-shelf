import { t } from "i18next";
import * as yup from "yup";
export const Validation = () => {
  return yup.object().shape({
    // isbn: yup.string().required(t('required_field')),
  });
};
