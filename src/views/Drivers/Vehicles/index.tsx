import AddButton from "../../../components/Buttons/AddButton";
import SectionHeader from "../../../components/Sections/Header";
import usePageRouter from "../../../hooks/useObjectRouter";
import Section from "./Section";

const Vehicles = () => {
  const { navigateQuery } = usePageRouter();
  return (
    <>
      <SectionHeader title="Mashinalar ro‘yxati">
        <div className="flex items-center gap-3">
          <AddButton
            text="new_driver"
            onClick={() => navigateQuery({ id: "create" })}
          />
        </div>
      </SectionHeader>

      <Section title="Premium mashinalar" />
    </>
  );
};

export default Vehicles;
