import { Form } from "antd";
import CLabelInput from "../../../../../components/atoms/c-label";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import { useEffect } from "react";
import { useNavigate } from "react-router";

interface PersonalDetailsProps {
  next: () => void;
  initialValues?: Record<string, any>;
}

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  next,
  initialValues,
}) => {
  const [form] = Form.useForm();
  const Navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue(initialValues || {});
  }, [initialValues, form]);
  return (
    <>
      <Cheading
        text="Personal Details"
        className="!text-primary !font-bold !text-[28px] !mb-0"
      />
      <Form form={form} name="personalForm" layout="vertical" onFinish={next}>
        <div className="my-4">
          <CLabelInput
            label="Name"
            name="name"
            placeholder="Henry Arthur"
            type="text"
            required
          />
          <CLabelInput
            label="Email Address"
            name="email"
            placeholder="henryarthur@example.com"
            type="email"
            required
          />
          <CLabelInput
            label="Phone Number"
            name="phone"
            placeholder="(239) 555-0108"
            type="text"
            required
          />
        </div>
        <Cbutton
          label="Next"
          type="primary"
          size="large"
          onClick={() => form.submit()}
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
        <div className="bg-icons flex justify-center items-center">
          <img
            src="./src/assets/icons/google-icon.svg"
            className="w-[39px] h-[39px]"
            alt=""
          />
        </div>
        <div className="bg-icons">
          <img
            src="./src/assets/icons/apple-icon.svg"
            className="w-[39px] h-[39px]"
            alt=""
          />
        </div>
      </div>
      <p className="text-center" onClick={() => Navigate("/sign-in")}>
        Back to Login
      </p>
    </>
  );
};

export default PersonalDetails;
