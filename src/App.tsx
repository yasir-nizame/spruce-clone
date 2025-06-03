import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/shared/home";
import SendOTP from "./pages/auth/send-OTP";
import ForgotPassword from "./pages/auth/forgot-password";
import SelectProperty from "./pages/auth/registration/components/select-property";
import ServiceUnavailable from "./pages/auth/registration/components/service-unavailable";
import SignUp from "./pages/auth/registration";
import { configureAntd } from "../src/utils/antd-config";
import EnterOTP from "./pages/auth/enter-otp";
import DashboardCard from "./pages/dashboard/delete/delete";
import MyProfile from "./pages/dashboard/my-account/my-profile";
import CouponsPage from "./pages/dashboard/my-account/coupons";
import PaymentMethod from "./pages/dashboard/my-account/payment-method";
import PropertyAccessInformation from "./pages/dashboard/my-account/property";
import MyAccount from "./pages/dashboard/my-account";

configureAntd();
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/select-property" element={<SelectProperty />} />
          <Route path="/send-otp" element={<SendOTP />} />
          <Route
            path="/enter-otp"
            element={<EnterOTP onSuccess={() => {}} />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/service-unavailable" element={<ServiceUnavailable />} />

          {/* Dashboard routes */}
          <Route path="/dashboard-card" element={<DashboardCard />} />
          <Route path="/user-profile" element={<MyProfile />} />
          <Route path="/my-account" element={<MyAccount />} />

          {/* Shared */}
          <Route path="/" element={<Home />} />

          {/* test */}
          <Route path="/coupons" element={<CouponsPage />} />
          <Route path="/payment-method" element={<PaymentMethod />} />
          <Route
            path="/pet-access-info"
            element={<PropertyAccessInformation />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
