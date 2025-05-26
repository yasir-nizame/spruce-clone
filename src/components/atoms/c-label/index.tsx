import React from "react";
import { Input, Form } from "antd";
import type { FormItemProps, FormProps } from "antd";

interface CLabelInputProps extends FormProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  size?: "small" | "middle" | "large";
  rules?: FormItemProps["rules"];
}

const CLabelInput: React.FC<CLabelInputProps> = ({
  label,
  name,
  placeholder,
  type,
  size = "large",
  required = false,
  rules = [],
}) => {
  const defaultRules: FormItemProps["rules"] = required
    ? [{ required: true, message: `Please enter ${label.toLowerCase()}!` }]
    : [];

  const combinedRules = [...defaultRules, ...rules];

  return (
    <Form.Item label={label} name={name} rules={combinedRules}>
      <Input
        className="px-[10px] rounded-lg w-full !font-medium"
        placeholder={placeholder}
        type={type}
        size={size}
      />
    </Form.Item>
  );
};

export default CLabelInput;
