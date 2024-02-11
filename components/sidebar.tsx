"use client";

import Link from "next/link";
import React from "react";
import { RxSketchLogo } from "react-icons/rx";
import {
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineTruck,
  HiOutlineCog,
  HiOutlineCollection,
  HiOutlineViewGrid,
} from "react-icons/hi";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: React.ReactNode;
}

const menuNavigation = [
  {
    id: "menu-1",
    name: "Overview",
    link: "/dashboard/overview",
    icon: HiOutlineViewGrid,
  },
  {
    id: "menu-2",
    name: "Categories",
    link: "/dashboard/categories",
    icon: HiOutlineCollection,
  },
  {
    id: "menu-3",
    name: "Products",
    link: "/dashboard/products",
    icon: HiOutlineShoppingCart,
  },
  {
    id: "menu-4",
    name: "Users",
    link: "/dashboard/users",
    icon: HiOutlineUsers,
  },
  {
    id: "menu-5",
    name: "Orders",
    link: "/dashboard/orders",
    icon: HiOutlineTruck,
  },
  {
    id: "menu-6",
    name: "Settings",
    link: "/dashboard/settings",
    icon: HiOutlineCog,
  },
];

const SideBarComponent: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className="fixed w-20 h-screen p-4 bg-base-100 shadow-lg flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {/* Logo (Dashboard) */}
          <Link href="/dashboard/overview">
            <div className="bg-primary p-3 text-white rounded-lg inline-block">
              <RxSketchLogo size={20} />
            </div>
          </Link>
          <span className="divider"></span>
          {/* Menu - Start */}
          {menuNavigation.map((item) => (
            <Link
              href={item.link}
              key={item.id}
              className={`${
                pathname === item.link
                  ? "bg-neutral text-white"
                  : "hover:bg-base-200 text-neutral"
              } cursor-pointer my-4 p-3 rounded-lg inline-block tooltip`}
              data-tip={item.name}
            >
              <item.icon size={20} />
            </Link>
          ))}
          {/* Menu - End */}
        </div>
      </div>
      <main className="ml-20 w-full">{children}</main>
    </div>
  );
};

export default SideBarComponent;
