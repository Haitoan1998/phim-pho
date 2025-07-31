"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface Props {
  data: any[];
  title: string;
  more?: number;
}
const CardTopicUi = ({ ...props }: Props) => {
  return (
    <>
      <h1 className="text-white text-2xl font-bold mb-6 text-left">{props.title}</h1>
      <div className="grid grid-cols-7 gap-4">
        {props.data.map((item, index) => (
          <div key={item._id} className={`${item.gradient} group hover:shadow-xl hover:-translate-y-4 transition-all duration-300 flex-col items-start pt-8 pb-5 px-6 rounded-lg cursor-pointer overflow-hidden relative backdrop-blur-sm bg-opacity-90 flex justify-end`}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>
            <h1 className="text-white text-2xl font-bold mb-2 relative z-10 text-left">{item.name}</h1>
            <span className="text-white/90 group-hover:text-white flex items-center gap-2 transition-colors duration-300 relative z-10">
              Xem chủ đề <FontAwesomeIcon icon={faArrowRight} className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        ))}
        {props.more ? (
          <div className={`bg-[#535666] group hover:shadow-xl hover:-translate-y-4 transition-all duration-300 flex-col rounded-lg cursor-pointer overflow-hidden relative backdrop-blur-sm bg-opacity-90 flex justify-center items-center`}>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-white transition-opacity duration-300"></div>
            <h1 className="text-white text-2xl font-bold mb-2 relative z-10 text-center">+{props.more} Chủ đề</h1>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default CardTopicUi;
