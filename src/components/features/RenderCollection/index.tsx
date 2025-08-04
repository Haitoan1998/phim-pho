import CardVerticalFilmUi from "@/components/ui/CardLayoutUi/CardVerticalFilmUi";
import { LayoutCard } from "@/types/type";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import React from "react";
import CardVerticalCutFilmUi from "@/components/ui/CardLayoutUi/CardVerticalCutFilmUi.tsx";
import CardHorizontalWithPoster from "@/components/ui/CardLayoutUi/CardHorizontalWithPoster";
import CardHorizontalComing from "@/components/ui/CardLayoutUi/CardHorizontalComing";
interface Props {
  style: LayoutCard;
  data: any;
  layoutSwiper: {
    slidesPerView: number;
    spaceBetween: number;
  }
}
const RenderCollection = (props: Props) => {
  const renderLayoutCollection = (style: LayoutCard, movies:any, index?:number) => {
    if (style === LayoutCard.CARD_VERTICAL) {
      return <CardVerticalFilmUi {...movies} />;
    }
    if (style === LayoutCard.CARD_VERTICAL_CUT) {
      return <CardVerticalCutFilmUi {...movies} index={index} />;
    }
    if (style === LayoutCard.CARD_HORIZONTAL_WITH_POSTER) {
      return <CardHorizontalWithPoster {...movies} />;
    }
    if (style === LayoutCard.CARD_HORIZONTAL_COMING) {
      return <CardHorizontalComing {...movies} />;
    }
    return null;
  };
  if (!props.data?.movies?.length) return null;
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={props.layoutSwiper.slidesPerView}
      spaceBetween={props.layoutSwiper.spaceBetween}
      navigation={{
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
      }}
      className="w-full"
    >
      {props.data?.movies?.map((movie: any, index: number) => (
        <SwiperSlide>{renderLayoutCollection(props.style, movie, index)}</SwiperSlide>
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
