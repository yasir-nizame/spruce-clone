import React from "react";
import { Checkbox } from "antd";
import type { CheckboxProps } from "antd";

interface Cbprops extends CheckboxProps {
  text: string;
}
const onChange: CheckboxProps["onChange"] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const Ccheckbox: React.FC<Cbprops> = ({ text, ...rest }) => (
  <Checkbox onChange={onChange} {...rest}>
    {text}
  </Checkbox>
);

export default Ccheckbox;
