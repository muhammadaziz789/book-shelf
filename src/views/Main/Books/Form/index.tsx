import { useForm } from "react-hook-form";
import { Validation } from "./validate";
import { yupResolver } from "@hookform/resolvers/yup";
import HFTextField from "../../../../components/FormElements/HFTextField";
import usePageRouter from "../../../../hooks/useObjectRouter";
import CModal from "../../../../components/CElements/CModal";
import { t } from "i18next";
import useBook from "../../../../services/bookService/useBook";
import { FC, useState } from "react";

interface Props {
  refetch: () => void;
  user: { key: string; secret: string };
}

const Form: FC<Props> = ({ refetch, user }) => {
  const schema = Validation();
  const { navigateQuery, getQueries } = usePageRouter();
  const query = getQueries();
  const [loading, setLoading] = useState(false)

  const handleClose = () => navigateQuery({ id: "" })

  const { control, handleSubmit, reset } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const { create } = useBook({
    createProps: {
      onSuccess: (res: any) => {
        if (res.isbn) {
          refetch();
          handleClose()
          reset()
        }
        setLoading(false)
      },
    },
  });

  const onSubmit = (data: any) => {
    setLoading(true)
    create.mutate({ key: user.key, sign: user.secret, data: {...data} });
  };
  

  return (
    <CModal
      title="add_new_book"
      open={!!query?.id}
      handleClose={() => handleClose()}
      textDeleteBtn="cancel"
      footerActive={false}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 w-full">
        <HFTextField
          name="isbn"
          control={control}
          placeholder="Isbn"
          label="number"
          required={true}
        />
        <div className="flex space-x-3">
          <button
            disabled={loading}
            type="submit"
            className={`h-[40px] rounded-[10px] text-white w-full ${loading ? 'bg-[var(--lineGray)]' : 'bg-[var(--main)]'}`}
          >
            {t("confirm")}
          </button>

          <button
            onClick={() => handleClose()}
            type="button"
            className="bg-[var(--lineGray)] h-[40px] rounded-[10px] text-[var(--black)] w-full"
          >
            {t("cancel")}
          </button>
        </div>
      </form>
    </CModal>
  );
};

export default Form;
