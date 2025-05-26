import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray relative px-4">
      <div className="w-full max-w-[767px] bg-white rounded-[10px] pt-[60px] pb-[40px]">
        <div className="w-[575px] mx-auto">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              className="w-[186px] h-[49px] mb-8"
              alt="Logo"
            />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
