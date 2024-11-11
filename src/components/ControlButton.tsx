import React from "react";
import { ControlButtonProps } from "../type/control-button";
import Icon from "./Icon";
import "../style/icon.css";
const ControlButton: React.FC<ControlButtonProps> = ({
  classname,
  onclick,
  text,
  src,
}) => {
  return (
    <button
      onClick={onclick}
      className={`w-full lg:w-[228px] duration-300 rounded border flex lg:justify-center items-center gap-2 py-2  px-4 ${classname}`}
    >
      <Icon height={17} width={17} src={src} classname="icon" />
      {text}
    </button>
  );
};

export default ControlButton;
