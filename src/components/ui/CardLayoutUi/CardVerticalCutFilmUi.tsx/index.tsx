import { convertStaticImage } from "@/lib/helpers/function";
import { formatMinutesToHours } from "@/lib/helpers/time";
import "./CardVerticalCutFilm.scss"
import { TypeFilm } from "@/types/type";
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
  index: number;
  rating: number | string;
  year: number | string;
  type: TypeFilm;
  runtime: number;
  latest_season: number;
}

const CardVerticalCutFilmUi = (props: Props) => {
  return (
    <div>
      <div className="aspect-9/16 h-[430px] w-full rounded-lg overflow-hidden relative cursor-pointer group opacity-100" key={props._id}>
        <div className={`${props.index % 2 === 0 ? 'mark-left' : 'mark-right'} absolute top-0 left-0 right-0 bottom-0 bg-transparent group-hover:bg-[#FFD875]`}></div>
        <Image fill src={convertStaticImage(props.images.posters[0].path)} className={`${props.index % 2 === 0 ? 'mark-left' : 'mark-right'} transition-all duration-400 ease-in-out transform absolute group-hover:!top-[4px] group-hover:opacity-[.8] group-hover:!left-[4px] group-hover:right-[4px] group-hover:bottom-[4px] w-full h-full group-hover:!w-[calc(100%-8px)] group-hover:!h-[calc(100%-8px)] object-cover`} alt="" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex text-xs">
          {props.latest_episode?.["1"] && (
            <div className={`bg-[#5e6070] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tl-sm"}`}>
              PĐ. <span className="font-bold">{props.latest_episode?.["1"]}</span>
            </div>
          )}
          {props.latest_episode?.["2"] && (
            <div className={`bg-[#1667cf] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-t-sm" : props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-tl-sm" : props.latest_episode?.["1"] && !props.latest_episode?.["4"] ? "rounded-tr-sm" : ""}`}>
              LT. <span className="font-bold">{props.latest_episode?.["2"]}</span>
            </div>
          )}
          {props.latest_episode?.["4"] && (
            <div className={`bg-[#2ca35d] py-0.5 px-2 ${!props.latest_episode?.["1"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tr-sm"}`}>
              TM. <span className="font-bold">{props.latest_episode?.["4"]}</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-3 text-center flex justify-start items-center gap-4">
        <div
          style={{
            background: "linear-gradient(39deg, rgba(254, 207, 89, 1), rgba(255, 241, 204, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="min-w-[50px] leading-none text-center text-6xl font-black italic bg-clip-text text-transparent"
        >
          {props.index + 1}
        </div>
        <div className="flex justify-center items-start flex-col">
          <span className="hover:text-[#FFD875] text-white text-sm cursor-pointer line-clamp-1 text-left">{props.title}</span>
          <p className="font-thin text-xs text-left text-[#aaa] mt-0 cursor-pointer line-clamp-1">{props.english_title}</p>
          <div className="flex items-center justify-center text-xs text-white gap-1">
            {props?.rating && (
              <>
                <div className="font-bold">{props.rating}</div> <div className="text-[#ffffff30]">●</div>
              </>
            )}
            {props?.type === TypeFilm.SERIES_MOVIE ? (
              <>
                {props?.latest_season && (
                  <>
                    <div>Phần {props.latest_season}</div> <div className="text-[#ffffff30]">●</div>
                  </>
                )}
                {props.latest_episode?.["1"] && <div>Tập {props.latest_episode?.["1"]}</div>}
              </>
            ) : (
              <>
                {props?.year && (
                  <>
                    <div>{props.year}</div> <div className="text-[#ffffff30]">●</div>
                  </>
                )}
                {props.runtime && <div>{formatMinutesToHours(props.runtime)}</div>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVerticalCutFilmUi;
