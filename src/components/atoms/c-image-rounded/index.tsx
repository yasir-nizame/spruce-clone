import React from "react";
import { Avatar } from "antd";
import { User } from "lucide-react";

interface CimageProps {
  imageUrl?: string;
}

const Cimage: React.FC<CimageProps> = ({ imageUrl }) => {
  return (
    <div>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="profile pic"
          className="w-[106px] h-[106px] rounded-full "
        />
      ) : (
        <Avatar size={100} icon={<User />} className="" />
      )}
    </div>
  );
};

export default Cimage;
