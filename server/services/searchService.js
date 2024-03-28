import axiosInstance from "./axiosInstance";

const searchService = {
    search: async (payload) => {
        try {
            const response = await axiosInstance.post('/jobs/search', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default searchService;