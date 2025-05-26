import { Form } from "antd";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import CLabelInput from "../../../../../components/atoms/c-label";
import { useEffect } from "react";
import { useNavigate } from "react-router";

interface ZipCodeProps {
  next: () => void;
  initialValues?: Record<string, any>;
}

const ZipCode: React.FC<ZipCodeProps> = ({ next, initialValues }) => {
  const [form] = Form.useForm();
  const Navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue(initialValues || {});
  }, [initialValues, form]);
  return (
    <>
      <Cheading
        text="Registration"
        className="!text-primary !font-bold !text-[28px] !my-4"
      />
      <Form form={form} name="zipForm" layout="vertical" onFinish={next}>
        <CLabelInput
          label="Zip Code"
          name="zip"
          placeholder="113345"
          type="text"
          required
        />
        <Cbutton
          label="Next"
          type="primary"
          size="large"
          onClick={() => form.submit()}
        />
      </Form>
      <p className="text-center !my-8" onClick={() => Navigate("/sign-in")}>
        Back to Login
      </p>
    </>
  );
};

export default ZipCode;
