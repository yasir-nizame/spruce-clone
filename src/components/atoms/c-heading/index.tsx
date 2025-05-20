import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface CheadingProps {
  text: string;
  className: string;
}

const Cheading: React.FC<CheadingProps> = ({ text, className, ...rest }) => {
  return (
    <Title level={5} className={className} {...rest}>
      {text}
    </Title>
  );
};

export default Cheading;
