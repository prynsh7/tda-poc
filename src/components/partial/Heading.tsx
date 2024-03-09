import React from "react";

type Props = {
  children: React.ReactNode;
  type?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: "bold" | "normal" | "semi-bold" | "light";
  className?: string;
  style?: React.CSSProperties;
};

const Heading = ({
  type = "h1",
  fontWeight = "normal",
  className,
  style,
  children,
}: Props) => {
  const classNames = ` ${
    type === "h1"
      ? "text-4xl"
      : type === "h2"
      ? "text-3xl"
      : type === "h3"
      ? "text-2xl"
      : type === "h4"
      ? "text-xl"
      : type === "h5"
      ? "text-lg"
      : "text-base"
  } ${
    fontWeight === "light"
      ? "font-thin"
      : fontWeight === "normal"
      ? "font-normal"
      : fontWeight === "semi-bold"
      ? "font-semibold"
      : "font-bold"
  } ${className || ""}`;
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

export default Heading;
