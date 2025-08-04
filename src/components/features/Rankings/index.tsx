"use client";
import CardItemRankingsUi from "@/components/ui/CardItemRankingsUi";
import { faAngleLeft, faAngleRight, faBolt, faClapperboard, faFolderPlus, faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CardItemLatestCommentUi from "@/components/ui/CardItemLatestCommentUi";
import { useGetRanking } from "@/hooks/useGetRanking";

const Rankings = () => {
  const { mostCommented, mostFavorite, mostPopular, latestComments, loading, error } = useGetRanking();
  return (
    <div className="border-solid border border-[#ffffff54] border-t-0 rounded-b-2xl grid grid-cols-9">
      <div className="col-span-2 top-comment-wrapper py-6 px-8 gap-8 border-r-1 border-solid border-[#ffffff54]">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faClapperboard} className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#FFD875]" />
          <h2 className="font-bold text-lg">SÔI NỔI NHẤT</h2>
        </div>
        <div className="flex flex-col gap-2">
          {mostCommented?.result?.length > 0 &&
            mostCommented.result.slice(0, 5).map((mostComment: any) => {
              return <CardItemRankingsUi {...mostComment} />;
            })}
        </div>
        <div className="flex-grow text-[13px] text-white/50 text-left mt-4 hover:text-[#FFD875]">Xem thêm</div>
      </div>
      <div className="col-span-2 top-comment-wrapper py-6 px-8 gap-8 border-r-1 border-solid border-[#ffffff54]">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faHeartCircleCheck} className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#FFD875]" />
          <h2 className="font-bold text-lg">YÊU THÍCH NHẤT</h2>
        </div>
        <div className="flex flex-col gap-2">
          {mostFavorite?.result?.length > 0 &&
            mostFavorite.result.slice(0, 5).map((mostFavorite: any) => {
              return <CardItemRankingsUi {...mostFavorite} />;
            })}
        </div>
        <div className="flex-grow text-[13px] text-white/50 text-left mt-4 hover:text-[#FFD875]">Xem thêm</div>
      </div>
      <div className="col-span-2 top-comment-wrapper py-6 px-8 gap-8 border-r-1 border-solid border-[#ffffff54]">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faFolderPlus} className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#FFD875]" />
          <h2 className="font-bold text-lg">THỂ LOẠI HOT</h2>
        </div>
        <div className="flex flex-col gap-2">
          {mostPopular?.result?.length > 0 &&
            mostPopular.result.slice(0, 5).map((mostPopular: any) => {
              return <CardItemRankingsUi {...mostPopular} isCategory={true} />;
            })}
        </div>
        <div className="flex-grow text-[13px] text-white/50 text-left mt-4 hover:text-[#FFD875]">Xem thêm</div>
      </div>
      <div className="col-span-3 top-comment-wrapper py-6 px-8 gap-8">
        <div className="flex items-center gap-2 mb-6">
          <FontAwesomeIcon icon={faBolt} className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#FFD875]" />
          <h2 className="font-bold text-lg">BÌNH LUẬN MỚI</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="relative w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              direction={"vertical"}
              slidesPerView={4}
              spaceBetween={5}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              className="w-full h-[282px] max-h-[282px]"
            >
              {latestComments?.result?.length > 0 &&
                latestComments.result.map((latestComment: any) => {
                  return (
                    <SwiperSlide key={latestComment._id}>
                      <CardItemLatestCommentUi {...latestComment} />
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
