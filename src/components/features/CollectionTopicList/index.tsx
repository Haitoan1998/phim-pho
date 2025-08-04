"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CollectionTopicList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import CardItemTopicFilmUi from "@/components/ui/CardItemTopicFilmUi";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useGetCollectionList } from "@/hooks/useGetCollectionList";

const CollectionTopicList = () => {
  const { dataTopicFilm,loading} = useGetCollectionList();
  if (!dataTopicFilm?.length) return null;
  return (
    <div className="collection-wrapper mt-12 rounded-2xl p-8 flex flex-col gap-8">
      {dataTopicFilm?.length > 0 &&
        dataTopicFilm.map((collection: any, index: number) => {
          return (
            <div key={collection._id} className="flex items-center gap-4 w-full">
              <div className="w-1/7 pr-6 pl-2 gap-6 flex flex-col text-left">
                <div className={`bg-clip-text text-transparent text-3xl leading-[1.3] !shadow-none tracking-[1px] !font-bold ${collection.gradient}`}>{collection.name}</div>
                <div className="text-xs text-white font-bold flex items-center gap-2 group cursor-pointer">
                  <div>Xem Toàn bộ</div>
                  <FontAwesomeIcon icon={faAngleRight} className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <div className="w-6/7 relative">
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
                    collection.movies.map((movie: any) => (
                      <SwiperSlide key={movie._id}>
                        <CardItemTopicFilmUi {...movie} />
                      </SwiperSlide>
                    ))}
                </Swiper>
                <button className={`swiper-button-next swiper-button-next-${index} absolute top-1/2 !right-[-15px] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
                  <FontAwesomeIcon icon={faAngleRight} />
                </button>
                <button className={`swiper-button-prev swiper-button-prev-${index} absolute top-1/2 !left-[-15px] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
                  <FontAwesomeIcon icon={faAngleLeft} />
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CollectionTopicList;
