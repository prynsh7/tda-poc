import React from "react";

type Props = {};

const Topbar = (props: Props) => {
  return (
    <div
      className={`relative  flex justify-between items-center w-full h-[60px] z-10`}
    >
      <div></div>
      <div className={`flex gap-4 h-full items-center  text-text_high`}>
        {/* <div className="relative p-2">
          <div className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] bg-[#ffffff1A] flex items-center justify-center text-[white] rounded-full">
            6
          </div>
        </div> */}
        <div className="w-[1px] h-[40px] bg-border_light"></div>
        <div className="flex gap-3 items-center">
          <div className="rounded-full h-[32px] w-[32px] bg-gray-200"></div>
          <div>
            <h6 className="text-sm">Priyansh R</h6>
            <p className="text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
