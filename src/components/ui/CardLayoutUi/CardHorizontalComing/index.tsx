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
    horizontal_posters: {
      path: string;
    }[];
  };
  status: string;
}

const CardHorizontalComing = (props: Props) => {
  return (
    <div>
      <div className="aspect-16/9 h-[195px] w-full rounded-lg overflow-hidden relative cursor-pointer opacity-100" key={props._id}>
        <Image fill src={convertStaticImage(props.images.horizontal_posters[0].path)} className="w-full h-full object-cover" alt="" />
        <div className="absolute bottom-0 left-4 right-auto flex font-bold text-xs">
          {props.status === 'Upcoming' && <div className={`bg-white py-1 px-2 text-black rounded-t-sm`}>Sắp chiếu</div>}
        </div>
      </div>
      <div className="text-left px-4 py-3">
        <span className="hover:text-[#FFD875] text-white text-sm font-bold cursor-pointer line-clamp-1">{props.title}</span>
        <p className="font-thin text-xs text-[#aaa]cursor-pointer line-clamp-1 mt-2">{props.english_title}</p>
      </div>
    </div>
  );
};

export default CardHorizontalComing;
