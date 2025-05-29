import { Col, Form, Row, message } from "antd";
import Cbutton from "../../../../../../components/atoms/c-button";
import CLabelInputPassword from "../../../../../../components/atoms/c-labelinput-password";
import Cheading from "../../../../../../components/atoms/c-heading";

const ChangePassword = ({ onBack }: { onBack: () => void }) => {
  const [form] = Form.useForm();

  const handleUpdate = async () => {
    try {
      const values = await form.validateFields();
      const { password, confirmPassword } = values;

      if (password !== confirmPassword) {
        message.error("Passwords do not match!");
        return;
      }

      message.success("Password updated successfully!");
      onBack(); 
    } catch (error) {
      console.log("Validation failed:", error);
    }
  };

  return (
    <div className="bg-white p-4">
      <Form layout="vertical" form={form}>
        <Cheading text="Change Password" className="" />

        <div className="w-1/2">
          <CLabelInputPassword
            label="Old Password"
            name="oldPassword"
            placeholder="Click123"
            type="password"
            required
          />
        </div>
        <Row className="p-1" gutter={12}>
          <Col md={12} xs={24}>
            <CLabelInputPassword
              label="Password"
              name="password"
              placeholder="Click123"
              type="password"
              required
            />
          </Col>
          <Col md={12} xs={24}>
            <CLabelInputPassword
              label="Confirm Password"
              name="confirmPassword"
              placeholder="Click123"
              type="password"
              required
            />
          </Col>
        </Row>
      </Form>

      <div className="w-1/8 text-lg font-semibold mt-4">
        <Cbutton
          label="Update"
          className="!font-semibold !py-5 h-[50px]"
          onClick={handleUpdate}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
