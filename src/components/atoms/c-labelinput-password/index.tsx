import React from "react";
import { Input, Form } from "antd";
import type { FormProps } from "antd";

interface CLabelInputProps extends FormProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  size?: "small" | "middle" | "large";
}

const CLabelInputPassword: React.FC<CLabelInputProps> = ({
  label,
  name,
  placeholder,
  type,
  size = "large",
}) => {
  return (
    <Form.Item label={label} name={name}>
      <Input.Password placeholder={placeholder} type={type} size={size} />
    </Form.Item>
  );
};

export default CLabelInputPassword;
