import { Switch } from "antd";
import React, { useState } from "react";

type Props = {
  value?: boolean;
  onChange?: (e: any) => void;
};

const Slider = (props: Props) => {
  const [status, setStatus] = useState(true);
  return (
    <Switch
      checked={props.value || false}
      onChange={props.onChange}
      size="small"
      style={{
        width: "24px",
        background: props.value ? "#03A790" : "#F21E1E",
        transform: "all 1s ease-in",
      }}
    />
  );
};

export default Slider;
