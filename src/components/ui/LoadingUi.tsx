import { Spin } from "antd";
import React from "react";

const LoadingUi = () => {
  return <div className="z-[1000] fixed bg-black inset-0"><Spin fullscreen size="large" spinning={true}></Spin></div>;
};

export default LoadingUi;
