import React, { useState } from "react";
import { Form, Steps } from "antd";
import ZipCode from "./components/zip-code";
import PersonalDetails from "./components/personal-details";
import PropertyDetails from "./components/property-details";
import AuthLayout from "../../../components/layouts/auth-layout";
import EnterOTP from "../enter-otp";

const SignUp: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showOtp, setShowOtp] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const [collectedData, setCollectedData] = useState<Record<string, any>>({});

  const next = () => setCurrent((prev) => prev + 1);

  const steps = [
    { title: " ", content: <ZipCode next={next} /> },
    { title: " ", content: <PersonalDetails next={() => setShowOtp(true)} /> },
    { title: " ", content: <PropertyDetails /> },
  ];

  const handleFormFinish = (name: string, { values }: any) => {
    console.log("name, ", name);
    console.log("values, ", values);
    setCollectedData((prevData) => {
      const newData = { ...prevData, ...values };
      console.log("final vals collected", newData);
      return newData;
    });
  };

  const handleOtpSuccess = () => {
    setShowOtp(false);
    setIsOtpVerified(true);
    next();
  };

  const handleStepChange = (step: number) => {
    if (step <= current) {
      setCurrent(step);
      setShowOtp(false);
    }
  };

  const renderStepContent = (index: number) => {
    const step = steps[index];
    switch (index) {
      case 0:
        return <ZipCode next={next} initialValues={collectedData} />;
      case 1:
        return (
          <PersonalDetails
            next={() => (isOtpVerified ? next() : setShowOtp(true))}
            initialValues={collectedData}
          />
        );
      case 2:
        return <PropertyDetails initialValues={collectedData} />;
      default:
        return step.content;
    }
  };

  return (
    <AuthLayout>
      <Steps
        current={current}
        onChange={handleStepChange}
        className="custom-steps !my-4"
        items={[
          {
            icon: <span className="custom-icon-steps">1</span>,
          },
          {
            icon: <span className="custom-icon-steps">2</span>,
            className: current < 1 ? "*:!cursor-not-allowed disabled" : "",
          },
          {
            icon: <span className="custom-icon-steps">3</span>,
            className: current < 2 ? "*:!cursor-not-allowed disabled" : "",
          },
        ]}
      />

      <Form.Provider onFormFinish={handleFormFinish}>
        {showOtp && !isOtpVerified ? (
          <EnterOTP onSuccess={handleOtpSuccess} />
        ) : (
          renderStepContent(current)
        )}
      </Form.Provider>
    </AuthLayout>
  );
};

export default SignUp;
