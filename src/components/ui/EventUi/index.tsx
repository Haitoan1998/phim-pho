import React from "react";

const index = () => {
  return (
    <div className="my-16 bg-[#fedaa8] h-[350px] relative overflow-hidden rounded-lg">
      <div>
        <img src="/behind-hero.png" alt="behind-hero" className="absolute w-[40%] max-w-full h-full  object-cover opacity-50" />
      </div>
      <div className="flex flex-row h-[350px] relative z-10">
      <div className="basis-1/3">
        <img src="/hero.png" alt="hero" className="object-cover h-full max-w-full" />
        <img src="/vn-flag-full.gif" alt="hero" className="object-cover" />
      </div>
      <div className="basis-2/3 bg-[blue]">02</div>
      </div>
    </div>
  );
};

export default index;
