import { useState } from "react";
import DashboardLayout from "../../../../components/layouts/dashboard-layout";
import ChangePassword from "./components/change-password";
import ProfileCard from "./components/profile-card";
import ProfileTabs from "./components/profile-tabs";
import SecurityCard from "./components/security";

const MyProfile = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <DashboardLayout>
      <ProfileTabs />

      <div className="mb-4">
        <ProfileCard />
      </div>

      {!showChangePassword ? (
        <div className="mb-4">
          <SecurityCard onChangePassword={() => setShowChangePassword(true)} />
        </div>
      ) : (
        <ChangePassword onBack={() => setShowChangePassword(false)} />
      )}
    </DashboardLayout>
  );
};

export default MyProfile;
