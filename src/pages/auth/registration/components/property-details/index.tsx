import { Form } from "antd";
import AuthLayout from "../../../../../components/layouts/auth-layout";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import Cdropdown, {
  type CdropdownItem,
} from "../../../../../components/atoms/c-dropdown";
import CLabelInput from "../../../../../components/atoms/c-label";

const properties: CdropdownItem[] = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

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
            <Cdropdown
              name="dropdown"
              label="Property Name"
              items={properties}
              // rules={[{ required: true, message: "Please select an option" }]}
              size="large"
              placeholder="Upside Avenue"
            />

            <Cdropdown
              name="dropdown"
              label="Floor Plan"
              items={properties}
              // rules={[{ required: true, message: "Please select an option" }]}
              size="large"
              placeholder="2 Bed, 2 Bath"
            />
          </div>
          <div className="flex justify-between">
            <CLabelInput
              label="Building No (Optional)"
              name="Building No"
              placeholder="1234"
              type="text"
              className="!w-full"
            />
            <CLabelInput
              label="Unit Number"
              name="unit"
              placeholder="893742"
              type="number"
              className="!w-full"
            />
          </div>
          <Cdropdown
            name="dropdown"
            label="Sq Ft (Optional)"
            items={properties}
            // rules={[{ required: true, message: "Please select an option" }]}
            size="large"
            placeholder="630 Sq Ft"
          />
          <Cbutton label="Register" type="primary" size="large" className="" />
        </Form>
        <p className="text-center !mt-[40px]">Back to Login</p>
      </AuthLayout>
    </>
  );
};
export default PropertyDetails;
