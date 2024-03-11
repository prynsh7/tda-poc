"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  PointElement,
  LineElement,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { BsDot } from "react-icons/bs";

import dataNew from "../../data/data.json";
import { stateHouseData } from "@/data";
import { countSublocalities, getAveragePriceByStateAndPropertyType, getBrokersPropertyCOuntWithState, sortAndSliceSublocalities } from "@/util";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);



const colorMap = [
  "rgba(255, 99, 132, 0.9)",
  "rgba(54, 162, 235, 0.9)",
  "rgba(255, 206, 86, 0.9)",
  "rgba(75, 192, 192, 0.9)",
  "rgba(153, 102, 255, 0.9)",
  "rgba(255, 159, 64, 0.9)",
];

const top10Sublocalities = sortAndSliceSublocalities(
  countSublocalities(dataNew)
);



let formattedSublocalities : any = top10Sublocalities.map((item: any, index) => {
  return {
    label: item[0],
    value: item[1],
    color: colorMap[index],
  };
});

const formattedSubs : any  = [...formattedSublocalities.slice(0,5), {
  label: "Others",
  value: dataNew.length - formattedSublocalities.reduce((acc: any, item: any) => acc + item.value, 0),
  color: "rgba(0, 0, 0, 0.6)",
}]

export const doughnutLabels = formattedSubs?.map((item: any) => ({
  label: item.label,
  color: item.color,
}));



export function DoughnutChart({ ...args }) {
  const areaLabels = formattedSubs?.map((item: any) => item.label);

  const dougnutData = {
    labels: areaLabels,
    datasets: [
      {
        label: "# of properties",
        data: formattedSubs.map((item: any) => item.value),
        backgroundColor: formattedSubs.map((item: any) => item.color),
        borderWidth: 6,
        hoverOffset: 2,
      },
    ],
  };

  return (
    <Doughnut
      options={{
        responsive: true,
        aspectRatio: 2,
        plugins: {
          title: {
            display: false,
          },
          legend: {
            display: false,
          },
        },
        cutout: "80%",
      }}
      data={dougnutData}
    />
  );
}

export const options = {
  plugins: {
    title: {
      display: false,
      text: "",
    },
    legend: {
      display: false,
    },
  },
  responsive: true,

  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "black",
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      ticks: {
        color: "#333333",
      },
    },
  },
};

const labels = [
  "New York",
  "Staten Island",
  "Manhattan",
  "Brooklyn",
  "Bronx",
  "Jackson Heights",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: "rgb(101, 101, 223)",
      fill: false,
      borderColor: "rgb(101, 101, 223)",
      tension: 0.1,
    },
    {
      label: "Dataset 2",
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: "rgb(123, 123, 228)",
      fill: false,
      borderColor: "rgb(123, 123, 228)",
      tension: 0.1,
    },
    {
      label: "Dataset 3",
      data: [45, 25, 16, 36, 67, 18, 76],
      backgroundColor: "rgb(151, 151, 234)",
      fill: false,
      borderColor: "rgb(151, 151, 234)",
      tension: 0.1,
    },
  ],
};

export const barLabels = [
  {
    label: "Condo",
    color: "RGB(191, 70, 70)",
  },
  {
    label: "House",
    color: "RGB(211, 101, 101)",
  },
  {
    label: "Townhouse",
    color: "RGB(230, 133, 133)",
  },
];

export function BarChart() {

  const brokerData = getAveragePriceByStateAndPropertyType(dataNew);

  const barData = {
    labels: labels,
    datasets: barLabels.map((item) => {
      return {
        label: item.label,
        data: labels.map((label) => {
          return (
            brokerData[label] &&
            brokerData[label][`${item.label} for sale`]
          );
        }),
        backgroundColor: item.color,
      };
    }),
  };
  return <Bar options={options} data={barData} />;
}

export function ChartLabel({ label, color }: any) {
  return (
    <div className="flex items-center ">
      <BsDot className="text-5xl" color={color} />
      <p className="text-xs text-gray-700">{label}</p>
    </div>
  );
}

export function AreaChart() {
  const areaLabels = [
    "New York",
    "Staten Island",
    "Manhattan",
    "Brooklyn",
    "Bronx",
    "Jackson Heights",
  ];

  const areaData = {
    labels: areaLabels,
    datasets: [
      {
        label: "Condo",
        data: areaLabels.map((item) => {
          return stateHouseData[item]["Condo for sale"];
        }),
        fill: true,
        borderColor: "#E19191",
        backgroundColor: "#E19191",
        tension: 0.3,
      },
      {
        label: "House",
        data: areaLabels.map((item) => {
          return stateHouseData[item]["House for sale"];
        }),
        fill: true,
        borderColor: " #FFBFBF",
        backgroundColor: " #FFBFBF",
        tension: 0.3,
      },
      {
        label: "Town House",
        data: areaLabels.map((item) => {
          return stateHouseData[item]["Townhouse for sale"];
        }),
        fill: true,
        borderColor: "#FFCCCC",
        backgroundColor: "#FFCCCC",
        tension: 0.3,
      },
      // {
      //   label: "Office",
      //   data: areaLabels.map((item) => {
      //     return stateHouseData[item]["Co-op for sale"];
      //   }),
      //   fill: true,
      //   borderColor: "#EDF6F9",
      //   backgroundColor: "#EDF6F9",
      //   tension: 0.3,
      // },
    ],
  };

  return (
    <Line
      options={{
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#fff",
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              color: "#fff",
            },
          },
        },
      }}
      data={areaData}
    />
  );
}
