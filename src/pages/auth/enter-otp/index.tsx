import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import { Form} from "antd";
import { InputOTP } from "antd-input-otp";
import AuthLayout from "../../../components/layouts/auth-layout";
const handleClick = () => {
  console.log("Login Clicked");
};

const EnterOTP = () => {
  const [form] = Form.useForm();

  const handleFinish = (values: number) => {
    console.log(values);
  };

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
        <Form layout={"vertical"} onFinish={handleFinish} form={form}>
          <Form.Item label="OTP" name="otp" className="">
            <div className="">
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
