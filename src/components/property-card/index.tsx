import { Card } from "antd";

interface PropertyCardProps {
  title: string;
  content: string;
  className?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  content,
  className,
}) => {
  return (
    <Card title={title} className={className} >
      {content}
    </Card>
  );
};

export default PropertyCard;
