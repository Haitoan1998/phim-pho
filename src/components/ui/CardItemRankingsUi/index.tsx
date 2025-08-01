import { solidColors } from "@/lib/constants";
import { convertStaticImage } from "@/lib/helpers/function";
import { faArrowTrendDown, faArrowTrendUp, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export interface Props {
  _id: string;
  current_rank: number;
  direction: "up" | "down" | "same";
  images: any;
  name: string;
  title: string;
  isCategory?: boolean;
}

const CardItemRankingsUi = (props: Props) => {
  return (
    <div className="flex justify-start gap-4 items-center min-h-[40px] h-[40px]" key={props._id}>
      <div className="text-[#aaaaaaa9] text-lg font-semibold">{props.current_rank}.</div>
      <FontAwesomeIcon icon={props.direction === "up" ? faArrowTrendUp : props.direction === "down" ? faArrowTrendDown : faMinus} className={`text-base font-extrabold ${props.direction === "up" ? "text-[#bedc33]" : props.direction === "down" ? "text-[#dc328c]" : "text-[#fff3]"}`} />
      {props.isCategory ? null : (
        <div className="rounded-sm overflow-hidden">
          <Image className="object-cover" width={25} height={36} src={convertStaticImage(props.images.posters[0].path)} alt="" />
        </div>
      )}
      <div>{props.isCategory ? <div className={`hover:text-[#FFD875] px-[0.8rem] h-[28px] text-[13px] flex items-center text-white rounded-[30px] ${solidColors[Math.floor(Math.random() * solidColors.length)]}`}>{props.name}</div> : <p className="hover:text-[#FFD875] text-white leading-1.5 text-sm cursor-pointer">{props.title}</p>}</div>
    </div>
  );
};

export default CardItemRankingsUi;
