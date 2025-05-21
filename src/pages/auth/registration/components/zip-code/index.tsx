import { Form } from "antd";
import AuthLayout from "../../../../../components/layouts/auth-layout";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import CLabelInput from "../../../../../components/atoms/c-label";
// import Csteps from "../../../../../components/atoms/c-steps";
const handleClick = () => {
  console.log("Login Clicked");
};

const ZipCode = () => {
  return (
    <>
      <AuthLayout>
        {/* <Csteps></Csteps> */}
        <Cheading
          text="Registration"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />

        <Form layout={"vertical"}>
          <CLabelInput
            label="Enter Zip Code"
            name="Zip Code"
            placeholder="113345"
            type="text"
          />

          <Cbutton
            label="Next"
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
export default ZipCode;
