import { BarChart, DoughnutChart, LineChart } from "@/components/Home/Charts";
import Table from "@/components/Table/Table";
import Card from "@/components/partial/Card";
import DashboardLayout from "@/layouts/DashbaordLayout";
import Image from "next/image";

export default function Home() {
  return (
    <DashboardLayout>
      <div className="p-3 grid grid-cols-3 gap-4 items-center justify-center">
        <Card
          className="bg-[#FFFFFF0F] rounded-[15px]"
          style={{
            borderImage: "linear-gradient(90deg, #FFC1071A 0%, #FFC1071A 100%)",
            border: "1px solid #FFFFFF1A",
          }}
        >
          <>
            <DoughnutChart />
          </>
        </Card>
        <Card
          className="bg-[#FFFFFF0F] h-full rounded-[15px]"
          style={{
            borderImageSource:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(239, 239, 239, 0.0232) 100%)",

            border: "1px solid #FFFFFF1A",
          }}
        >
          <>
            <BarChart />
          </>
        </Card>

        <Card
          className="bg-[#FFFFFF0F] h-full rounded-[15px]"
          style={{
            borderImageSource:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(239, 239, 239, 0.0232) 100%)",

            border: "1px solid #FFFFFF1A",
          }}
        >
          <></>
        </Card>

        <div className="col-span-2">
        <Card
          className="bg-[#FFFFFF0F] h-full rounded-[15px]"
          style={{
            borderImageSource:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, rgba(239, 239, 239, 0.0232) 100%)",

            border: "1px solid #FFFFFF1A",
          }}
        >
          <>
            <LineChart />
          </>
        </Card>

        </div>
      </div>
    </DashboardLayout>
  );
}
