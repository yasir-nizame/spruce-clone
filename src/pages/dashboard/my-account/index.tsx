import DashboardLayout from "../../../components/layouts/dashboard-layout";
import ProfileTabs from "./my-profile/components/profile-tabs";

const MyAccount = () => {
  return (
    <>
      <DashboardLayout>
        <ProfileTabs />
      </DashboardLayout>
    </>
  );
};

export default MyAccount;
