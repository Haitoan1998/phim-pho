import { convertStaticAvatar, convertStaticImage } from "@/lib/helpers/function";
import { faCircleDown, faCircleUp, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface Props {
  author: any;
  movie: any;
  content: string;
  total_like: number;
  total_dislike: number;
  total_children: number
}

const CardTopCommentUi = ({ ...props }: Props) => {
  console.log(props?.author?.avatar?.path);
  return (
    <div className="relative cursor-pointer p-5 group rounded-lg overflow-hidden">
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-[0.5] group-hover:opacity-100 [mask-image:linear-gradient(180deg,black_0,transparent_80%)]">
        <img className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover blur-[5px] scale-[1.1]" src={convertStaticImage(props?.movie?.images?.posters[props?.movie?.images?.posters?.length - 1]?.path)} alt="" />
      </div>
      <div className="flex items-center gap-4 justify-between h-full z-10 relative mb-4">
        <div className="">
          <div className="group-hover:border-2 border-white rounded-full  aspect-square w-12 overflow-hidden">
            <img src={convertStaticAvatar(props?.author?.avatar?.path)} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="mt-4 text-white font-bold text-sm">{props?.author?.name}</div>
        </div>
        <div>
          <img src={convertStaticImage(props?.movie?.images?.posters[0]?.path)} alt="" className="aspect-9/16 w-[50px] object-cover rounded-lg" />
        </div>
      </div>
      <div>
        <p className="flex-grow text-[13px] !text-white/50 h-[42px] mb-[3px] line-clamp-2 text-left">{props.content}</p>
      </div>
      <div className="flex justify-start gap-2 items-center">
        <div className="text-[13px] !text-white/50 mb-[3px] text-left"><FontAwesomeIcon icon={faCircleUp} className="text-sm w-6 h-6" />{props.total_like}</div>
        <div className="text-[13px] !text-white/50 mb-[3px] text-left"><FontAwesomeIcon icon={faCircleDown} className="text-sm w-6 h-6" />{props.total_dislike}</div>
       <div className="text-[13px] !text-white/50 mb-[3px] text-left"> <FontAwesomeIcon icon={faMessage} className="text-sm w-6 h-6" />{props.total_children}</div>
      </div>
    </div>
  );
};

export default CardTopCommentUi;
