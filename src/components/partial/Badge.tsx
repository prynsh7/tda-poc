import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  state?: "danger" | "warning" | "success" | "gray" | "primary";
  type?: "outlined" | "filled";
};

const Badge = (props: Props) => {
  const dangerClassNames =
    props.type === "filled"
      ? "bg-error text-[white] border border-1 border-error "
      : "bg-error_light text-error border border-1 border-error";
  const successClassNames =
    props.type === "filled"
      ? "bg-success text-[white] border border-1 border-success "
      : "bg-success_light text-success border border-1 border-success";
  const primaryClassNames =
    props.type === "filled"
      ? "bg-primary text-[white] border border-1 border-primary "
      : "bg-primary_light text-primary border border-1 border-primary";
  const warningClassNames =
    props.type === "filled"
      ? "bg-secondary text-[white] border border-1 border-secondary "
      : "bg-secondary_light text-secondary border border-1 border-secondary ";
  const grayClassNames =
    props.type === "filled"
      ? "bg-gray-600 text-[white] border border-1 border-gray-600 "
      : "bg-gray-200 text-gray-600 border border-1 border-gray-600 ";

  return (
    <div
      className={` px-1 rounded-[6px] text-[10px] font-400 leading-[20px] tracking-[0.07px] py-[1px] flex items-center justify-center ${
        props.state === "danger"
          ? dangerClassNames
          : props.state === "primary"
          ? primaryClassNames
          : props.state === "warning"
          ? warningClassNames
          : props.state === "success"
          ? successClassNames
          : grayClassNames
      } ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Badge;
