import React, { useState, type ReactNode } from "react";
import {
  CalendarDays,
  ChartPie,
  LogOut,
  MessageSquareMore,
  User,
} from "lucide-react";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Cheader from "../../molecules/c-header";
import DashboardContentLayout from "../../screens/my-profile";

const { Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
interface DashboardLayoutProps {
  children: ReactNode;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  className?: string
): MenuItem {
  return {
    key,
    icon,
    label,
    className,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "0", <ChartPie />),
  getItem("My Booking", "1", <CalendarDays />),
  getItem("Chat", "2", <MessageSquareMore />),
  getItem("My Account", "3", <User />),
  getItem("Logout", "4", <LogOut />, "!mt-auto "),
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="">
      <div className="!bg-white">
        <Sider
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="!bg-white !min-w-[322px] !flex !flex-col"
        >
          <img
            src="/logo.png"
            alt="logo"
            className="w-[90px] h-[24px] mx-auto my-4"
          />
          <div className="flex-1 flex flex-col">
            <Menu
              theme="light"
              defaultSelectedKeys={["0"]}
              mode="inline"
              className="!bg-white !flex-1 !flex !flex-col"
              items={items}
            />
          </div>
        </Sider>
      </div>
      <Layout className="">
        <Cheader />
        <DashboardContentLayout>
          <Content>{children}</Content>
        </DashboardContentLayout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
