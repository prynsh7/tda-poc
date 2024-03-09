import React from "react";
import { InputNumber as InputNum } from "antd";

type Props = {};

const InputNumber = (props: any) => {
  return (
    <InputNum
      {...props}
      className={`px-3 py-1 w-full ${props.className || ""}`}
    />
  );
};

export default InputNumber;
