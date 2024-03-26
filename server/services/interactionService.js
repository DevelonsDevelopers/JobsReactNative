import axiosInstance from "./axiosInstance";

const interactionService = {
    all: async (payload) => {
        try {
            const response = await axiosInstance.post('/interactions/user', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default interactionService;