// import React from "react";
// import { Form, message, Select } from "antd";

// const { Option } = Select;

// export interface CdropdownItem {
//   label: string;
//   value: string;
// }

// interface CdropdownProps {
//   name: string;
//   size?: "small" | "middle" | "large";
//   label?: string;
//   placeholder?: string;
//   items: CdropdownItem[];
//   rules?: any;
//   disabled?: boolean;
// }

// const Cdropdown: React.FC<CdropdownProps> = ({
//   name,
//   size = "large",
//   label,
//   placeholder = "Select an option",
//   items,
//   rules,
//   disabled = false,
// }) => {
//   return (
//     <Form.Item name={name} label={label} rules={rules}>
//       <Select placeholder={placeholder} disabled={disabled} size={size}>
//         {items.map((item) => (
//           <Option key={item.label} value={item.value}>
//             {item.label}
//           </Option>
//         ))}
//       </Select>
//     </Form.Item>
//   );
// };

// export default Cdropdown;

import React from "react";
import { Form, Select } from "antd";
import type { FormItemProps } from "antd";

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
  rules?: FormItemProps["rules"];
  disabled?: boolean;
  required?: boolean;
}

const Cdropdown: React.FC<CdropdownProps> = ({
  name,
  size = "large",
  label,
  placeholder = "Select an option",
  items,
  rules = [],
  disabled = false,
  required = false,
}) => {
  // Default rule for required field if `required` is true
  const defaultRules: FormItemProps["rules"] = required
    ? [
        {
          required: true,
          message: label
            ? `Please select ${label.toLowerCase()}!`
            : "Please select an option!",
        },
      ]
    : [];

  // Combine default rules with any custom rules passed via props
  const combinedRules = [...defaultRules, ...rules];

  return (
    <Form.Item name={name} label={label} rules={combinedRules}>
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