import { Modal } from "antd";
import { useState } from "react";
import Cbutton from "../../../../../components/atoms/c-button";
import CCreditCard from "../../../../../components/atoms/c-credit-card";
import CardDetails from "../card-details";

const CreditCard = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <div className="bg-white p-4">
        <div className="grid grid-cols-2 gap-4">
          <CCreditCard
            last4Digits="1234"
            isDefault={true}
            onDefaultToggle={() => console.log("Toggle Default")}
            onDelete={() => console.log("Card Deleted")}
            cardType="visa"
          />
          <CCreditCard
            cardType="master"
            last4Digits="1234"
            isDefault={false}
            onDefaultToggle={() => console.log("Toggle Default")}
            onDelete={() => console.log("Card Deleted")}
          />
        </div>
        <div className="!flex !justify-end">
          <Cbutton
            className="!py-5 !w-1/8 !my-4"
            label="Add New"
            onClick={showModal}
          />
        </div>
      </div>
      <Modal
        title="Payment Methods"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <CardDetails />
      </Modal>
    </>
  );
};

export default CreditCard;
