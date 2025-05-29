import {
  CalendarDays,
  ChartPie,
  LogOut,
  MessageSquareMore,
  User,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import clsx from "clsx";

const menuItems = [
  { label: "Home", key: "0", icon: <ChartPie />, path: "/dashboard" },
  { label: "My Booking", key: "1", icon: <CalendarDays />, path: "/booking" },
  { label: "Chat", key: "2", icon: <MessageSquareMore />, path: "/chat" },
  { label: "My Account", key: "3", icon: <User />, path: "/account" },
];

const SidebarMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

  return (
    <div className="flex flex-col h-full px-4 py-6 bg-white">
      <div>
        <img
          src="/logo.png"
          alt="logo"
          className="w-[90px] h-[24px] mx-auto mb-6"
        />

        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li
              key={item.key}
              onClick={() => handleNavigate(item.path)}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md hover:bg-gray-100",
                location.pathname === item.path && "bg-gray-100"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <li
          onClick={handleLogout}
          className="!mt-auto flex items-center gap-3 px-4 py-2 cursor-pointer rounded-md hover:bg-red-100 text-red-600 list-none"
        >
          <LogOut />
          <span>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default SidebarMenu;
