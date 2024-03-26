import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import categoryService from "../services/categoryService"

const initialState = {
    loading: false,
    featuredLoading: false,
    fetched: false,
    featuredFetched: false,
    categories: [],
    featuredCategories: [],
    error: '',
    featuredError: ''
}

const allCategories = createAsyncThunk('allCategories',() => {
    return categoryService.all();
})

const featuredCategories = createAsyncThunk('featuredCategories',() => {
    return categoryService.featured();
})

const category = createSlice({
    name: "category",
    initialState,
    extraReducers: builder => {
        builder.addCase(allCategories.pending, state => {
            state.loading = true;
        })
        builder.addCase(allCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload.categories;
            state.fetched = true;
        })
        builder.addCase(allCategories.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        builder.addCase(featuredCategories.pending, state => {
            state.featuredLoading = true;
        });
        builder.addCase(featuredCategories.fulfilled, (state, action) => {
            state.featuredLoading = false;
            state.featuredCategories = action.payload.featured_categories;
            state.featuredFetched = true;
        })
        builder.addCase(featuredCategories.rejected, (state, action) => {
            state.featuredLoading = false;
            state.featuredError = action.error.message;
        })
    }
})