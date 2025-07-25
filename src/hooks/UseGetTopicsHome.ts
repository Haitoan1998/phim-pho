import { getHomeTopic } from "@/lib/api/productService";
import React, { useEffect, useState } from "react";
const gradients = [
  "bg-gradient-to-br from-[#614385] to-[#516395]", // Deep Purple to Blue
  "bg-gradient-to-br from-[#2193b0] to-[#6dd5ed]", // Gentle Blue
  "bg-gradient-to-br from-[#cc2b5e] to-[#753a88]", // Soft Purple
  "bg-gradient-to-br from-[#56ab2f] to-[#a8e063]", // Natural Green
  "bg-gradient-to-br from-[#283c86] to-[#45a247]", // Deep Blue to Green
  "bg-gradient-to-br from-[#4568DC] to-[#B06AB3]", // Soft Blue to Purple
  "bg-gradient-to-br from-[#11998e] to-[#38ef7d]", // Fresh Green
  "bg-gradient-to-br from-[#3494E6] to-[#EC6EAD]", // Sky Blue to Pink
  "bg-gradient-to-br from-[#1f4037] to-[#99f2c8]", // Forest Green
  "bg-gradient-to-br from-[#5C258D] to-[#4389A2]", // Royal Purple to Blue
];
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
  console.log(topics);
  return { topics, loading, error };
};
