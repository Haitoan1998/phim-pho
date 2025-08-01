"use client";
import BannerHome from "@/components/features/BannerHome";
import CollectionList from "@/components/features/CollectionList";
import CollectionTopicList from "@/components/features/CollectionTopicList";
import Rankings from "@/components/features/Rankings";
import TopComment from "@/components/features/TopComment";
import CardTopicUi from "@/components/ui/CardTopicUi";
import LoadingWelcome from "@/components/ui/LoadingWelcome";
import { UseGetTopicsHome } from "@/hooks/UseGetTopicsHome";

export default function page() {
  const { topics } = UseGetTopicsHome();
  return (
    <>
      <section>
        <BannerHome />
        <div className="w-full px-8">
          <CardTopicUi data={topics?.items} more={topics?.more} title="Bạn đang quan tâm gì?" />
          <CollectionTopicList />
          <TopComment />
          <Rankings/>
          <CollectionList/>
        </div>
      </section>
      <LoadingWelcome />
    </>
  );
}
