import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import CLabelInput from "../../../components/atoms/c-label";
import { Form } from "antd";
import AuthLayout from "../../../components/layouts/auth-layout";

const handleClick = () => {
  console.log("Send OTP  Clicked");
};

const SendOTP = () => {
  return (
    <>
      <AuthLayout>
        <div></div>
        <Cheading
          text="Forgot Password"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <p className="font-normal text-base">Reset Your Password via Email</p>
        <Form layout={"vertical"}>
          <div className="my-4 ">
            <CLabelInput
              label="Email Address"
              name="email"
              placeholder="henryarthur@example.com"
              type="email"
            />
          </div>
          <Cbutton
            label="Send OTP"
            type="primary"
            size="large"
            onClick={handleClick}
          />
        </Form>
        <p className="text-center !my-8">Back to Login</p>
      </AuthLayout>
    </>
  );
};
export default SendOTP;
