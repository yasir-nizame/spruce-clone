import { Col, Form, message, Row } from "antd";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import Cdropdown, {
  type CdropdownItem,
} from "../../../../../components/atoms/c-dropdown";
import CLabelInput from "../../../../../components/atoms/c-label";
import { Navigate, useNavigate } from "react-router";
import { useEffect, useState } from "react";

const properties: CdropdownItem[] = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
  { label: "Option C", value: "c" },
];

interface PropertyDetailsProps {
  initialValues?: Record<string, any>;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({ initialValues }) => {
  const [form] = Form.useForm();
  const Navigate = useNavigate();
  const [dropdownEnabled, setDropdownEnabled] = useState(false);

  const unitValue = Form.useWatch("unit", form);

  useEffect(() => {
    form.setFieldsValue(initialValues || {});
  }, [initialValues, form]);

  useEffect(() => {
    setDropdownEnabled(!!unitValue);
  }, [unitValue]);
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
        onFinish={() => {
          message.success("Registration done successfully!");
          form.resetFields();
          Navigate("/");
        }}
      >
        <div className="my-4">
          <Cdropdown
            name="propertyName"
            label="Property Name"
            items={properties}
            size="large"
            placeholder="Upside Avenue"
            disabled={!dropdownEnabled}
            required
          />

          <Cdropdown
            name="floorPlan"
            label="Floor Plan"
            items={properties}
            size="large"
            placeholder="2 Bed, 2 Bath"
            disabled={!dropdownEnabled}
            required
          />
        </div>
        {/* <div className="grid grid-cols-2 gap-x-4 gap-y-4"> */}
        <Row justify="space-between" align="middle" className="p-1" gutter={12}>
          <Col md={12} xs={24}>
            <CLabelInput
              label="Building No (Optional)"
              name="buildingNo"
              placeholder="1234"
              type="text"
              // className="!w-1/2"
            />
          </Col>
          <Col md={12} xs={24}>
            <CLabelInput
              label="Unit Number"
              name="unit"
              placeholder="893742"
              type="number"
              // className="!w-1/2"
              required
            />
          </Col>
        </Row>
        {/* </div> */}

        <Cdropdown
          name="sqft"
          label="Sq Ft (Optional)"
          items={properties}
          size="large"
          placeholder="630 Sq Ft"
          disabled={!dropdownEnabled}
        />

        <Cbutton
          label="Register"
          type="primary"
          size="large"
          className="mt-4"
          onClick={() => form.submit()}
        />
      </Form>
      <p
        className="text-center !mt-[40px]"
        onClick={() => Navigate("/sign-in")}
      >
        Back to Login
      </p>
    </>
  );
};

export default PropertyDetails;
