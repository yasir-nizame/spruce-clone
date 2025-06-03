import { useState } from "react";
import ChangePassword from "./components/change-password";
import ProfileCard from "./components/profile-card";
import SecurityCard from "./components/security";

const MyProfile = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <>
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
    </>
  );
};

export default MyProfile;
