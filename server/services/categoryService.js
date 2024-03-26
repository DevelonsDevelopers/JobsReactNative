import axiosInstance from "./axiosInstance";

const categoryService = {
    featured: async () => {
        try {
            const response = await axiosInstance.get('/categories/featured');
            return response.data;
        } catch (error) {
            throw error
        }
    },
    all: async () => {
        try {
            const response = await axiosInstance.get('/categories/all');
            return response.data;
        } catch (error) {
            throw error
        }
    }
}

export default categoryService;