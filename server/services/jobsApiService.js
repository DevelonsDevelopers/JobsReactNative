import axiosInstance from "./axiosInstance";

const jobsApiService = {
    all: async (payload) => {
        try {
            const response = await axiosInstance.post('apiJobs/jobs', payload)
            return response.data;
        } catch (error) {
            throw error;
        }
    },
    fetchJobsApiId: async (payload) => {
        try {
            const response = await axiosInstance.post('/apiJobs/job', payload);
            return response.data;
        } catch (error) {
            throw error
        }
    },
    fetchApiJobsRecent: async () => {
        try {
            const response = await axiosInstance.get('/apiJobs/recent');
            return response.data;
        } catch (error) {
            throw error
        }
    },
}

export default jobsApiService;
