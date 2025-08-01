import { getHomeTopic } from "@/lib/api/productService";
import React, { useEffect, useState } from "react";
const gradients = [
  "bg-gradient-to-br from-[#fbc2eb] to-[#a6c1ee]", // Hồng phấn đến xanh nhạt
  "bg-gradient-to-br from-[#fddb92] to-[#d1fdff]", // Vàng nhạt đến xanh baby
  "bg-gradient-to-br from-[#ffecd2] to-[#fcb69f]", // Cam nhạt đến be hồng
  "bg-gradient-to-br from-[#a1c4fd] to-[#c2e9fb]", // Xanh dương baby
  "bg-gradient-to-br from-[#f6d365] to-[#fda085]", // Vàng cam pastel
  "bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc]", // Tím nhạt đến xanh nhạt
  "bg-gradient-to-br from-[#fccb90] to-[#d57eeb]", // Vàng kem đến tím hồng
  "bg-gradient-to-br from-[#fda085] to-[#f6d365]", // Cam pastel đến vàng
  "bg-gradient-to-br from-[#ff9a9e] to-[#fad0c4]", // Hồng tươi đến hồng đào
  "bg-gradient-to-br from-[#c2ffd8] to-[#465efb]", // Xanh mint đến xanh cobalt
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
