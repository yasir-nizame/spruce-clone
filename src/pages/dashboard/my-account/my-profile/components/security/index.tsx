import { Button } from "antd";
import Cheading from "../../../../../../components/atoms/c-heading";

const SecurityCard = ({
  onChangePassword,
}: {
  onChangePassword: () => void;
}) => {
  return (
    <div className="bg-white p-4">
      <Cheading text="Security" className="" />
      <p className="!my-4">Change your password</p>
      <div className="w-1/8 text-lg font-semibold">
        <Button
          className="!font-semibold !py-5 !text-black !bg-white !border-gray rounded-lg !h-[50px] w-[212px]"
          type="primary"
          onClick={onChangePassword}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default SecurityCard;
