import axiosInstance from "./axiosInstance";

const savedServices = {
    allSaved: async (payload) => {
        try {
            const response = await axiosInstance.post('/bookmarks/all', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default savedServices;