import type { ReactNode } from "react";

interface DashboardContentLayoutProps {
  children: ReactNode;
}

const DashboardContentLayout = ({ children }: DashboardContentLayoutProps) => {
  return (
    <div className="bg-darkgray w-full h-[calc(100vh-64px)] overflow-hidden overflow-y-auto p-4">
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardContentLayout;
