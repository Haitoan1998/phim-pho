import React from "react";
import "./colletion.scss";
import RenderCollection from "../RenderCollection";
import { useGetCollectionList } from "@/hooks/useGetCollectionList";
import { LayoutCard, LayoutSwiperOptions } from "@/types/type";
const params = {
  page: 1,
  limit: 4,
};
const CollectionList = () => {
  const { collections, loading } = useGetCollectionList(params);
  const layoutSwiper = (style: LayoutCard) => {
    if (style === LayoutCard.CARD_VERTICAL) {
      return LayoutSwiperOptions[LayoutCard.CARD_VERTICAL];
    }
    if (style === LayoutCard.CARD_VERTICAL_CUT) {
      return LayoutSwiperOptions[LayoutCard.CARD_VERTICAL_CUT];
    }
    if (style === LayoutCard.CARD_HORIZONTAL_WITH_POSTER) {
      return LayoutSwiperOptions[LayoutCard.CARD_HORIZONTAL_WITH_POSTER];
    }
    if (style === LayoutCard.CARD_HORIZONTAL_COMING) {
      return LayoutSwiperOptions[LayoutCard.CARD_HORIZONTAL_COMING];
    }
    return LayoutSwiperOptions[LayoutCard.CARD_VERTICAL];
  }
  if (!collections.length) return null;
  return (
    <>
      {collections.map((collection: any) => {
        if (!collection.movies.length) return null;
        return (
          <div key={collection.id}>
            <div className="text-white text-2xl font-bold mb-6 mt-12 text-left">{collection.name}</div>
            <div className="w-full relative">
              <RenderCollection style={collection.style} data={collection} layoutSwiper={layoutSwiper(collection.style)} />
            </div>
          </div>
        );
      })}
      {loading && (
        <div className="flex justify-center items-center px-12 h-[200px] relative">
          <div className="v-loader"></div>
        </div>
      )}
    </>
  );
};

export default CollectionList;
