import React from "react";
import { Avatar } from "antd";
import { ChevronDown, User } from "lucide-react";

interface UserAvatarProps {
  name: string;
  role: string;
  imageUrl?: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ name, role, imageUrl }) => {
  return (
    <div className="flex items-center gap-1.5">
      <div>
        {imageUrl ? (
          <Avatar size={36} src={imageUrl} />
        ) : (
          <Avatar size={36} icon={<User />} className="bg-gray" />
        )}
      </div>
      <div className="flex flex-col  p-2">
        <span className="text-sm text-primary !font-medium">{name}</span>
        <span className="text-xs font-normal">{role}</span>
      </div>
      <div>
        <ChevronDown />
      </div>
    </div>
  );
};

export default UserAvatar;
