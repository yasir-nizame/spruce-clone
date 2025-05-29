import DashboardLayout from "../../../../components/layouts/dashboard-layout";
import CardDetails from "./card-details";
import CreditCard from "./credit-card";

const PaymentMethod = () => {
  return (
    <div>
      <DashboardLayout>
        <CreditCard />
        <CardDetails />
      </DashboardLayout>
    </div>
  );
};

export default PaymentMethod;
