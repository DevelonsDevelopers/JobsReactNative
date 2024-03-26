import axiosInstance from "./axiosInstance";

const seekerService = {
    fetchById: async (payload) => {
        try {
            const response = await axiosInstance.post('/seekers/get', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    fetchByEmail: async (payload) => {
        try {
            const response = await axiosInstance.post('/seekers/email', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    checkSeeker: async (payload) => {
        try {
            const response = await axiosInstance.post('/seekers/check', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    fetchRecommendedUsers: async (payload) => {
        try {
            const response = await axiosInstance.post('/seekers/recommended', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateSeeker: async (payload) => {
        try {
            const response = await axiosInstance.put('/seekers/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    verifySeeker: async (payload) => {
        try {
            const response = await axiosInstance.put('/seekers/verify', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    roleUpdate: async (payload) => {
        try {
            const response = await axiosInstance.put('/seekers/role', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default seekerService;