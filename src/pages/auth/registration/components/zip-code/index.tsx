// import { Form } from "antd";
// import Cheading from "../../../../../components/atoms/c-heading";
// import Cbutton from "../../../../../components/atoms/c-button";
// import CLabelInput from "../../../../../components/atoms/c-label";

// const ZipCode = (nextstep:any) => {

//   return (
//     <>
//       <Cheading
//         text="Registration"
//         className="!text-primary !font-bold !text-[28px] !mb-0"
//       />

//       <Form layout={"vertical"}>
//         <CLabelInput
//           label="Enter Zip Code"
//           name="Zip Code"
//           placeholder="113345"
//           type="text"
//         />

//         <Cbutton
//           label="Next"
//           type="primary"
//           size="large"
//           onClick={nextstep}
//         />
//       </Form>
//       <p className="text-center !my-8">Back to Login</p>
//     </>
//   );
// };
// export default ZipCode;

import { Form } from "antd";
import Cheading from "../../../../../components/atoms/c-heading";
import Cbutton from "../../../../../components/atoms/c-button";
import CLabelInput from "../../../../../components/atoms/c-label";

interface ZipCodeProps {
  next: () => void;
}

const ZipCode: React.FC<ZipCodeProps> = ({ next }) => {
  const [form] = Form.useForm();

  return (
    <>
      <Cheading
        text="Registration"
        className="!text-primary !font-bold !text-[28px] !my-4"
      />
      <Form
        form={form}
        name="zipForm"
        layout="vertical"
        onFinish={() => {
          next();
        }}
      >
        <CLabelInput
          label="Enter Zip Code"
          name="zip"
          placeholder="113345"
          type="text"
          rules={[
            {
              required: true,
              message: "Please enter your zipcode",
            },
          ]}
        />
        <Cbutton
          label="Next"
          type="primary"
          size="large"
          onClick={() => form.submit()}
        />
      </Form>
      <p className="text-center !my-8">Back to Login</p>
    </>
  );
};

export default ZipCode;
