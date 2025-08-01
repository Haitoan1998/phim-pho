import CardVerticalFilmUi from "@/components/ui/CardLayoutUi/CardVerticalFilmUi";
import { LayoutCard } from "@/types/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
interface Props {
  style: LayoutCard;
  data: any;
}
const RenderCollection = (props: Props) => {
  console.log(props);
  const renderLayoutCollection = (style: LayoutCard, movies:any) => {
    if (style === LayoutCard.CARD_VERTICAL) {
      return <CardVerticalFilmUi {...movies} />;
    }
    return null;
  };
  if (!props.data || !props.data.movies.length) return null;
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={8}
      spaceBetween={16}
      navigation={{
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      }}
      className="w-full"
    >
      {props.data?.movies?.map((movie: any) => (
        <SwiperSlide>{renderLayoutCollection(props.style, movie)}</SwiperSlide>
      ))}
    </Swiper>
  );
  {
    /* <button className={`swiper-button-next swiper-button-next-${index} absolute top-1/2 !right-[-15px] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <button className={`swiper-button-prev swiper-button-prev-${index} absolute top-1/2 !left-[-15px] -translate-y-1/2 z-10 bg-black/40 hover:bg-black text-white p-2 rounded-full`}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </button> */
  }
};

export default RenderCollection;
