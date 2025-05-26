import { Layout, Avatar } from "antd";
import { Bell, User } from "lucide-react";

const { Header } = Layout;

const Cheader = () => {
  return (
    <Header className="!bg-white flex px-4">
      <div className=" items-center  gap-4 flex justify-end w-full">
        <div className="bg-secondary rounded-full  w-[36px] h-[36px] flex justify-center items-center">
          <Bell className="" />
        </div>
        <Avatar icon={<User />} />
      </div>
    </Header>
  );
};

export default Cheader;
