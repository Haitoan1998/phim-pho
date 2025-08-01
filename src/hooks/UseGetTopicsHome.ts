import { getHomeTopic } from "@/lib/api/productService";
import { gradients } from "@/lib/constants";
import React, { useEffect, useState } from "react";

export const UseGetTopicsHome = () => {
  const [topics, setTopics] = useState({ items: [], more: 0 });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchTopics = async () => {
      try {
        setLoading(true);
        const response = await getHomeTopic(); // Adjust the API endpoint as needed
        if (!response.status) {
          throw new Error("Network response was not ok");
        }
        const dataWithGradients = response.result.items.map((item: any) => ({
          ...item,
          gradient: gradients[Math.floor(Math.random() * gradients.length)],
        }));
        response.result.items = dataWithGradients;
        setTopics(response.result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);
  return { topics, loading, error };
};
