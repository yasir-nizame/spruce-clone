import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/shared/home";
import SendOTP from "./pages/auth/send-OTP";
import ForgotPassword from "./pages/auth/forgot-password";
import EnterOTP from "./pages/auth/enter-otp";
import SelectProperty from "./pages/auth/registration/components/select-property";

import ServiceUnavailable from "./pages/auth/registration/components/service-unavailable";
// import DeleteMe from "./pages/delete";
import SignUp from "./pages/auth/registration";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/select-property" element={<SelectProperty />} />
          <Route path="/send-otp" element={<SendOTP />} />
          <Route path="/enter-otp" element={<EnterOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/service-unavailable" element={<ServiceUnavailable />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
