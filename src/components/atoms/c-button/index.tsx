import React from "react";
import { Button } from "antd";
import type { ButtonProps } from "antd";
import { cn } from "../../../utils/tailwindhelper/tailwindhelper";

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
    // className={cn(className)
    <Button
      className={cn(
        className,
        `px-[10px] !bg-primary rounded-lg w-full !text-white`
      )}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {label}
    </Button>
  );
};

export default Cbutton;
