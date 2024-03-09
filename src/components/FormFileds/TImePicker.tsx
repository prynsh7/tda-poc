import React from "react";
import { TimePicker as TimePick } from "antd";

type Props = {};

const TImePicker = (props: any) => {
  return <TimePick {...props} use12Hours={true} format={"h:mm a"} />;
};

export default TImePicker;
