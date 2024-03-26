import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import planService from "../services/planService"

const initialState = {
    loading: false,
    plans: [],
    error: ''
}

const fetchPlansByType = createAsyncThunk('fetchPlansByType', async (payload) => {
    try {
        const plans = await planService.fetchPlansByType(payload);
        return plans;
    } catch (error) {
        throw error;
    }
})

const planSlice = createSlice({
    name: "planSlice",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchPlansByType.pending, state => {
                state.loading = true;
            })
            .addCase(fetchPlansByType.fulfilled, (state, action) => {
                state.loading = false;
                state.plans = action.payload.plans;
            })
            .addCase(fetchPlansByType.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const planActions = {
    fetchPlansByType
};

export default planSlice.reducer;