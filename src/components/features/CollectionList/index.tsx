"use client";
import { UseGetColletionList } from "@/hooks/UseGetColletionList";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CollectionList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CardItemCollectionUi from "@/components/ui/CardItemCollectionUi";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const params = {
  page: 1,
  limit: 4,
};

const CollectionList = () => {
  const { collections } = UseGetColletionList(params);

  return (
    <div className="collection-wrapper mt-12 rounded-2xl p-8 flex gap-8 flex-col">
      {collections?.length > 0 &&
        collections.slice(0, 3).map((collection: any, index: number) => {
          return (
            <div key={collection._id} className="flex justify-center items-center gap-4">
              <div className="flex-none pr-6 pl-2 gap-6 flex flex-col max-w-[200px] text-left">
                <div className={`bg-clip-text text-transparent text-3xl leading-[1.3] !shadow-none tracking-[1px] !font-bold ${collection.gradient}`}>{collection.name}</div>
                <div className="text-xs text-white font-bold flex items-center gap-2 group cursor-pointer">
                  <div>Xem Toàn bộ</div>
                  <FontAwesomeIcon icon={faAngleRight} className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <div className="flex-1 relative overflow-hidden px-5">
                <div>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={5}
                    spaceBetween={16}
                    navigation={{
                      nextEl: `.swiper-button-next-${index}`,
                      prevEl: `.swiper-button-prev-${index}`,
                    }}
                    className="w-full"
                  >
                    {collection?.movies?.length &&
                      collection.movies.map((movie: any) => {
                        return (
                          <SwiperSlide key={movie._id}>
                            <CardItemCollectionUi {...movie} />
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
                <button className={`swiper-button-next swiper-button-next-${index} absolute top-1/2 !right-[0%] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className={`swiper-button-prev swiper-button-prev-${index} absolute top-1/2 !left-[0%] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CollectionList;
