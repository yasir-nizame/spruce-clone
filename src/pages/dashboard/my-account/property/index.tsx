import { Col, Form, Row } from "antd";
import { useState } from "react";
import CLabelInput from "../../../../components/atoms/c-label";
import Cbutton from "../../../../components/atoms/c-button";
import DashboardLayout from "../../../../components/layouts/dashboard-layout";
import Cheading from "../../../../components/atoms/c-heading";

const PropertyAccessInformation = () => {
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
    <DashboardLayout>
      <div className="bg-white p-4">
        <div>
          <Form
            layout="vertical"
            form={form}
            //   initialValues={{
            //     name: "John Marvin",
            //     email: "jennings@example.com",
            //     phone: "+1 (470) 918 8500",
            //   }}
          >
            <Cheading text="Property and Access Information" className="" />

            <Row className="p-1" gutter={12}>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Property Name"
                  name="Property Name"
                  placeholder="Upside Avenue"
                  type="text"
                  required
                  disabled={!isEditing}
                />

                <CLabelInput
                  label="Floor Plan"
                  name="Floor Plan"
                  placeholder="2 Bed, 2 Bath"
                  type="text"
                  required
                  disabled={!isEditing}
                />
              </Col>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Building No (Optional)"
                  name="BuildingNo"
                  placeholder="4578"
                  type="text"
                  disabled={!isEditing}
                />
                <CLabelInput
                  label="Unit No"
                  name="UnitNo"
                  placeholder="1234"
                  type="text"
                  disabled={!isEditing}
                />
              </Col>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Sq Ft (Optional)"
                  name="Sq Ft (Optional)"
                  placeholder="630 Sq Ft"
                  type="text"
                  disabled={!isEditing}
                />
              </Col>
            </Row>

            <Cheading text="Home Access" className="" />

            <Row className="p-1" gutter={12}>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Door Code"
                  name="Door Code"
                  placeholder="How does pro enter your home?"
                  type="text"
                  disabled={!isEditing}
                />
                <CLabelInput
                  label="Code"
                  name="Code"
                  placeholder="Ghfs"
                  type="text"
                  disabled={!isEditing}
                />
              </Col>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Details (Optional))"
                  name="Details (Optional)"
                  placeholder="How does pro find and enter the code?"
                  type="text"
                  disabled={!isEditing}
                />
              </Col>
            </Row>
            <Cheading text="Pet Details" className="" />
            <p>Do you have Pets?</p>
          </Form>
        </div>
        <div className="w-1/8 text-lg font-semibold flex justify-end mt-4">
          <Cbutton
            label={isEditing ? "Update" : "Edit"}
            className="!font-semibold !py-5 h-[50px]"
            onClick={handleEditClick}
          />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PropertyAccessInformation;
