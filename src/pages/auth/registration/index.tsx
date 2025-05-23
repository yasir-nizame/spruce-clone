import React, { useState } from "react";
import { Button, Form, Steps } from "antd";
import ZipCode from "./components/zip-code";
import PersonalDetails from "./components/personal-details";
import PropertyDetails from "./components/property-details";
import AuthLayout from "../../../components/layouts/auth-layout";

const SignUp: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [collectedData, setCollectedData] = useState<Record<string, any>>({});

  const next = () => setCurrent((prev) => prev + 1);
  const prev = () => setCurrent((prev) => prev - 1);
  const steps = [
    { title: " ", content: <ZipCode next={next} /> },
    { title: " ", content: <PersonalDetails next={next} /> },
    { title: " ", content: <PropertyDetails /> },
  ];

  const handleFormFinish = (name: string, { values }: any) => {
    console.log("name, ", name);
    console.log("values, ", values);
    setCollectedData((prevData) => {
      const newData = { ...prevData, ...values };
      console.log("final vals collected", newData);
    });
  };

  return (
    <AuthLayout>
      <Steps
        current={current}
        items={steps.map((s) => ({ title: s.title }))}
        className="mb-8"
      />

      <Form.Provider onFormFinish={handleFormFinish}>
        {steps[current].content}
        <div className="mt-4 flex justify-between">
          {current > 0 && <Button onClick={prev}>Previous</Button>}
        </div>
      </Form.Provider>
    </AuthLayout>
  );
};

export default SignUp;
