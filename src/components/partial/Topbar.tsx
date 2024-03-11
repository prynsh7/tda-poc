import { ICONS } from "@/assets/icons";
import { Avatar } from "antd";
import React from "react";


const Topbar = (props: any) => {
  const { collapsed, setCollapsed } = props;
  return (
    <div
      className={`relative  flex justify-between items-center w-full h-[60px] z-10`}
    >
      <div className={`flex  justify-start`}>
        <div
          className="rounded-[4px] shadow-sm bg-primary p-2 h-[35px] w-[35px] border-[1px] border-primary flex items-center justify-center cursor-pointer"
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
      <div className={`flex gap-4 h-full items-center  text-text_high`}>

        <div className="w-[1px] h-[40px] bg-border_light"></div>
        <div className="flex gap-3 items-center">
          <Avatar 
            size={45} 
            src="https://avatars.githubusercontent.com/u/74198584?v=4" 
            alt="Priyansh R"
          />
          <div>
            <h6 className="text-sm text-black">Priyansh R</h6>
            <p className="text-xs text-gray-700">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
