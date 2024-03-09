"use client";

import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Topbar from "../components/partial/Topbar";
import { ICONS } from "../assets/icons";
import type { MenuProps } from "antd";

type Props = {
  children?: React.ReactNode;
};
const DashboardLayout = (props: Props) => {
  const [selectedKey, setSelectedKey] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const [authState, setAuthState] = useState(true);

  const onClickMenuItem = (e: any) => {
    setSelectedKey(e.key);
    // navigate(keyRouteMap[e.key])
  };

  // const location = useRouter();
  // console.log(location.pathname);

  type MenuItem = Required<MenuProps>["items"][number];

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    path?: string,
    className?: string,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      path,
      className,
      type,
    } as MenuItem;
  }

  const items = [
    {
      key: "1",
      icon: ICONS.SIDEBAR_DASHBOARD,
      label: "Dashboard",
      path: "/",
    },
    {
      key: "1",
      icon: ICONS.SIDEBAR_PROFILE,
      label: "Profile",
      path: "/headings",
    },
    {
      key: "1",
      icon: ICONS.SIDEBAR_SETTINGS,
      label: "Settings",
      path: "/headings",
    },
  
    // {
    //   key: "2",
    //   icon: (
    //     <img
    //       src={ICONS.SIDEBAR_REQUESTS}
    //       className="w-[18px] h-[18px]"
    //       alt=""
    //     />
    //   ),
    //   label: "Requests",
    //   path: "/pending",
    //   type: "subMenu",
    //   childrens: [
    //     {
    //       key: 1,
    //       icon: (
    //         <img
    //           src={ICONS.SIDEBAR_REQUESTS}
    //           className="w-[18px] h-[18px]"
    //           alt=""
    //         />
    //       ),
    //       label: "Requests",
    //       path: "/pending",
    //     },
    //     {
    //       key: 2,
    //       icon: (
    //         <img
    //           src={ICONS.SIDEBAR_REQUESTS}
    //           className="w-[18px] h-[18px]"
    //           alt=""
    //         />
    //       ),
    //       label: "Completed",
    //       path: "/completed",
    //     },
    //   ],
    // },
    // {
    //   key: "2",
    //   icon: (
    //     <img src={ICONS.SIDEBAR_OFFERS} className="w-[18px] h-[18px]" alt="" />
    //   ),
    //   label: "Offers",
    //   path: "/offers",
    // },
    // {
    //   key: "2",
    //   icon: (
    //     <img src={ICONS.SIDEBAR_PROFILE} className="w-[18px] h-[18px]" alt="" />
    //   ),
    //   label: "Profile",
    //   path: "/profile",
    // },
    // {
    //   key: "2",
    //   icon: (
    //     <img
    //       src={ICONS.SIDEBAR_SETTINGS}
    //       className="w-[18px] h-[18px]"
    //       alt=""
    //     />
    //   ),
    //   label: "Settings",
    //   path: "/settings",
    // },
  ];

  const items2 = [
    getItem(
      "Dashboard",
      "1",
      <ICONS.SIDEBAR_DASHBOARD />,
      "/dashboard",
      `my-1 flex gap-2 py-3 cursor-pointer rounded-0 m-0 rounded-none px-6 ${
        location.pathname == "/dashboard"
          ? "bg-bg_light border-l-4 border-primary"
          : "text-black"
      } ${collapsed ? "" : "pl-[20px]"}`
    ),
    getItem(
      "Requests",
      "2",
      <ICONS.SIDEBAR_REQUESTS />,
      "",
      "",
      [getItem("Requests", "2-1"), getItem("Completed", "2-2")]
    ),
    getItem(
      "Offers",
      "3",
      <ICONS.SIDEBAR_OFFERS/>,
      "/offers",
      `my-1 flex gap-2 py-3 cursor-pointer px-6 ${
        location.pathname == "/offers"
          ? "bg-bg_light border-l-4 border-primary"
          : "text-black"
      } ${collapsed ? "" : "pl-[20px]"}`
    ),
    getItem(
      "Profile",
      "4",
      <ICONS.SIDEBAR_PROFILE/>,
      "/profile",
      `my-1 flex gap-2 py-3 cursor-pointer px-6 ${
        location.pathname == "/profile"
          ? "bg-bg_light border-l-4 border-primary"
          : "text-black"
      } ${collapsed ? "" : "pl-[20px]"}`
    ),
    getItem(
      "Settings",
      "5",
      <ICONS.SIDEBAR_SETTINGS/>,
      "/settings",
      `my-1 flex gap-2 py-3 cursor-pointer px-6 ${
        location.pathname == "/settings"
          ? "bg-bg_light border-l-4 border-primary"
          : "text-black"
      } ${collapsed ? "" : "pl-[20px]"}`
    ),
  ];

  const navigate = useRouter();

  const handleSignout = () => {
    // handleLogout();
    navigate.push("/admin/login");
  };

  return (
    <div>
      <div className="flex bg-dark max-h-[100vh] w-[100vw]">
        <div className="bg-[#FFFFFF0F] max-h-[100vh] border-solid border-r-[2px] border-[#EFEFEF0F]">
          <Menu
            onClick={onClickMenuItem}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            style={{
              width: !collapsed ? "260px" : "64px",
              backgroundColor: "transparent",
              minHeight: "100vh",
              maxHeight: "100vh",
              border: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0px",
            }}
            // items={items2}
            selectedKeys={[selectedKey]}
            inlineCollapsed={collapsed}
          >
            <div
              className={`flex mt-2 justify-start ${
                collapsed ? "pl-[14px]" : "pl-[14px]"
              }`}
            >
              <div
                className="rounded-[12px] p-2 h-[35px] w-[35px] border border-border_light flex items-center justify-center cursor-pointer"
                onClick={() => {
                  setCollapsed(!collapsed);
                }}
              >
                {collapsed ? (
                  <ICONS.SIDEBAR_CROSS color="white" />
                ) : (
                  <ICONS.SIDEBAR_HAMBURGER color="white" />
                )}
              </div>
            </div>
            <div
              className={`flex h-[60px] justify-start mt-8 items-center gap-3 mb-5 ${
                collapsed ? "pl-[14px]" : "pl-[14px]"
              }`}
            >
              {/* <div className="h-[34px] w-[34px] bg-primary"></div> */}
              {collapsed ? null : (
                <div className=" w-full text-white text-2xl truncate">TDA</div>
              )}
            </div>

            {items.map((item) => (
              <div
                onClick={() => {
                  navigate.push(item.path);
                }}
                className={`my-1 flex gap-2 py-3 cursor-pointer px-6 hover:bg-bg_light hover:border-l-4 hover:border-primary hover:pl-[16px]  ${
                  location.pathname == item.path
                    ? "bg-bg_light border-l-4 border-primary pl-[16px]"
                    : "text-black pl-[20px]"
                } ${collapsed ? "" : ""}}`}
              >
                
                {<item.icon style={{
                  width: "22px",
                  height: "22px"
                }} color="#fff" />}
                {
                  collapsed ? null : <div className="text-sm truncate text-[#fff]">{item.label}</div>
                }
              </div>
            ))}
          </Menu>
        </div>
        <div
          className={`grow flex flex-col maxh-h-[100vh] flex-1 w-[100%] bg-main_bg relative ${
            location.pathname == "/profile" ? "" : ""
          }`}
        >
          <div className={`p-3 bg-[#FFFFFF0F] border-b-[2px] border-[#FFFFFF0F]`}>
            <Topbar />
          </div>

          <div className="p-3 flex-1 overflow-y-auto">

          {authState && props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
