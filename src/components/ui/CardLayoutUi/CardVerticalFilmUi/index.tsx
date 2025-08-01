import { convertStaticImage } from "@/lib/helpers/function";
import Image from "next/image";
import React from "react";
interface Props {
  latest_episode: {
    [key: string]: string;
  };
  _id: string;
  title: string;
  english_title: string;
  images: {
    posters: {
      path: string;
    }[];
  };
}

const CardVerticalFilmUi = (props: Props) => {
  return (
    <div>
      <div className="aspect-9/16 h-[316px] w-full rounded-lg overflow-hidden relative cursor-pointer hover:opacity-[0.8] opacity-100" key={props._id}>
        <Image fill src={convertStaticImage(props.images.posters[0].path)} className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex font-thin text-xs">
          {props.latest_episode?.["1"] && <div className={`bg-[#5e6070] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tl-sm"}`}>PĐ. {props.latest_episode?.["1"]}</div>}
          {props.latest_episode?.["2"] && <div className={`bg-[#1667cf] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-t-sm" : props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-tl-sm" : props.latest_episode?.["1"] && !props.latest_episode?.["4"] ? "rounded-tr-sm" : ""}`}>LT. {props.latest_episode?.["2"]}</div>}
          {props.latest_episode?.["4"] && <div className={`bg-[#2ca35d] py-0.5 px-2 ${!props.latest_episode?.["1"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tr-sm"}`}>TM. {props.latest_episode?.["4"]}</div>}
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="hover:text-[#FFD875] text-white leading-1.5 text-sm cursor-pointer">{props.title}</span>
        <p className="font-thin text-xs text-[#aaa] mt-1 cursor-pointer">{props.english_title}</p>
      </div>
    </div>
  );
};

export default CardVerticalFilmUi;
