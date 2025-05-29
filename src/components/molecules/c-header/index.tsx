import { Layout} from "antd";
import { Bell } from "lucide-react";
import UserAvatar from "../../atoms/c-profile";

const { Header } = Layout;

const Cheader = () => {
  return (
    <Header className="!bg-white flex px-4">
      <div className=" items-center  gap-4 flex justify-end w-full">
        <div className="bg-secondary rounded-full  w-[36px] h-[36px] flex justify-center items-center">
          <Bell className="" />
        </div>
        <UserAvatar name="Andrew" role="User" />
      </div>
    </Header>
  );
};

export default Cheader;
