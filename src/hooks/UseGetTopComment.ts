"use client"
import { getTopComment } from "@/lib/api/productService";
import React, { useEffect, useState } from "react";

export const useGetTopComment = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  useEffect(() => {
    const fetchTopComment = async () => {
      try {
        setLoading(true);
        const response = await getTopComment(); // Adjust the API endpoint as needed
        if (!response.status) {
          throw new Error("Network response was not ok");
        }
        setComments(response.result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTopComment();
  }, []);
  return { comments, loading, error };
};
