import axiosInstance from "./axiosInstance";

const offerService = {
    sendOffer: async (payload) => {
        try {
            const response = await axiosInstance.post('/offers/create', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    sendOfferByCompany: async ( payload ) => {
        try {
            const response = await axiosInstance.post('/offers/company', payload );
            return response.data;
        } catch (error) {
            throw error
        }
    },
    sendOfferByJob: async ( payload ) => {
        try {
            const response = await axiosInstance.post('/offers/job', payload );
            return response.data;
        } catch (error) {
            throw error
        }
    },
    offerByUser: async ( payload ) => {
        try {
            const response = await axiosInstance.post('/offers/user', payload );
            return response.data;
        } catch (error) {
            throw error
        }
    },
    offerById: async ( payload ) => {
        try {
            const response = await axiosInstance.post('/offers/id', payload );
            return response.data;
        } catch (error) {
            throw error
        }
    },
    offerResponse: async ( payload ) => {
        try {
            const response = await axiosInstance.post('/offers/update', payload );
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default offerService;