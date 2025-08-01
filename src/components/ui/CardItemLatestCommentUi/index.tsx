import { gradients } from "@/lib/constants";
import { convertStaticAvatar, convertStaticImage } from "@/lib/helpers/function";
import { faArrowTrendDown, faArrowTrendUp, faClapperboard, faMinus, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

export interface Props {
  _id: string;
  name: string;
  title: string;
  author: any;
  content: string;
  movie?: any;
}

const CardItemLatestCommentUi = (props: Props) => {
  return (
    <div className="flex justify-start gap-4 items-center bg-[#191b24] h-full rounded-lg p-2 cursor-pointer hover:border-1 border-solid border-[#ffffff54]" key={props._id}>
      <div className="group-hover:border-2 border-white rounded-full aspect-square w-12 h-12 min-w-12 min-h-12 flex items-center justify-center overflow-hidden">
        <img src={convertStaticAvatar(props?.author?.avatar?.path)} alt="" className="object-cover w-12 h-12" />
      </div>
      <div className="flex flex-col flex-1 gap-2">
        <div className="flex items-center gap-2">
          <div className="text-white text-xs text-nowrap">{props?.author?.name}</div>
          <div className="w-[]">
            <p className="flex-grow text-xs !text-white/50 line-clamp-1 text-left mb-0">{props.content}</p>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <FontAwesomeIcon icon={faPlay} className={`text-xs font-extrabold text-[#FFD875]`} />
          <div className="w-[]">
            <p className="flex-grow text-xs !text-white/50 line-clamp-1 text-left mb-0">{props.movie.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemLatestCommentUi;
