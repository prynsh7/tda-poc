"use client";

import { ICONS } from "@/assets/icons";
import {
  AreaChart,
  BarChart,
  ChartLabel,
  DoughnutChart,
  barLabels,
  doughnutLabels,
} from "@/components/Home/Charts";
import Table from "@/components/Table/Table";
import Card from "@/components/partial/Card";
import { buildingSalesData } from "@/data";
import DashboardLayout from "@/layouts/DashbaordLayout";
import Image from "next/image";

import data from "../../data/data.json";
import {
  countHouseTypesByLocality,
  countSublocalities,
  sortAndSliceSublocalities,
} from "@/util";

const colorMap = [
  "rgb(170, 62, 62)",
  "rgb(170, 62, 62)",
  "rgb(183, 70, 70)",
  "rgb(196, 78, 78)",
  "rgb(209, 86, 86)",
  "rgb(222, 93, 93)",
  "rgb(235, 101, 101)",
  "rgb(248, 109, 109)",
  "rgb(255, 118, 118)",
  "rgb(255, 132, 132)",
];

const buildingData = [
  {
    bg: "bg-gradient-to-r from-[#D36565] to-red-500",
    icon: ICONS.HOME_1,
    title: "Total Condo",
    value: buildingSalesData.condo,
  },
  {
    bg: "bg-gradient-to-r from-red-500 to-pink-600",
    icon: ICONS.HOME_2,
    title: "Total House",
    value: buildingSalesData.house,
  },
  {
    bg: "bg-gradient-to-r from-pink-600 to-[#BF4646]",
    icon: ICONS.HOME_3,
    title: "Total Town House",
    value: buildingSalesData.townhouse,
  },
  // {
  //   bg: "bg-gradient-to-r from-blue-500 to-[#6565DF]",
  //   icon: ICONS.HOME_4,
  //   title: "Total Office",
  //   value: buildingSalesData.coop,
  // },
];

export default function Home() {
  const filteredData = data.filter(
    (item: any) => item["LOCALITY"] === "New York"
  );

  const getLocalityData = (sublocality: string) => {
    return data.find(
      (item: any) => item["STATE"]?.split(",")[0] === sublocality
    )?.["LOCALITY"];
  };

  const top10Sublocalities = sortAndSliceSublocalities(
    countSublocalities(data)
  );

  return (
    <DashboardLayout>
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-10">
          <p className="text-xl font-[600] text-black">Dashboard</p>
          <div className="flex gap-[10px]">
            <p className="text-sm font-[500] text-gray-700">Dashboard</p>
            <p className="text-sm cursor-pointer font-[500] text-primary">
              / Home
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 h-full col-span-7">
          <div className="grid grid-cols-7 gap-4 items-center justify-center">
            <div className="col-span-5">
              <Card
                className="bg-gradient-to-r from-[#720455] to-[#BF4646]  rounded-[4px] shadow-md"
                style={{
                  borderImage:
                    "linear-gradient(90deg, #6565DF 0%, #6565DF 100%)",
                  border: "1px solid #6565DF",
                }}
              >
                <div className="flex mb-6 justify-between">
                  <p className="font-[600] text-lg text-white-800">
                    Properties
                  </p>
                </div>
                <div className="flex justify-center">
                  <AreaChart />
                </div>
              </Card>
            </div>
            <div className="col-span-2 h-full">
              <div className="grid h-full grid-cols-1 gap-4">
                {buildingData.map((item: any) => {
                  return (
                    <Card className={`${item.bg} p-1 rounded-[15px]`}>
                      <>
                        <div className="flex gap-2  items-center">
                          <div className="w-[30px] flex items-center justify-center bg-[#ffffff50] h-[30px] rounded-full">
                            <item.icon color="#fff" />
                          </div>
                          <h2 className="text-white font-600 text-sm">
                            {item.title}
                          </h2>
                        </div>
                        <p className="text-3xl text-center ">
                          {item.value?.toLocaleString()}
                        </p>
                      </>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 items-center justify-center">
            <div className="col-span-2 h-full">
              <Card
                className="bg-[#FFFFFF] h-full rounded-[15px] shadow-md"
                style={{
                  borderImageSource:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(239, 239, 239, 0.0232) 100%)",

                  border: "1px solid #FFFFFF1A",
                }}
              >
                <>
                  <div className="flex mb-6 justify-between">
                    <p className="font-[600] text-lg text-black">
                      Average Price
                    </p>
                  </div>
                  <BarChart />
                  <div className="flex gap-6 justify-center mt-6">
                    {barLabels?.map((item: any) => {
                      return (
                        <>
                          <ChartLabel label={item.label} color={item.color} />
                        </>
                      );
                    })}
                  </div>
                </>
              </Card>
            </div>

            <div className="col-span-2 shadow-sm">
              <Card
                className="bg-[#FFFFFF] h-full rounded-[15px]"
                style={{
                  borderImageSource:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(239, 239, 239, 0.0232) 100%)",

                  border: "1px solid #FFFFFF1A",
                }}
              >
                <>
                  <div className="flex mb-6 justify-between">
                    <p className="font-[600] text-lg text-black">Properties</p>
                  </div>

                  <div className="relative mx-auto flex items-center justify-center">
                    <DoughnutChart />
                    <div className="absolute flex flex-col translate-x-[-50%] left-[50%] translate-y-[-50%] top-[50%] ">
                      <h2 className="text-black font-[500] text-center text-md">
                        {data.length?.toLocaleString()}
                      </h2>
                      <h2 className="text-gray-600 font-[400] text-center text-xs">
                        Total properties
                      </h2>
                    </div>
                  </div>
                  <div className="flex  flex-wrap justify-center mt-6">
                    {doughnutLabels?.map((item: any) => {
                      return (
                        <>
                          <ChartLabel label={item.label} color={item.color} />
                        </>
                      );
                    })}
                  </div>
                </>
              </Card>
            </div>
          </div>
        </div>

        <div className="col-span-3 h-full">
          <Card className="bg-white shadow-lg max-h-[100%] flex-1 overflow-y-scroll  ">
            <>
              <div className="flex mb-6 justify-between">
                <p className="font-[600] text-lg text-black">
                  Top 10 States With Properties
                </p>
              </div>

              <div className="flex flex-col gap-2">
                {top10Sublocalities.map((item: any, index: any) => {
                  return (
                    <div
                      className={`flex gap-4 items-center justify-between  rounded-[4px] p-[10px] shadow-lg
                  hover:scale-105 transition-all duration-300 cursor-pointer
                  `}
                      style={{
                        backgroundColor: colorMap[index],
                      }}
                    >
                      <div className="flex gap-4 items-center">
                        <div>
                          <h6 className="text-md text-[500] text-white-800">
                            {item[0]}
                          </h6>
                          <p className="text-xs text-white-500">
                            {getLocalityData(item[0])}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-md  text-white-700">
                          {item[1]?.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
