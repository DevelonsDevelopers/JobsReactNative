import axiosInstance from "./axiosInstance";

const jobService = {
    recent: async () => {
        try {
            const response = await axiosInstance.get('/jobs/recent')
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    all: async (payload) => {
        try {
            const response = await axiosInstance.post('/jobs/jobs', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    recommended: async (payload) => {
        try {
            const response = await axiosInstance.post('/jobs/recommended', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByID: async () => {
        try {
            const response = await axiosInstance.post('/jobs/get', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByCategory: async (payload) => {
        try {
            const response = await axiosInstance.post('/jobs/category', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByCity: async (payload) => {
        try {
            const response = await axiosInstance.post('/jobs/city', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByCompany: async () => {
        try {
            const response = await axiosInstance.post('/jobs/company', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByProvider: async () => {
        try {
            const response = await axiosInstance.post('/jobs/provider', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    getByProviderFeatured: async () => {
        try {
            const response = await axiosInstance.post('/jobs/providerFeatured', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
}

export default jobService;
