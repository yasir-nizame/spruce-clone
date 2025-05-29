import React from "react";
import { Switch } from "antd";
import {
  MasterDebitIcon,
  TrashCanIcon,
  VisaDebitIcon,
} from "../../../assets/svgs/icons";

interface CCreditCardProps {
  last4Digits: string;
  cardType: string;
  isDefault: boolean;
  onDefaultToggle: () => void;
  onDelete: () => void;
}

const CCreditCard: React.FC<CCreditCardProps> = ({
  last4Digits,
  isDefault,
  cardType,
  onDefaultToggle,
  onDelete,
}) => {
  return (
    <div className="flex items-center justify-between py-8 px-2 rounded-lg  border border-gray-200 w-full  bg-white">
      <div className="flex flex-col space-x-4 pl-2">
        {cardType === "visa" ? <VisaDebitIcon /> : <MasterDebitIcon />}
        <div className="text-gray-700 font-medium mt-2">
          {last4Digits} **** **** ****
        </div>
      </div>

      <div className="flex space-x-4  !items-center">
        <div className="text-gray-500 text-sm">Default</div>
        <Switch checked={isDefault} onChange={onDefaultToggle} />
        <TrashCanIcon className="w-[22px] h-[38px] ml-3 cursor-pointer" />
        <img className="" onClick={onDelete} />
      </div>
    </div>
  );
};

export default CCreditCard;
