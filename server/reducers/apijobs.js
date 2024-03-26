import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jobsApiService from "../services/jobsApiService";

const initialState = {
  loading: false,
  recentloading: false,
  fetched: false,
  jobsData: [],
  recentData: [],
  recentError: false,
  error: false,
};

const jobsbyid = createAsyncThunk("jobsbyid", () => {
  return jobsApiService.fetchJobsApiId();
});

const recentjobs = createAsyncThunk("recentjobs", () => {
  return jobsApiService.fetchApiJobsRecent();
});

const apiJobs = createSlice({
  name: "apiJobs",
  initialState,
  extraReducers: (builder) => {

    // apijobs =======

    builder.addCase(jobsbyid.pending, (state) => {
      state.loading = true;
      state.error = false
    });
    builder.addCase(jobsbyid.fulfilled, (state, action) => {
      state.loading = false;
      state.jobsData = action.payload.data;
      state.fetched = true;
    });
    builder.addCase(jobsbyid.rejected, (state, action) => {
      state.loading = false;
      state.error = true
    });

    // recentjobs =======

    builder.addCase(recentjobs.pending, (state) => {
      state.recentloading = true;
      state.recentError = false
    });
    builder.addCase(recentjobs.fulfilled, (state, action) => {
      state.recentloading = false;
      state.recentData = action.payload.data;
     });
    builder.addCase(recentjobs.rejected, (state, action) => {
      state.recentloading = false;
      state.recentError = true
    });



  },
});

export default apiJobs.reducer;
