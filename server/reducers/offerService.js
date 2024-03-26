import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import offerService from "../services/offerService";

const initialState = {
  loading: false,
  offer: {},
  error: "",
};

// Async thunks
const sendOffer = createAsyncThunk("sendOffer", async (payload) => {
  try {
    const offer = await offerService.sendOffer(payload);
    return offer;
  } catch (error) {
    throw error;
  }
});

const sendOfferByCompany = createAsyncThunk(
  "sendOfferByCompany",
  async (payload) => {
    try {
      const offer = await offerService.sendOfferByCompany(payload);
      return offer;
    } catch (error) {
      throw error;
    }
  }
);

const sendOfferByJob = createAsyncThunk("sendOfferByJob", async (payload) => {
  try {
    const offer = await offerService.sendOfferByJob(payload);
    return offer;
  } catch (error) {
    throw error;
  }
});

const offerByUser = createAsyncThunk("offerByUser", async (payload) => {
  try {
    const offer = await offerService.offerByUser(payload);
    return offer;
  } catch (error) {
    throw error;
  }
});

const offerById = createAsyncThunk("offerById", async (payload) => {
  try {
    const offer = await offerService.offerById(payload);
    return offer;
  } catch (error) {
    throw error;
  }
});

const offerResponse = createAsyncThunk("offerResponse", async (payload) => {
  try {
    const response = await offerService.offerResponse(payload);
    return response;
  } catch (error) {
    throw error;
  }
});

const offerSlice = createSlice({
  name: "offer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(sendOffer.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOffer.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(sendOffer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendOfferByCompany.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOfferByCompany.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(sendOfferByCompany.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(sendOfferByJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendOfferByJob.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(sendOfferByJob.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(offerByUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(offerByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(offerByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(offerById.pending, (state) => {
        state.loading = true;
      })
      .addCase(offerById.fulfilled, (state, action) => {
        state.loading = false;
        state.offer = action.payload;
      })
      .addCase(offerById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(offerResponse.pending, (state) => {
        state.loading = true;
      })
      .addCase(offerResponse.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Offer response updated successfully";
      })
      .addCase(offerResponse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const offerActions = {
  sendOffer,
  sendOfferByCompany,
  sendOfferByJob,
  offerByUser,
  offerById,
  offerResponse,
};

export default offerSlice.reducer;
