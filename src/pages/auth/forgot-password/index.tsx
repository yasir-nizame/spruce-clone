import { Form, message } from "antd";
import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import CLabelInputPassword from "../../../components/atoms/c-labelinput-password";
import AuthLayout from "../../../components/layouts/auth-layout";
import { useNavigate } from "react-router";

const ForgotPassword = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleClick = async () => {
    try {
      const values = await form.validateFields();
      const { password, confirmpassword } = values;

      if (password === confirmpassword) {
        console.log("Passwords match, navigating to login");
        navigate("/sign-in");
      } else {
        messageApi.error("Passwords do not match");
      }
    } catch (error) {
      console.error("Form validation failed:", error);
      messageApi.error("Please fill in all required fields correctly");
    }
  };

  return (
    <>
      {contextHolder}
      <AuthLayout>
        <div></div>
        <Cheading
          text="Forgot Password"
          className="!text-primary !font-bold !text-[28px] !mb-0 custom-heading"
        />
        <p className="font-normal text-base">Enter your new password</p>
        <Form form={form} layout="vertical">
          <div className="my-4">
            <CLabelInputPassword
              label="New Password"
              name="password"
              placeholder="********"
              type="password"
              required
              rules={[
                { required: true, message: "Please enter your new password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            />
            <CLabelInputPassword
              label="Confirm Password"
              name="confirmpassword"
              placeholder="********"
              type="password"
              required
              rules={[
                { required: true, message: "Please confirm your password" },
                { min: 8, message: "Password must be at least 8 characters" },
              ]}
            />
          </div>
          <Cbutton
            label="Submit"
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
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
