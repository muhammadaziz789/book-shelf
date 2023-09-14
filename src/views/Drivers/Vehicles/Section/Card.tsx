import CCard from "../../../../components/CElements/CCard";
import { CarIcon } from "../../../../components/IconGenerator/Svg";
import { RoutingIcon } from "../../../../components/IconGenerator/Svg/Sidebar";
import { ColorConstants } from "../../../../constants/website";
import Progress from "./Progress"

const Card = () => {
  return (
    <CCard classes="min-h-0" style={{ minHeight: '0' }}>
      <div className="flex items-center justify-between border-b border-[var(--lineGray)]">
        <div>
          <h5 className="text-2xl text-black font-[600]">Malibu 2</h5>

          <div className="mt-2 flex space-x-2">
            <div className="flex space-x-1">
              <CarIcon fill={ColorConstants.gray} />
              <span className="text-[var(--main)]">37 ta</span>
            </div>
            <div className="flex space-x-1">
              <RoutingIcon fill={ColorConstants.gray} width={18} height={18} />
              <span className="text-[var(--main)]">37 ta</span>
            </div>
          </div>
        </div>
        <div>
          <img src="../../../../../public/images/car.png" alt="car" />
        </div>
      </div>

      <div className="mt-6">
        <Progress />
      </div>
    </CCard>
  );
};

export default Card;
