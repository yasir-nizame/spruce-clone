import { useEffect, useState } from "react";
import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import { Form, message } from "antd";
import { InputOTP } from "antd-input-otp";

const EnterOTP = ({ onSuccess }: { onSuccess: () => void }) => {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const [otpStatus, setOtpStatus] = useState<"success" | "error" | null>(null);

  useEffect(() => {
    if (otpStatus === "success") {
      messageApi.success("OTP verified successfully");
      onSuccess(); 
      setOtpStatus(null); 
    } else if (otpStatus === "error") {
      messageApi.error("Invalid OTP");
      setOtpStatus(null); 
    }
  }, [otpStatus, messageApi, onSuccess]);

  const handleOtpSubmit = ({ otp }: { otp: string[] }) => {
    const otpString = otp.join("");
    if (otpString === "0000") {
      setOtpStatus("success");
    } else {
      setOtpStatus("error");
    }
  };

  return (
    <>
      {contextHolder}
      <div>
        <Cheading
          text="Enter OTP"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <p className="font-normal text-base">
          Please enter the code we just sent to email
        </p>
        <Form
          layout={"vertical"}
          form={form}
          name="otpForm"
          onFinish={handleOtpSubmit}
        >
          <Form.Item label="" name="otp" className="!my-4">
            <InputOTP
              autoSubmit={form}
              inputType="numeric"
              length={4}
              inputStyle={{
                width: "128px",
                height: "58px",
                maxWidth: "none",
              }}
            />
          </Form.Item>

          <Cbutton label="Verify" type="primary" size="large" />
        </Form>
        <p className="text-center !my-8">
          We have sent you a One Time Password (OTP). Please check your email
        </p>
        <p className="text-center">
          Resend code in <span className="text-primary">(00:50)</span>
        </p>
      </div>
    </>
  );
};
export default EnterOTP;
