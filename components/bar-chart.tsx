"use client";

import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Interface Types
interface BarChartProps {}

interface DataSets {
  label: string;
  data: number[];
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
}
interface ChartData {
  labels: string[];
  datasets: DataSets[];
}

const BarChartComponent: React.FC<BarChartProps> = () => {
  const [chartData, setChartData] = useState<ChartData>({
    datasets: [],
    labels: [],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"],
      datasets: [
        {
          label: "Pengunjung",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
        {
          label: "Pengunjung",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Grafik Pengunjung",
        }
      },
      responsive: true,
      maintainAspectRatio: false
    });
  }, []);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChartComponent;
