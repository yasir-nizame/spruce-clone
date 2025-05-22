import React, { useState } from "react";
import { Button, message, Steps } from "antd";
import ZipCode from "./components/zip-code";
import PersonalDetails from "./components/personal-details";
import PropertyDetails from "./components/property-details";

const steps = [
  {
    title: "",
    content: <ZipCode />,
  },
  {
    title: "",
    content: <PersonalDetails />,
  },
  {
    title: "",
    content: <PropertyDetails />,
  },
];

const SignUp: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <>
      <Steps current={current} items={items} onChange={setCurrent} />
      <div>{steps[current].content}</div>
      <div>
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export default SignUp;
