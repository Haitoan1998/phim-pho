"use client";
import { getCollectionFilm } from "@/lib/api/productService";
import { gradients } from "@/lib/constants";
import { LayoutCard } from "@/types/type";
import { useEffect, useState, useCallback } from "react";

export const useGetCollectionList = (param?: { page: number; limit: number }) => {
  const [data, setData] = useState<any[]>([]);
  const [dataTopicFilm, setDataTopicFilm] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const [page, setPage] = useState(param?.page || 1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCollection = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCollectionFilm({ page, limit: param?.limit || 4 });

      if (!response?.status || !response.result?.collections) {
        throw new Error("API failed or malformed data");
      }

      const collections = response.result.collections;
      if (collections.length === 0) {
        setHasMore(false); // Không còn dữ liệu để load
        return;
      }

      const dataTopic = collections.filter((item: any) => item.style.toString() === LayoutCard.TOPIC.toString());
      const dataOther = collections.filter((item: any) => item.style.toString() !== LayoutCard.TOPIC.toString());

      const dataWithGradients = dataTopic.map((item: any) => ({
        ...item,
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
      }));

      setDataTopicFilm((prev) => [...prev, ...dataWithGradients]);
      setData((prev) => [...prev, ...dataOther]);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [page, param?.limit]);

  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  // Listen scroll
  useEffect(() => {
    if (!param) return;
    const handleScroll = () => {
      const scrollY = window.innerHeight + window.scrollY;
      const fullHeight = document.documentElement.offsetHeight;

      if (scrollY >= fullHeight - 200 && !loading && hasMore) {
        setPage((prevPage) => prevPage + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return { dataTopicFilm, collections: data, loading, error };
};
