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

}
export default deleteService