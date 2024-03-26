import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import coverletterService from "../services/coverletterService"

const initialState = {
    loading: false,
    fetched: false,
    data: [],
    error: '',

}

const fetchCoverLetter = createAsyncThunk('fetchCoverLetter',() => {
    return coverletterService.fetchByUser();
})



const coverletter = createSlice({
    name: "coverletter",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchCoverLetter.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchCoverLetter.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(fetchCoverLetter.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

    }
})

export default coverletter.reducer;