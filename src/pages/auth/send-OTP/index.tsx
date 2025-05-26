import { useState } from "react";
import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import CLabelInput from "../../../components/atoms/c-label";
import { Form, message } from "antd";
import AuthLayout from "../../../components/layouts/auth-layout";
import { useNavigate } from "react-router";
import EnterOTP from "../enter-otp";

const SendOTP = () => {
  const navigate = useNavigate();
  const [showEnterOTP, setShowEnterOTP] = useState(false);

  const handleClick = () => {
    console.log("Send OTP Clicked");
    setShowEnterOTP(true);
  };
  const handleOtpSuccess = () => {
    message.success("OTP verified successfully!");
    navigate("/forgot-password");
  };

  return (
    <AuthLayout>
      {showEnterOTP ? (
        <EnterOTP onSuccess={handleOtpSuccess} />
      ) : (
        <>
          <div></div>
          <Cheading
            text="Forgot Password"
            className="!text-primary !font-bold !text-[28px] !mb-0 font-sf-pro-bold"
          />
          <p className="font-normal text-base">Reset Your Password via Email</p>
          <Form layout="vertical">
            <div className="my-4">
              <CLabelInput
                label="Email Address"
                name="email"
                placeholder="henryarthur@example.com"
                type="email"
                required
              />
            </div>
            <Cbutton
              label="Send OTP"
              type="primary"
              size="large"
              onClick={handleClick}
            />
          </Form>
          <p
            className="text-center !my-8 cursor-pointer"
            onClick={() => navigate("/sign-in")}
          >
            Back to Login
          </p>
        </>
      )}
    </AuthLayout>
  );
};

export default SendOTP;
