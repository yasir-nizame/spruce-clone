import { BrowserRouter, Routes, Route } from "react-router";
import SignIn from "./pages/auth/sign-in";
import Home from "./pages/shared/home";
import SendOTP from "./pages/auth/send-OTP";
import ForgotPassword from "./pages/auth/forgot-password";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/send-otp" element={<SendOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
