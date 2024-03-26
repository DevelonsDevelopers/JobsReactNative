import axiosInstance from "./axiosInstance";

const cvService = {
    fetchByUser: async (payload) => {
        try {
            const response = await axiosInstance.post('/cv/user', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    check: async (payload) => {
        try {
            const response = await axiosInstance.post('/cv/check', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    cvStatement: async (payload) => {
        try {
            const response = await axiosInstance.post('/cv/statement', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVEducation: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvEducation/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVEducation: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvEducation/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVEducation: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvEducation/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVCareer: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvCareer/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVCareer: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvCareer/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVCareer: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvCareer/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVCourse: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvCourse/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVCourse: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvCourse/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVCourse: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvCourse/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVInterest: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvInterest/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVInterest: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvInterest/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVInterest: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvInterest/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVLanguage: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvLanguage/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVLanguage: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvLanguage/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVLanguage: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvLanguage/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    addCVSkill: async (payload) => {
        try {
            const response = await axiosInstance.post('/cvSkill/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    updateCVSkill: async (payload) => {
        try {
            const response = await axiosInstance.put('/cvSkill/update', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteCVSkill: async (payload) => {
        try {
            const response = await axiosInstance.delete('/cvSkill/delete', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    
}

export default cvService;