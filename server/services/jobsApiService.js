import axiosInstance from "./axiosInstance";

const jobsApiService = {
    fetchJobsApiId: async (payload) => {
        try {
            const response = await axiosInstance.post('/apiJobs/job', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    fetchApiJobsRecent: async (payload) => {
        try {
            const response = await axiosInstance.post('/apiJobs/recent', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default jobsApiService;