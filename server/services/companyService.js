import axiosInstance from "./axiosInstance";

const companyService = {
    all: async () => {
        try {
            const response = await axiosInstance.get('/companies/all');
            return response.data;
        } catch (error) {
            throw error
        }
    },
    get: async (payload) => {
        try {
            const response = await axiosInstance.post('/companies/get' , payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    getCompanyById: async (payload) => {
        try {
            const response = await axiosInstance.post('/companies/user' , payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCompany: async (payload) => {
        try {
            const response = await axiosInstance.put('/companies/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    verifyCompany: async () => {
        try {
            const response = await axiosInstance.put('/companies/verify', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    completeCompany: async () => {
        try {
            const response = await axiosInstance.put('/companies/complete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    completeRegistration: async () => {
        try {
            const response = await axiosInstance.put('/companies/registration', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default companyService;