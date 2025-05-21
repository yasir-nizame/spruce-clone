import { Form } from "antd";
import AuthLayout from "../../../../../components/layouts/auth-layout";
import CLabelInput from "../../../../../components/atoms/c-label";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import Cdropdown from "../../../../../components/atoms/c-dropdown";

const PropertyDetails = () => {
  return (
    <>
      <AuthLayout>
        <Cheading
          text="Property Details"
          className="!text-primary !font-bold !text-[28px] !mb-0"
        />
        <Form layout={"vertical"}>
          <div className="my-4 ">
            {/* <CLabelInput
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
            /> */}
            <Cdropdown />
            
          </div>
          <Cbutton label="Register" type="primary" size="large" className=""/>
        </Form>
        <p className="text-center">Back to Login</p>
      </AuthLayout>
    </>
  );
};
export default PropertyDetails;
