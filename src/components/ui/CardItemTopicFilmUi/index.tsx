import { convertStaticImage } from "@/lib/helpers/function";
import React, { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faHeart, faPlay } from "@fortawesome/free-solid-svg-icons";
import { formatMinutesToHours } from "@/lib/helpers/time";

export interface Props {
  _id: string;
  images: any;
  title: string;
  english_title: string;
  latest_episode: any;
  imdb_rating: string | number;
  quality: string;
  rating: string;
  year: string;
  latest_season: number;
  runtime: number;
  genres: any[];
}

const CardItemTopicFilmUi = ({ ...props }: Props) => {
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState<{
    top: number;
    left: number;
    width: number;
    height: number;
  }>({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="relative cursor-pointer">
        <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
          <Image className="object-cover" fill src={convertStaticImage(props?.images?.horizontal_posters[0].path)} alt="" draggable={false} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
        </div>
        <div className="absolute bottom-0 left-3 flex text-sm font-bold">
          {props.latest_episode?.["1"] && <div className={`bg-[#5e6070] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tl-sm"}`}>PĐ. {props.latest_episode?.["1"]}</div>}
          {props.latest_episode?.["2"] && <div className={`bg-[#1667cf] py-0.5 px-2 ${!props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-t-sm" : props.latest_episode?.["4"] && !props.latest_episode?.["1"] ? "rounded-tl-sm" : props.latest_episode?.["1"] && !props.latest_episode?.["4"] ? "rounded-tr-sm" : ""}`}>LT. {props.latest_episode?.["2"]}</div>}
          {props.latest_episode?.["4"] && <div className={`bg-[#2ca35d] py-0.5 px-2 ${!props.latest_episode?.["1"] && !props.latest_episode?.["2"] ? "rounded-t-sm" : "rounded-tr-sm"}`}>TM. {props.latest_episode?.["4"]}</div>}
        </div>
      </div>
      <div className="mt-3 text-left pl-3">
        <span className="hover:text-[#FFD875] text-white leading-1.5 font-bold text-sm cursor-pointer">{props.title}</span>
        <p className="font-thin text-xs text-[#aaa] mt-1 cursor-pointer">{props.english_title}</p>
      </div>
      {isHovering &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed z-50 rounded-lg shadow-xl transition-transform duration-300 ease-in-out origin-center pointer-events-none bg-[#2F3346]"
            style={{
              top: position.top,
              left: position.left,
              width: position.width,
              height: position.height * 2,
              scale: 1.5,
              transformOrigin: "center",
            }}
          >
            <div className="h-1/2 relative">
              <img src={convertStaticImage(props?.images?.horizontal_posters[0].path)} alt="" className="rounded-t-lg object-cover h-full w-full" draggable={false} />
              <div className={`banner-gradient absolute inset-0 bg-[linear-gradient(180deg,rgba(8,39,92,0)_80%,#2F3346_100%)] z-10`} />
            </div>
            <div className="mt-3 text-left pl-3">
              <span className="text-white leading-1.5 font-bold text-[10px] cursor-pointer">{props.title}</span>
              <p className="font-thin text-[7px] text-[#FFD875] mt-1 cursor-pointer">{props.english_title}</p>
            </div>
            <div className="items-center mt-2 px-3 grid grid-cols-7 gap-2">
              <button className="bg-[#f0d25c] py-2 text-black flex justify-center items-center hover:bg-yellow-400 transition text-[10px] rounded-md col-span-3 font-bold gap-1">
                <FontAwesomeIcon icon={faPlay} className="text-[10px]" /> Xem ngay
              </button>
              <button className="bg-[#2F3346] py-2 border border-white/60 flex justify-center gap-1 items-center text-white text-[10px] transition rounded-md col-span-2">
                <FontAwesomeIcon icon={faHeart} className="text-[10px]" /> Thích
              </button>
              <button className="bg-[#2F3346] py-2 border border-white/60 flex justify-center gap-1 items-center text-white text-[10px] transition rounded-md col-span-2">
                <FontAwesomeIcon icon={faCircleInfo} className="text-[10px]" /> Chi tiết
              </button>
            </div>
            <div className="flex items-center gap-1 mt-3 px-3">
              {typeof props?.imdb_rating === "number" || typeof props?.imdb_rating === "string" ? (
                <span className="bg-[#ffffff10] text-white px-1 py-[6px] rounded-[2px] border border-[#f0d25c] font-bold text-[8px]">
                  <span className="text-[#f0d25c] font-normal">IMDb</span> {props?.imdb_rating}
                </span>
              ) : null}
              {props?.quality === "4k" && <span className="border bg-[linear-gradient(220deg,_#FFD875,_#FFF)] text-black bg-white font-bold border-white/30 px-1 py-[6px] rounded-[2px] text-[8px]">4K</span>}
              <span className="text-black bg-white font-bold border-white/30 px-1 py-[6px] rounded-[2px] text-[8px] leading-1">{props?.rating}</span>
              <span className="bg-[#ffffff10] text-white px-1 py-[6px] rounded-[2px] text-[8px] flex justify-center items-center leading-1">{props?.year}</span>
              {props?.latest_season ? <></> : <span className="bg-[#ffffff10] text-white px-2 py-[6px] rounded-[2px]">{formatMinutesToHours(props?.runtime)}</span>}
              {props?.latest_season ? <span className="bg-[#ffffff10] text-white px-1 py-[6px] rounded-[2px] text-[8px] flex justify-center items-center leading-1">Phần {props?.latest_season}</span> : <></>}
              {props?.latest_season ? <span className="bg-[#ffffff10] text-white px-1 py-[6px] rounded-[2px] text-[8px] flex justify-center items-center leading-1">Tập {props?.latest_episode["1"] || props?.latest_episode["4"]}</span> : <></>}
            </div>
            <div className="flex items-center gap-1 mb-4 px-3 mt-2">
              {props?.genres.length > 0 &&
                props.genres.slice(0, 4).map((genre: any, index: number) => (
                  <div className="flex gap-1 text-white text-[8px]" key={genre._id as string}>
                    <div>{genre.name}</div>
                    {index < props.genres.length - 1 && <div>●</div>}
                  </div>
                ))}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default CardItemTopicFilmUi;
