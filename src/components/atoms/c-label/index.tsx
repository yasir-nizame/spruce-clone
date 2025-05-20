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

const CLabelInput: React.FC<CLabelInputProps> = ({
  label,
  name,
  placeholder,
  type,
  size = "large",
}) => {
  return (
    <Form.Item label={label} name={name}>
      <Input
        className="px-[10px] rounded-lg w-full !font-medium"
        placeholder={placeholder}
        type={type}
        size={size}
      ></Input>
    </Form.Item>
  );
};

export default CLabelInput;
