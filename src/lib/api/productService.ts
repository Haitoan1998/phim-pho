import axiosInstance from "../axiosInstance";

export const getHomeFilmHot = async () => {
    try {
        const response = await axiosInstance.get("/api/movie/hot");
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch films hot");
        }
    } catch (error) {
        console.error("Error fetching films hot:", error);
        throw error;
    }
}
export const getHomeTopic = async () => {
    try {
        const response = await axiosInstance.get("/api/collection/homepageTopics");
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error("Failed to fetch homepage topics");
        }
    } catch (error) {
        console.error("Error fetching homepage topics:", error);
        throw error;
    }
}