import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import cityService from "../services/cityService"

const initialState = {
    loading: false,
    fetched: false,
    cities: [],
    error: '',
}

const allCities = createAsyncThunk('allCities',() => {
    return cityService.all();
})

const city = createSlice({
    name: "city",
    initialState,
    extraReducers: builder => {
        builder.addCase(allCities.pending, state => {
            state.loading = true;
        })
        builder.addCase(allCities.fulfilled, (state, action) => {
            state.loading = false;
            state.cities = action.payload.cities;
            state.fetched = true;
        })
        builder.addCase(allCities.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})