import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import companyService from "../services/companyService"

const initialState = {
    loading: false,
    fetched: false,
    companies: [],
    verifyCompany: [],
    completeCompany: [],
    completeRegistration: [],
    error: '',
}

const allCompanies = createAsyncThunk('allCompanies',() => {
    return companyService.all();
})
const getCompany = createAsyncThunk('getCompany',() => {
    return companyService.get();
})
const updateCompany = createAsyncThunk('updateCompany',(data) => {
    return companyService.updateCompany(data).then(response => {
        if (response.success){
            return data.id
        } else {
            return 0
        }
    })
})

const verifyCompany = createAsyncThunk('verifyCompany',() => {
    return companyService.verifyCompany(data).then(response => {
        if (response.success){
            return data.id
        } else {
            return 0
        }
    })
})

const completeCompany = createAsyncThunk('completeCompany',() => {
    return companyService.completeCompany(data).then(response => {
        if (response.success){
            return data.id
        } else {
            return 0
        }
    })
})

const completeRegistration = createAsyncThunk('completeRegistration',() => {
    return companyService.completeRegistration(data).then(response => {
        if (response.success){
            return data.id
        } else {
            return 0
        }
    })
})

const company = createSlice({
    name: "Company",
    initialState,
    extraReducers: builder => {
        // fetch All Companies
        builder.addCase(allCompanies.pending, state => {
            state.loading = true;
        })
        builder.addCase(allCompanies.fulfilled, (state, action) => {
            state.loading = false;
            state.companies = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(allCompanies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // fetch Company
        builder.addCase(getCompany.pending, state => {
            state.loading = true;
        })
        builder.addCase(getCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.companies = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(getCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // update company
        builder.addCase(updateCompany.fulfilled, (state, action) => {
            const value = state.companies.find(v => v.id === action.payload)
            if (value) {
                if (value.status === 0) {
                    value.status = 1
                } else {
                    value.status = 0
                }
            }
        })

        // verify company
        builder.addCase(verifyCompany.pending, state => {
            state.loading = true;
        })
        builder.addCase(verifyCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.verifyCompany = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(verifyCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })
        
        // complete company
        builder.addCase(completeCompany.pending, state => {
            state.loading = true;
        })
        builder.addCase(completeCompany.fulfilled, (state, action) => {
            state.loading = false;
            state.completeCompany = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(completeCompany.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        // complete registration
        builder.addCase(completeRegistration.pending, state => {
            state.loading = true;
        })
        builder.addCase(completeRegistration.fulfilled, (state, action) => {
            state.loading = false;
            state.completeRegistration = action.payload.data;
            state.fetched = true;
        })
        builder.addCase(completeRegistration.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        })

        
    }
})

export default company.reducer;