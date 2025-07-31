"use client";
import { UseGetColletionList } from "@/hooks/UseGetColletionList";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faMedal } from "@fortawesome/free-solid-svg-icons";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { UseGetTopComment } from "@/hooks/UseGetTopComment";
import CardTopCommentUi from "@/components/ui/CardTopCommentUi";

const params = {
  page: 1,
  limit: 4,
};

const TopComment = () => {
  const { comments } = UseGetTopComment();
  console.log(comments);
  return (
    <div className="mt-12 py-6 px-8 gap-8 border border-solid border-[#ffffff54] rounded-2xl">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faMedal} className="text-lg transition-transform duration-300 group-hover:translate-x-1 text-[#FFD875]" />
        <h2 className="font-bold text-lg">TOP BÌNH LUẬN</h2>
      </div>
      <div>
        <div className="flex justify-center items-center gap-4">
          <div className="flex-1 relative overflow-hidden px-5">
            <div>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={6}
                spaceBetween={16}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false, 
                }}
                navigation={{
                  nextEl: `.swiper-button-next`,
                  prevEl: `.swiper-button-prev`,
                }}
                className="w-full"
              >
                {comments?.length > 0 &&
                  comments.map((comment: any) => {
                    return (
                      <SwiperSlide key={comment._id}>
                        <CardTopCommentUi {...comment} />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
            <button className={`swiper-button-next swiper-button-next absolute z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button className={`swiper-button-prev swiper-button-prev absolute z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopComment;
