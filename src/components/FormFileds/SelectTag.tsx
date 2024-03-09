import React, { useState } from "react";
import { ICONS } from "../../assets/icons";

type Props = {
  label?: string;
  value?: boolean;
  onChange?: (e: any) => void;
  disabled?: boolean;
};

const SelectTag = ({ value, label, onChange, disabled }: Props) => {
  const [selected, setSelected] = useState(Math.random() > 0.5 ? true : false);
  return (
    <div
      onClick={onChange}
      className={`flex gap-1 rounded-lg py-1 px-2.5 items-center ${
        value
          ? " bg-primary_light text-primary border border-primary"
          : " text-black_300 border border-black_300"
      } ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <p>{label}</p>

      <img src={value ? ICONS.CROSS : ICONS.ADD} className="w-5 h-5" alt="" />
    </div>
  );
};

export default SelectTag;
