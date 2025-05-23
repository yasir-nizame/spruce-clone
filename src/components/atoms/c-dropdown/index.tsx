import React from "react";
import { Form, message, Select } from "antd";

const { Option } = Select;

export interface CdropdownItem {
  label: string;
  value: string;
}

interface CdropdownProps {
  name: string;
  size?: "small" | "middle" | "large";
  label?: string;
  placeholder?: string;
  items: CdropdownItem[];
  rules?: any;
  disabled?: boolean;
}

const Cdropdown: React.FC<CdropdownProps> = ({
  name,
  size = "large",
  label,
  placeholder = "Select an option",
  items,
  rules,
  disabled = false,
}) => {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select placeholder={placeholder} disabled={disabled} size={size}>
        {items.map((item) => (
          <Option key={item.label} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default Cdropdown;
