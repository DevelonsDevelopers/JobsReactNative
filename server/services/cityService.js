import axiosInstance from "./axiosInstance";

const cityService = {
    all: async () => {
        try {
            const response = await axiosInstance.get('/cities/all');
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default cityService;