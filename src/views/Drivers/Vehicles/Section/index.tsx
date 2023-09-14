import CCard from "../../../../components/CElements/CCard";
import Card from './Card'

interface Props {
    title: string
}

const Section = ({ title }: Props) => {
  return (
    <CCard
      classes="bg-transparent rounded-[30px] border-[var(--lineGray)]"
      style={{ background: "transparent" , padding: '18px'}}
    >
        <p className="text-[var(--gray)] mb-[14px] text-base font-medium">{title}</p>

        <div className="grid grid-cols-3 gap-[18px]">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    </CCard>
  );
};

export default Section