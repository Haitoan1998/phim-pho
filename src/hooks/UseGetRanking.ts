"use client";
import { getLatestComments, getMostCommentedRanking, getMostFavoriteRanking, getMostPopularRanking } from "@/lib/api/productService";
import { useEffect, useState } from "react";
type RankingData = {
  mostCommented: any;
  mostFavorite: any;
  mostPopular: any;
  latestComments: any;
};
export const UseGetRanking = () => {
  const [data, setData] = useState<RankingData>({
    mostCommented: [],
    mostFavorite: [],
    mostPopular: [],
    latestComments: [],
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setLoading(true);
        const mostCommented = await getMostCommentedRanking();
        const mostFavorite = await getMostFavoriteRanking();
        const mostPopular = await getMostPopularRanking();
        const latestComments = await getLatestComments();
        if (!mostCommented.status || !mostFavorite.status || !mostPopular.status) {
          throw new Error("Network response was not ok");
        }
        setData({
          mostCommented,
          mostFavorite,
          mostPopular,
          latestComments
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRanking();
  }, []);
  return { ...data, loading, error };
};
