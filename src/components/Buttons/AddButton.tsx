import { Button } from "@mui/material";
import "./style.scss";
import { PlusIcon } from "../IconGenerator/Svg";
import { useTranslation } from "react-i18next";

interface Props {
  text?: string;
  iconLeft?: any;
  type?: string;
  onClick?: (val?: any) => void
}

const AddButton = ({ text = '', iconLeft = true, ...props }: Props) => {
  const { t } = useTranslation()
  return (
    <div id="addBtn" {...props}>
      <Button type="submit">
        {iconLeft === true ? <PlusIcon /> : iconLeft}
        <span className="font-[600] ml-1">{t(text)}</span>
      </Button>
    </div>
  );
};

export default AddButton;
