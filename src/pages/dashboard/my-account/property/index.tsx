import { Col, Form, Row } from "antd";
import { useState } from "react";
import CLabelInput from "../../../../components/atoms/c-label";
import Cbutton from "../../../../components/atoms/c-button";
import Cheading from "../../../../components/atoms/c-heading";
import Cradiobutton from "../../../../components/atoms/c-radio";

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
    <div className="bg-white p-4">
      <div>
        <Form
          layout="vertical"
          form={form}
          initialValues={{
            propertyName: "Upside Avenue",
            floorPlan: "2 Bed, 2 Bath",
            BuildingNo: "4578",
            unitNo: "1234",
            sqFt: "630 Sq Ft",
          }}
        >
          <Cheading text="Property and Access Information" className="" />

          <Row className="p-1" gutter={12}>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Property Name"
                name="propertyName"
                placeholder="Upside Avenue"
                type="text"
                required
                disabled
              />

              <CLabelInput
                label="Floor Plan"
                name="floorPlan"
                placeholder="2 Bed, 2 Bath"
                type="text"
                required
                disabled
              />
            </Col>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Building No (Optional)"
                name="BuildingNo"
                placeholder="4578"
                type="text"
                disabled
              />
              <CLabelInput
                label="Unit No"
                name="unitNo"
                placeholder="1234"
                type="text"
                disabled
              />
            </Col>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Sq Ft (Optional)"
                name="sqFt"
                placeholder="630 Sq Ft"
                type="text"
                disabled
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
                label="Details (Optional))"
                name="Details (Optional)"
                placeholder="How does pro find and enter the code?"
                type="text"
                disabled={!isEditing}
              />
            </Col>
            <Col md={12} xs={24}>
              <CLabelInput
                label="Code"
                name="Code"
                placeholder="Ghfs"
                type="text"
                disabled={!isEditing}
              />
            </Col>
          </Row>
          <div>
            <Cheading text="Pet Details" className="" />
            <p className="!mt-4">Do you have Pets?</p>
            <div className="my-5 flex">
              <Cradiobutton
                options={[
                  { value: 1, label: "Yes" },
                  { value: 1, label: "No" },
                ]}
                onChange={(e) => console.log("Selected:", e.target.value)}
              />
              {/* <Cradiobutton
                options={[{ value: 1, label: "No" }]}
                onChange={(e) => console.log("Selected:", e.target.value)}
              /> */}
            </div>
            <Row className="p-1" gutter={12}>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="Pets"
                  name="petsType"
                  placeholder="Dogs"
                  type="text"
                />
              </Col>
              <Col md={12} xs={24}>
                <CLabelInput
                  label="How Many"
                  name="petsCount"
                  placeholder="2"
                  type="text"
                />
              </Col>
            </Row>
          </div>
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
  );
};

export default PropertyAccessInformation;
