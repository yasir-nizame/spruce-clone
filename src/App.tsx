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

          {/* Shared */}
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
