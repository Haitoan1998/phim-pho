"use client";
import { UseGetColletionList } from "@/hooks/UseGetColletionList";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CollectionList.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import CardItemCollectionUi from "@/components/ui/CardItemCollectionUi";
import { Navigation, Pagination } from "swiper/modules";

const params = {
  page: 1,
  limit: 4,
};
const CollectionList = () => {
  const { collections }= UseGetColletionList(params);
  return (
    <div className="collection-wrapper mt-12 rounded-2xl p-8 flex gap-8 flex-col">
      {collections?.length > 0 &&
        collections.slice(0,3).map((collection: any, index: number) => {
          return (
            <div key={collection._id} className="flex justify-center items-center gap-4">
              <div className="flex-none pr-6 pl-2 gap-6 flex flex-col max-w-[200px] text-left">
                <div className={`bg-clip-text text-transparent text-3xl leading-[1.3] !shadow-none tracking-[1px] !font-bold ${collection.gradient}`}>{collection.name}</div>
                <div className="text-xs text-white font-bold flex items-center gap-2">
                  <div>Xem Toàn bộ</div> <FontAwesomeIcon icon={faAngleRight} className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
              <div className="flex-1 overflow-hidden">
                <Swiper
                  slidesPerView={5}
                  spaceBetween={16}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true} // ✅ thêm dòng này
                  modules={[Pagination, Navigation]}
                >
                  {collection?.movies?.length &&
                    collection.movies.map((movie: any, index: number) => {
                      return (
                        <SwiperSlide key={movie._id}>
                          <CardItemCollectionUi {...movie} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CollectionList;
