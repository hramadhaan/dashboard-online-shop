"use client";
import { data } from "@/data/data";
import React from "react";
import { FaShoppingBag } from "react-icons/fa";

interface RecentOrdersProps {}

const RecentOrdersComponent: React.FC<RecentOrdersProps> = () => {
  return (
    <div className="w-full col-span-1 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white overflow-scroll">
      <h1>Recent Orders</h1>
      <ul>
        {data.map((item, index) => {
          return (
            <li
              key={index}
              className="bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 flex items-center cursor-pointer"
            >
              <div className="bg-purple-100 rounded-lg p-3">
                <FaShoppingBag className="text-purple-800" />
              </div>
              <div className="pl-4">
                <p className="text-gray-800 font-bold">{item.total}</p>
                <p className="text-gray-400 text-sm">{item.name.first}</p>
              </div>
              <p className="lg:flex md:hidden absolute right-6">{item.date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RecentOrdersComponent;
