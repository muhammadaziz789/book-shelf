import { Button } from "@mui/material";
import { ArrowDownFilled } from "../IconGenerator/Svg";
import { t } from "i18next";

interface Props {
  text?: string;
}

const FilterButton = ({ text = '' }: Props) => {
  return (
    <div id="filterButton">
      <Button>
        <span className="text-[var(--gray)]">{t(text)}</span>

        <div className="icon">
          <ArrowDownFilled />
        </div>
      </Button>
    </div>
  );
};

export default FilterButton;
