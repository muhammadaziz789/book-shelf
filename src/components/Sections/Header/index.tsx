import { FC, ReactNode } from "react";

interface Props {
  title?: string;
  btns?: string[];
  children?: ReactNode;
  extra?: any
}

const SectionHeader: FC<Props> = ({ title = '', extra, children }) => {
  return (
    <div className="pb-6 flex items-center justify-between">
      {extra && <div>{extra}</div>}
      <h3 className="text-2xl font-[600] text-[var(--black)]">{title}</h3>
      <div>{children}</div>
      {/* <div className="flex items-center gap-[14px]">
        {btns?.includes('filter') && <FilterButton text="Filtrlash:" />}
        {btns?.includes('add') && <AddButton text={text} />}
      </div> */}
    </div>
  );
};

export default SectionHeader;
