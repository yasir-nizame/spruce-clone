import { Form } from "antd";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import CLabelInput from "../../../../../components/atoms/c-label";
import PropertyCard from "../../../../../components/property-card";
import { useNavigate } from "react-router";

const SelectProperty = () => {
  const Navigate = useNavigate();
  return (
    <>
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
          required
        />
        <div className="grid gap-y-[15px] my-4">
          <PropertyCard
            title="Upside Avenue"
            content="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            className="rounded-sm"
          />
          <PropertyCard
            title="Downside Avenue"
            content="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            className="rounded-sm"
          />
          <PropertyCard
            title="Regalia Plaza"
            content="1901 Thornridge Cir. Shiloh, Hawaii 81063"
            className="rounded-sm"
          />
        </div>

        <Cbutton label="Next" type="primary" size="large" />
      </Form>
      <p className="text-center !my-8" onClick={() => Navigate("/login")}>
        Back to Login
      </p>
    </>
  );
};
export default SelectProperty;
