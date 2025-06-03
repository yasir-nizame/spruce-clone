import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import { useSearchParams } from "react-router";
import MyProfile from "../..";
import CouponsPage from "../../../coupons";
import PaymentMethod from "../../../payment-method";
import PropertyAccessInformation from "../../../property";

const ProfileTabs: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "1";

  const handleTabChange = (key: string) => {
    setSearchParams({ tab: key });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "My Profile",
      style: { fontSize: "20px" },
      className: "!text-xl",
      children: <MyProfile />,
    },
    {
      key: "2",
      label: "Coupons",
      children: <CouponsPage />,
    },
    {
      key: "3",
      label: "Payment Method",
      children: <PaymentMethod />,
    },
    {
      key: "4",
      label: "Property and Access Information",
      children: <PropertyAccessInformation />,
    },
  ];

  return (
    <Tabs activeKey={currentTab} onChange={handleTabChange} items={items} />
  );
};

export default ProfileTabs;
