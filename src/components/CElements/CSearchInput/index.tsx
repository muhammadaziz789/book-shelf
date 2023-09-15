import { CircularProgress } from "@mui/material";
import { SearchIcon } from "../../IconGenerator/Svg";

const CSearchInput = ({ ...props }) => {
  return (
    <div className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 left-3">
        <SearchIcon />
      </div>
      <input
        {...props}
        type="text"
        placeholder="Izlash..."
        className="w-[250px] bg-transparent h-[40px] outline-none pl-10 pr-5 text=[var(--black)] placeholder-gray border border-[var(--lineGray)] focus:border-[var(--main)] rounded-[10px]"
      />
      {props.loading && (
        <div className="absolute top-1/2 -translate-y-1/2 right-3 flex items-center">
          <CircularProgress size={20} />
        </div>
      )}
    </div>
  );
};

export default CSearchInput;
