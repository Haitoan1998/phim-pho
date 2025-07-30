import React from "react";
import { Image } from "antd";

const LoadingWelcome = () => {
  return (
    <div className="animate-body-load fixed inset-0 flex w-full h-screen justify-center items-center top-0 right-0 bottom-0 bg-[#191B24]">
      <div className="animate-logo-load max-w-[800px] flex flex-col justify-center items-center gap-8 text-[3em] leading-[1.4] text-[#ffffff30] font-semibold">
        <Image src="/logoBranch.png" alt="logo" className="w-[60%] max-w-[360px] h-auto" />
        <div className="text-h1 text-center">Xem Phim Miễn Phí Cực Nhanh, Chất Lượng Cao Và Cập Nhật Liên Tục</div>
      </div>
    </div>
  );
};

export default LoadingWelcome;
