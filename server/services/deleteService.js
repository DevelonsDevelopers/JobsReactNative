import axiosInstance from "./axiosInstance";

const deleteService = {
    deleteSeeker: async (id) => {
        try {
            const response = await axiosInstance.delete('/seekers/delete', id);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    deleteProvider: async (id) => {
        console.log('id delete provider', id);
        try {
            const response = await axiosInstance.delete('/companies/delete', { data: { id } });
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    

}
export default deleteService