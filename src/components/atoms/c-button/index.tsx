import React from "react";
import { Button } from "antd";
import type { ButtonProps } from "antd";

interface CbuttonProps extends ButtonProps {
  label: string;
  className?: string;
  onClick?: () => void;
  type?: "primary" | "dashed" | "link" | "text" | "default";
}

const Cbutton: React.FC<CbuttonProps> = ({
  label,
  onClick,
  type = "default",
  className,
  ...rest
}) => {
  return (
    <Button
      className={`px-[10px] !bg-primary rounded-lg  w-full`}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default Cbutton;
