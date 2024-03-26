import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import jobService from "../services/jobService";

const initialState = {
  // loadings ======
  allLoading: false,
  recentLoading: false,
  recommendedLoading: false,
  idLoading: false,
  categoryLoading: false,
  cityLoading: false,
  companyLoading: false,
  providerLoading: false,
  providerfeatureLoading: false,

  // error ======
  allError: false,
  recentError: false,
  recommendedError: false,
  idError: false,
  categoryError: false,
  cityError: false,
  companyError: false,
  providerError: false,
  providerfeatureError: false,

  // data ======
  allData: [],
  recentData: [],
  recommendedData: [],
  idData: [],
  categoryData: [],
  cityData: [],
  companyData: [],
  providerData: [],
  providerfeatureData: [],
};

const fetchrecentjobs = createAsyncThunk("fetchrecentjobs", () => {
  return jobService.recent();
});

const fetchalljobs = createAsyncThunk("fetchalljobs", () => {
  return jobService.all();
});

const fetchrecommendedjobs = createAsyncThunk("fetchrecommendedjobs", () => {
  return jobService.recommended();
});

const fetchbyid = createAsyncThunk("fetchbyid", () => {
  return jobService.getByID();
});

const fetchbycategory = createAsyncThunk("fetchbycategory", () => {
  return jobService.getByCategory();
});

const fetchbycity = createAsyncThunk("fetchbycity", () => {
  return jobService.getByCity();
});

const fetchbycompany = createAsyncThunk("fetchbycompany", () => {
  return jobService.getByCompany();
});

const fetchbyprovider = createAsyncThunk("fetchbyprovider", () => {
  return jobService.getByProvider();
});

const fetchbyproviderfeatured = createAsyncThunk(
  "fetchbyproviderfeatured",
  () => {
    return jobService.getByProviderFeatured();
  }
);

const jobs = createSlice({
  name: "job",
  initialState,
  extraReducers: (builder) => {
    // recent jobs==============

    builder.addCase(fetchrecentjobs.pending, (state) => {
      state.recentLoading = true;
      state.recentError = false;
    });
    builder.addCase(fetchrecentjobs.fulfilled, (state, action) => {
      state.recentLoading = false;
      state.recentData = action.payload.data;

      console.log('recent jobs ' , action);
      state.recentError = false;
    });
    builder.addCase(fetchrecentjobs.rejected, (state, action) => {
      state.recentLoading = false;
      state.recentError = false;
    });

    // all jobs==============

    builder.addCase(fetchalljobs.pending, (state) => {
      state.allLoading = true;
      state.allError = false;
    });
    builder.addCase(fetchalljobs.fulfilled, (state, action) => {
      state.allLoading = false;
      state.allData = action.payload.data;
      state.allError = false;
    });
    builder.addCase(fetchalljobs.rejected, (state, action) => {
      state.allLoading = false;
      state.allError = false;
    });

    // recommended jobs==============

    builder.addCase(fetchrecommendedjobs.pending, (state) => {
      state.recommendedLoading = true;
      state.recommendedError = false;
    });
    builder.addCase(fetchrecommendedjobs.fulfilled, (state, action) => {
      state.recommendedLoading = false;
      state.recommendedData = action.payload.data;
      state.recommendedError = false;
    });
    builder.addCase(fetchrecommendedjobs.rejected, (state, action) => {
      state.recommendedLoading = false;
      state.recommendedError = false;
    });

    // by id jobs==============

    builder.addCase(fetchbyid.pending, (state) => {
      state.idLoading = true;
      state.idError = false;
    });
    builder.addCase(fetchbyid.fulfilled, (state, action) => {
      state.idLoading = false;
      state.idData = action.payload.data;
      state.idError = false;
    });
    builder.addCase(fetchbyid.rejected, (state, action) => {
      state.idLoading = false;
      state.idError = false;
    });

    // by category jobs==============

    builder.addCase(fetchbycategory.pending, (state) => {
      state.categoryLoading = true;
      state.categoryError = false;
    });
    builder.addCase(fetchbycategory.fulfilled, (state, action) => {
      state.categoryLoading = false;
      state.categoryData = action.payload.data;
      state.categoryError = false;
    });
    builder.addCase(fetchbycategory.rejected, (state, action) => {
      state.categoryLoading = false;
      state.categoryError = false;
    });

    // by city jobs==============

    builder.addCase(fetchbycity.pending, (state) => {
      state.cityLoading = true;
      state.cityError = false;
    });
    builder.addCase(fetchbycity.fulfilled, (state, action) => {
      state.cityLoading = false;
      state.cityData = action.payload.data;
      state.cityError = false;
    });
    builder.addCase(fetchbycity.rejected, (state, action) => {
      state.cityLoading = false;
      state.cityError = false;
    });

    // provider featured jobs==============

    builder.addCase(fetchbyproviderfeatured.pending, (state) => {
      state.providerfeatureLoading = true;
      state.providerfeatureError = false;
    });
    builder.addCase(fetchbyproviderfeatured.fulfilled, (state, action) => {
      state.providerfeatureLoading = false;
      state.providerfeatureData = action.payload.data;
      state.providerfeatureError = false;
    });
    builder.addCase(fetchbyproviderfeatured.rejected, (state, action) => {
      state.providerfeatureLoading = false;
      state.providerfeatureError = false;
    });
  },
});

export default jobs.reducer;
