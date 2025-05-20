import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import { Form, Input } from "antd";
import AuthLayout from "../../../components/layouts/auth-layout";
import CLabelInputPassword from "../../../components/atoms/c-labelinput-password";
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
          <div className="my-4 ">
            <CLabelInputPassword
              label="New Password"
              name="password"
              placeholder="********"
              type="password"
            />
            <CLabelInputPassword
              label="Confirm Password"
              name="confirmpassword"
              placeholder="********"
              type="password"
            />
          </div>

          <Cbutton
            label="Submit"
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
export default EnterOTP;
