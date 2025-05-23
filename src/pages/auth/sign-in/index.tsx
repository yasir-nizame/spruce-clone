import Cbutton from "../../../components/atoms/c-button";
import Cheading from "../../../components/atoms/c-heading";
import CLabelInput from "../../../components/atoms/c-label";
import { Form } from "antd";
import AuthLayout from "../../../components/layouts/auth-layout";
import Ccheckbox from "../../../components/atoms/c-checkbox";
import CLabelInputPassword from "../../../components/atoms/c-labelinput-password";

const handleClick = () => {
  console.log("Login Clicked");
};

const SignIn = () => {
  return (
    <>
      <AuthLayout>
        <div></div>
        <Cheading
          text="Welcome to Spruce"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <p className="font-normal text-base">Login to continue</p>
        <Form
          // name="basic"
          // labelCol={{ span: 3 }}
          // wrapperCol={{ span: 24 }}
          // labelAlign="left"
          layout={"vertical"}
          // style={{ maxWidth: 767 }}
          // initialValues={{ remember: true }}
          // // onFinish={onFinish}
          // // onFinishFailed={onFinishFailed}
          // autoComplete="off"
        >
          <div className="my-4 ">
            <CLabelInput
              label="Email Address"
              name="email"
              placeholder="henryarthur@example.com"
              type="email"
              rules={[
                {
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            />
            <CLabelInputPassword
              label="Password"
              name="password"
              placeholder="********"
              type="password"
            />
          </div>
          <div className="flex justify-between my-6">
            <Ccheckbox text="Remember me" className="!text-base font-medium" />
            <a href="" className="!text-primary font-medium text-base">
              Forget Password
            </a>
          </div>
          <Cbutton
            label="Login"
            type="primary"
            size="large"
            onClick={handleClick}
          />
        </Form>
        <p className="text-center !my-8">Or login with</p>
        <div className="flex justify-center space-x-4 my-8">
          <div className="bg-icons flex justify-center items-center">
            <img
              src="./src/assets/icons/facebook-icon.svg"
              className="w-[39px] h-[39px]"
              alt=""
            />
          </div>
          <div className="bg-icons flex justify-center items-center ">
            <img
              src="./src/assets/icons/google-icon.svg"
              className="w-[39px] h-[39px]"
              alt=""
            />
          </div>

          <div className="bg-icons ">
            <img
              src="./src/assets/icons/apple-icon.svg"
              className="w-[39px] h-[39px]"
              alt=""
            />
          </div>
        </div>

        <p className="text-center">
          Don't have an account?
          <a href="" className="text-primary ml-1">
            Register
          </a>
        </p>
      </AuthLayout>
    </>
  );
};
export default SignIn;
