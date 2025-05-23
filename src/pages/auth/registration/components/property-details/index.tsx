import { Form, message } from "antd";
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
  const [form] = Form.useForm();

  return (
    <>
      <Cheading
        text="Property Details"
        className="!text-primary !font-bold !text-[28px] !mb-0"
      />
      <Form
        form={form}
        name="propertyForm"
        layout="vertical"
        onFinish={() => {}}
      >
        <div className="my-4">
          <Cdropdown
            name="propertyName"
            label="Property Name"
            items={properties}
            size="large"
            placeholder="Upside Avenue"
            rules={{required:true,message:"Please enter property name"}}
          />

          <Cdropdown
            name="floorPlan"
            label="Floor Plan"
            items={properties}
            size="large"
            placeholder="2 Bed, 2 Bath"
          />
        </div>

        <div className="flex justify-between gap-4">
          <CLabelInput
            label="Building No (Optional)"
            name="buildingNo"
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
          name="sqft"
          label="Sq Ft (Optional)"
          items={properties}
          size="large"
          placeholder="630 Sq Ft"
        />

        <Cbutton
          label="Register"
          type="primary"
          size="large"
          className="mt-4"
          onClick={() => form.submit()}
        />
      </Form>
      <p className="text-center !mt-[40px]">Back to Login</p>
    </>
  );
};

export default PropertyDetails;
