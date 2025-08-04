import { convertStaticImage } from "@/lib/helpers/function";
import { formatMinutesToHours } from "@/lib/helpers/time";
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
    backdrops: {
      path: string;
    }[];
    posters: {
      path: string;
    }[];
  };
  rating: number | string;
  year: number | string;
  runtime: number;
}

const CardHorizontalWithPoster = (props: Props) => {
  return (
    <div>
      <div className="aspect-16/9 h-[197px] w-full rounded-lg overflow-hidden relative cursor-pointer opacity-100" key={props._id}>
        <Image fill src={convertStaticImage(props.images.backdrops[0].path)} className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-0 left-32 right-auto -translate-x-1/2 flex font-thin text-xs">
          {props.latest_episode?.["1"] && <div className={`bg-[#5e6070] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tl-sm"}`}>P.Đề</div>}
          {props.latest_episode?.["2"] && <div className={`bg-[#1667cf] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-t-sm" : props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-tl-sm" : props.latest_episode?.["1"] && !props.latest_episode?.["4"] ? "rounded-tr-sm" : ""}`}>L.Tiếng</div>}
          {props.latest_episode?.["4"] && <div className={`bg-[#2ca35d] py-0.5 px-2 ${!props.latest_episode?.["1"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tr-sm"}`}>T.Minh</div>}
        </div>
      </div>
      <div className="text-center flex items-center justify-start gap-2 py-4 px-5">
        <div className="h-[120px] w-[80px] min-w-[80px] rounded-lg overflow-hidden relative mt-[-60px]  cursor-pointer">
          <img src={convertStaticImage(props.images.posters[0].path)} className="" alt="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col w-full justify-between gap-2">
          <div className="text-left">
            <span className="hover:text-[#FFD875] text-white text-sm font-bold cursor-pointer line-clamp-1">{props.title}</span>
            <p className="font-thin text-xs text-[#aaa] mt-1 cursor-pointer line-clamp-1">{props.english_title}</p>
          </div>
          <div className="flex items-center justify-starrt text-[#aaa] text-xs gap-1">
            {props?.rating && (
              <>
                <div className="font-bold">{props.rating}</div> <div className="text-[#ffffff30]">●</div>
              </>
            )}
            {props?.year && (
              <>
                <div>{props.year}</div> <div className="text-[#ffffff30]">●</div>
              </>
            )}
            {props.runtime && <div>{formatMinutesToHours(props.runtime)}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardHorizontalWithPoster;
