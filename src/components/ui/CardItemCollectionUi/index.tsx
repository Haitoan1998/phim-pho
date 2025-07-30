import { convertStaticImage } from "@/lib/helpers/function";
import Image from "next/image";
import React from "react";
export interface Props {
  _id: string;
  images: any;
  title: string;
  english_title: string;
  latest_episode: any
}
const CardItemCollectionUi = ({ ...props }: Props) => {
  return (
    <>
      <div className="relative">
        <Image className="rounded-lg object-cover min-h-[161px] min-w-[288px] w-full h-full" height={161} width={288} src={convertStaticImage(props?.images?.horizontal_posters[0].path)} alt="" />
        <div className="absolute bottom-0 left-3 flex text-sm font-bold">
          {props.latest_episode?.["1"] && <div className={`bg-[#5e6070] py-0.5 px-2 ${!props.latest_episode?.["4"] ? 'rounded-t-sm' : 'rounded-tl-sm'}`}>PĐ. {props.latest_episode?.["1"]}</div>}
          {props.latest_episode?.["4"] && <div className={`bg-[#2ca35d] py-0.5 px-2 ${!props.latest_episode?.["1"] ? 'rounded-t-sm' : 'rounded-tr-sm'}`}>TM. {props.latest_episode?.["4"]}</div>}
        </div>
      </div>
      <div className="mt-3 text-left pl-3">
        <span className="hover:text-[#FFD875] text-white leading-1.5 font-bold text-sm cursor-pointer">{props.title}</span>
        <p className="font-thin text-xs text-[#aaa] mt-1 cursor-pointer">{props.english_title}</p>
      </div>
    </>
  );
};

export default CardItemCollectionUi;
