import axiosInstance from "./axiosInstance";

const countryService = {
    all: async () => {
        try {
            const response = await axiosInstance.get('/countries/all');
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default countryService;