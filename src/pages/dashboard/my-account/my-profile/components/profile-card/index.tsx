import { useState } from "react";
import { Col, Form, Row } from "antd";
import CLabelInput from "../../../../../../components/atoms/c-label";
import Cbutton from "../../../../../../components/atoms/c-button";
import Cimage from "../../../../../../components/atoms/c-image-rounded";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [form] = Form.useForm();

  const handleEditClick = () => {
    if (isEditing) {
      form.validateFields().then((values) => {
        console.log("Updated Values:", values);
        setIsEditing(false);
      });
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="!my-2">
        <Cimage imageUrl="/logo.png" />
      </div>
      <div>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            name: "John Marvin",
            email: "jennings@example.com",
            phone: "+1 (470) 918 8500",
          }}
        >
          <Row className="p-1" gutter={12}>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Name"
                name="name"
                placeholder="John Marvin"
                type="text"
                required
                disabled={!isEditing}
              />
            </Col>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Email"
                name="email"
                placeholder="jennings@example.com"
                type="email"
                required
                disabled={!isEditing}
              />
            </Col>
          </Row>
          <div className="w-1/2">
            <CLabelInput
              label="Phone Number"
              name="phone"
              placeholder="+1 (470) 918 8500"
              type="text"
              required
              disabled={!isEditing}
            />
          </div>
        </Form>
      </div>
      <div className="w-1/8 text-lg font-semibold ">
        <Cbutton
          label={isEditing ? "Save" : "Edit"}
          className="!font-semibold !py-5 h-[50px]"
          onClick={handleEditClick}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
