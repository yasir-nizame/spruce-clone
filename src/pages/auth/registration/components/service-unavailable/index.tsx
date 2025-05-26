import { Form } from "antd";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import CLabelInput from "../../../../../components/atoms/c-label";
import { useNavigate } from "react-router";
const handleClick = () => {
  console.log("Login Clicked");
};

const ServiceUnavailable = () => {
  const Navigate = useNavigate();
  return (
    <>
      {/* <Csteps></Csteps> */}
      <Cheading
        text="Registration"
        className="!text-primary !font-bold !text-[28px] !mb-4"
      />

      <Form layout={"vertical"}>
        <CLabelInput
          label="Enter Zip Code"
          name="Zip Code"
          placeholder="113345"
          type="text"
        />
        <div className="flex justify-center my-5">
          <img src="/servicenotfound.png" alt="" />
        </div>
        <div className=" !my-4">
          <p className="!mx-auto w-1/2 text-center">
            Spruce does not currently service
          </p>
          <p className="!mx-auto w-1/2 text-center">
            your area. we can email you when we do.
          </p>
        </div>

        <Cbutton
          label="Notify me when spruce arrives"
          type="primary"
          size="large"
          onClick={handleClick}
        />
      </Form>
      <p className="text-center !my-8" onClick={() => Navigate("/sign-in")}>
        Back to Login
      </p>
    </>
  );
};
export default ServiceUnavailable;
