import { Form } from "antd";
import AuthLayout from "../../../../../components/layouts/auth-layout";
import CLabelInput from "../../../../../components/atoms/c-label";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";

const PersonalDetails = () => {
  return (
    <>
      <AuthLayout>
        <Cheading
          text="Personal Details"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <Form layout={"vertical"}>
          <div className="my-4 ">
            <CLabelInput
              label="Name"
              name="Name"
              placeholder="Henry Arthur"
              type="text"
            />
            <CLabelInput
              label="Email Address"
              name="email"
              placeholder="henryarthur@example.com"
              type="email"
            />
            <CLabelInput
              label="Phone Number"
              name="Phone Number"
              placeholder="(239) 555-0108"
              type="text"
            />
          </div>
          <Cbutton label="Next" type="primary" size="large" />
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

        <p className="text-center">Back to Login</p>
      </AuthLayout>
    </>
  );
};
export default PersonalDetails;
