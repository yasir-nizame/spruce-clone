import React, { useState, type ReactNode } from "react";
import {
  Bell,
  CalendarDays,
  ChartPie,
  LogOut,
  MessageSquareMore,
  User,
} from "lucide-react";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import Cheader from "../../molecules/c-header";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];
interface DashboardLayoutProps {
  children: ReactNode;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home", "0", <ChartPie />),
  getItem("My Booking", "1", <CalendarDays />),
  getItem("Chat", "2", <MessageSquareMore />),
  getItem("My Account", "3", <User />),
  getItem("Logout", "4", <LogOut />),
  //   getItem("Team", "sub2", <TeamOutlined />, [
  //     getItem("Team 1", "6"),
  //     getItem("Team 2", "8"),
  //   ]),
];

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <div className="!bg-white">
        <Sider
          //   collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className="!bg-white"
        >
          <img
            src="/logo.png"
            alt=""
            className="w-[90px] h-[24px]  mx-auto my-4"
          />
          <Menu
            theme="light"
            defaultSelectedKeys={["0"]}
            mode="inline"
            items={items}
            className="!bg-white"
          />
        </Sider>
      </div>
      <Layout>
        <Cheader />

        <Content className="">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
