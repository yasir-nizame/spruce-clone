import React from "react";
import { Card } from "antd";

interface CCouponCardProps {
  code: string;
  discount: string;
  expiry: string;
}

const CCouponCard: React.FC<CCouponCardProps> = ({
  code,
  discount,
  expiry,
}) => {
  return (
    <Card className="w-[284px] text-center rounded-xl shadow-sm border border-gray-200">
      <div className="flex flex-col items-center gap-2 pb-4">
        <div className="!my-4">
          <img src="/tag.png" alt="" />
        </div>{" "}
        <h2 className="font-semibold text-lg tracking-wide">{code}</h2>
        <p className="text-gray-700 font-medium">{discount}</p>
        <div className="bg-gray-100 text-gray-500 text-sm rounded-lg px-10 py-2 mt-2 ">
          Exp: {expiry}
        </div>
      </div>
    </Card>
  );
};

export default CCouponCard;
