import axiosInstance from "./axiosInstance";

const registService = {
  register: async (payload) => {
    try {
      const response = await axiosInstance.post('/providerAuth/register', payload);
      return response.data;
    } catch (error) {
      throw error;
      console.log('error' , error);
    }
  },
  seekerRegister: async (payload) => {
    try {
      const response = await axiosInstance.post('/seekerAuth/register', payload);
      return response.data;
    } catch (error) {
      throw error;
      console.log('error' , error);
    }
  },
};

export default registService;
