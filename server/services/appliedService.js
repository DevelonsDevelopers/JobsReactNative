import axiosInstance from "./axiosInstance";

const appliedService = {
    applyJob: async (payload) => {
        try {
            const response = await axiosInstance.post('/applied/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    applyByUser: async (payload) => {
        try {
            const response = await axiosInstance.post('/applied/user', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    applyByJob: async (payload) => {
        try {
            const response = await axiosInstance.post('/applied/job', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    applyByCompany: async (payload) => {
        try {
            const response = await axiosInstance.post('/applied/company', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default appliedService;