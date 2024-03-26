import axiosInstance from "./axiosInstance";

const planService = {
    fetchPlansByType: async (payload) => {
        try {
            const response = await axiosInstance.post('/plans/type', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default planService;