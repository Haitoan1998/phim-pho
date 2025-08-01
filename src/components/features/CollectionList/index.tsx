import React from "react";
import { UseGetColletionList } from "@/hooks/UseGetColletionList";
import RenderCollection from "../RenderCollection";
const params = {
  page: 1,
  limit: 4,
};
const CollectionList = () => {
  const { collections } = UseGetColletionList(params);
  if (!collections.length) return null;
  return collections.map((collection: any, index: number) => {
    return (
      <div key={index}>
        <div className="text-white text-2xl font-bold mb-6 mt-12 text-left">{collection.name}</div>
        <div>
          <div className="w-full relative">
            <RenderCollection style={collection.style} data={collection} />
          </div>
        </div>
      </div>
    );
  });
};

export default CollectionList;
