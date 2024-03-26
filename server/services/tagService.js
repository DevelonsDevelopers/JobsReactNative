import axiosInstance from "./axiosInstance";

const tagService = {
    fetchtopTags: async () => {
        try {
            const response = await axiosInstance.get('/tags/top');
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default tagService;