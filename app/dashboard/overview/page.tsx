"use client";

import BarChartComponent from "@/components/bar-chart";
import RecentOrdersComponent from "@/components/recent-orders";
import TopCardComponent from "@/components/top-card";

export default function OverviewPage() {
  return (
    <div>
      <TopCardComponent />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChartComponent />
        <RecentOrdersComponent />
      </div>
    </div>
  );
}
