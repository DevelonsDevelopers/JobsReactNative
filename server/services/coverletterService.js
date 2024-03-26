import axiosInstance from "./axiosInstance";

const coverletterService = {
    fetchByUser: async (payload) => {
        try {
            const response = await axiosInstance.get('/cover/user', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default coverletterService;