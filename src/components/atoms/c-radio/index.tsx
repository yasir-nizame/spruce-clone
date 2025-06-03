import { Radio } from "antd";
import type { RadioGroupProps } from "antd/es/radio";

interface CRadioProps extends RadioGroupProps {
  text?: string;
  className?: string; 
  options: { value: string | number; label: string }[]; 
}

const Cradiobutton: React.FC<CRadioProps> = ({
  text,
  options,
  className,
  ...rest
}) => (
  <div className={className}>
    {text && <label className="radio-group-label">{text}</label>}
    <Radio.Group options={options} {...rest} />
  </div>
);

export default Cradiobutton;
