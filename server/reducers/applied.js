import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import appliedService from "../services/appliedService"

const initialState = {
    loading: false,
    applied: [],
    error: '',
    fetched: false
}

const createApplied = createAsyncThunk('createApplied',() => {
    return appliedService.applyJob();
})
const appliedByUser = createAsyncThunk('appliedByUser',() => {
    return appliedService.applyByUser();
})
const applyByJob = createAsyncThunk('applyByJob',() => {
    return appliedService.applyByJob();
})
const applyByCompany = createAsyncThunk('applyByCompany',() => {
    return appliedService.applyByCompany();
})


const category = createSlice({
    name: "category",
    initialState,
    extraReducers: builder => {
        builder.addCase(createApplied.pending, state => {
            state.loading = true;
        })
        builder.addCase(createApplied.fulfilled, (state, action) => {
            state.loading = false;
            state.applied = action.payload.applied;
            state.fetched = true;
        })
        builder.addCase(createApplied.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        
        builder.addCase(appliedByUser.pending, state => {
            state.loading = true;
        })
        builder.addCase(appliedByUser.fulfilled, (state, action) => {
            state.loading = false;
            state.applied = action.payload.applied;
            state.fetched = true;
        })
        builder.addCase(appliedByUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(applyByJob.pending, state => {
            state.loading = true;
        })
        builder.addCase(applyByJob.fulfilled, (state, action) => {
            state.loading = false;
            state.applied = action.payload.applied;
            state.fetched = true;
        })
        builder.addCase(applyByJob.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(applyByCompany.pending, state => {
            state.loading = true;
        })
        builder.addCase(applyByCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.applied = action.payload.applied;
            state.fetched = true;
        })
        builder.addCase(applyByCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})