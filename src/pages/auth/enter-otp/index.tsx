import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import { Form, Input } from "antd";
import AuthLayout from "../../../components/layouts/auth-layout";
const handleClick = () => {
  console.log("Login Clicked");
};

const EnterOTP = () => {
  return (
    <>
      <AuthLayout>
        <Cheading
          text="Enter OTP"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <p className="font-normal text-base">
          Please enter the code we just sent to email
        </p>
        <Form layout={"vertical"}>
          <Form.Item>
            <div className="!grid !grid-cols-4 !gap-4 !mt-4  ">
              <Input className="w-[28px] h-[56px]"></Input>
              <Input></Input>
              <Input></Input>
              <Input></Input>
            </div>
          </Form.Item>

          <Cbutton
            label="Verify"
            type="primary"
            size="large"
            onClick={handleClick}
          />
        </Form>
        <p className="text-center !my-8">
          We have sent you a One Time Password (OTP). Please check your email
        </p>
        <p className="text-center">
          Resend code in <span className="text-primary">(00:50)</span>
        </p>
      </AuthLayout>
    </>
  );
};
export default EnterOTP;
