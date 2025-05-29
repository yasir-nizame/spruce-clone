import { Form, Switch } from "antd";
import CLabelInput from "../../../../../components/atoms/c-label";
import Cbutton from "../../../../../components/atoms/c-button";

const CardDetails = () => {
  const [form] = Form.useForm();

  const handleAddCard = () => {
    form.validateFields().then((values) => {
      console.log(" Values:", values);
    });
  };

  return (
    <div className="bg-white p-4">
      <div>
        <Form layout="vertical" form={form}>
          <CLabelInput
            label="Card Number"
            name="CardNumber"
            placeholder="xxxx xxxx xxxx xxxx"
            type="text"
            required
          />

          <CLabelInput
            label="Expiry"
            name="Expiry"
            placeholder="MM/YYYY"
            type="text"
            required
          />
          <CLabelInput
            label="CVV"
            name="Cvv"
            placeholder=""
            type="text"
            required
            maxLength={16}
          />
          <CLabelInput label="Zip Code" name="zipCode" type="email" required />
        </Form>
      </div>
      <div className="flex justify-between my-4">
        <p>Set this card as default</p>
        <Switch />
      </div>
      <div className="w-1/8 text-lg font-semibold !flex !justify-end">
        <Cbutton
          label="Add Card"
          className="!font-semibold !py-5 h-[50px]"
          onClick={handleAddCard}
        />
      </div>
    </div>
  );
};

export default CardDetails;
