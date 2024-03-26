import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import tagService from "../services/tagService"

const initialState = {
    loading: false,
    featuredLoading: false,
    fetched: false,
    tags: [],
    featuredTags: [],
    error: '',
    featuredError: ''
}

const featuredTags = createAsyncThunk('featuredTags', () => {
    return tagService.fetchtopTags();
})

const tags = createSlice({
    name: "tag",
    initialState,
    extraReducers: builder => {
        builder.addCase(featuredTags.pending, state => {
            state.featuredLoading = true
        } )
        builder.addCase(featuredTags.fulfilled, (state, action) => {
            state.featuredLoading = false;
            state.featuredTags = action.payload.featured_tags;
            state.featuredFetched = true;
        })
        builder.addCase(featuredTags.rejected, (state, action) => {
            state.featuredLoading = false;
            state.featuredError = action.error.message;
        })    }
})

export default tags.reducer;
