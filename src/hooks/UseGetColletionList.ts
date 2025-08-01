"use client"
import { getCollectionFilm } from "@/lib/api/productService";
import { gradients } from "@/lib/constants";
import { LayoutCard } from "@/types/type";
import { useEffect, useState } from "react";

export const UseGetColletionList = (param: { page: number; limit: number }) => {
  const [data, setData] = useState<any[]>([]);
  const [dataTopicFilm, setDataTopicFilm] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        const response = await getCollectionFilm(param); // Adjust the API endpoint as needed
        if (!response.status) {
          throw new Error("Network response was not ok");
        }
        const dataTopicFilm = response.result.collections.filter((item: any) => item.style.toString() === LayoutCard.TOPIC.toString())
        const dataColletionsList = response.result.collections.filter((item: any) => item.style.toString() !== LayoutCard.TOPIC.toString())
        const dataWithGradients = dataTopicFilm.map((item: any) => ({
          ...item,
          gradient: gradients[Math.floor(Math.random() * gradients.length)],
        }));
        setDataTopicFilm((prev) => [...prev, ...dataWithGradients]);
        setData((prev) => [...prev, ...dataColletionsList]);
        setLoading(false);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCollection();
  }, []);
  return { dataTopicFilm, collections: data, loading, error };
};
