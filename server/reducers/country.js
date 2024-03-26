import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import countryService from "../services/countryService"

const initialState = {
    loading: false,
    fetched: false,
    countries: [],
    error: '',
}

const allCountries = createAsyncThunk('allCountries',() => {
    return countryService.all();
})

const country = createSlice({
    name: "country",
    initialState,
    extraReducers: builder => {
        builder.addCase(allCountries.pending, state => {
            state.loading = true;
        })
        builder.addCase(allCountries.fulfilled, (state, action) => {
            state.loading = false;
            state.countries = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(allCountries.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
    }
})

export default country.reducer
export const { successListener } = country.actions