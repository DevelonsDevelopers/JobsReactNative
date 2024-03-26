import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import seekerService from "../services/seekerService"

const initialState = {
    loading: false,
    seeker: {},
    recommendedUsers: [],
    error: ''
}

const fetchSeekerById = createAsyncThunk('fetchSeekerById', async (payload) => {
    try {
        const seeker = await seekerService.fetchById(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const fetchSeekerByEmail = createAsyncThunk('fetchSeekerByEmail', async (payload) => {
    try {
        const seeker = await seekerService.fetchByEmail(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const checkSeeker = createAsyncThunk('checkSeeker', async (payload) => {
    try {
        const seeker = await seekerService.checkSeeker(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const fetchRecommendedUsers = createAsyncThunk('fetchRecommendedUsers', async (payload) => {
    try {
        const recommendedUsers = await seekerService.fetchRecommendedUsers(payload);
        return recommendedUsers;
    } catch (error) {
        throw error;
    }
})

const updateSeeker = createAsyncThunk('updateSeeker', async (payload) => {
    try {
        const seeker = await seekerService.updateSeeker(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const verifySeeker = createAsyncThunk('verifySeeker', async (payload) => {
    try {
        const seeker = await seekerService.verifySeeker(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const roleUpdate = createAsyncThunk('roleUpdate', async (payload) => {
    try {
        const seeker = await seekerService.roleUpdate(payload);
        return seeker;
    } catch (error) {
        throw error;
    }
})

const seekerSlice = createSlice({
    name: "seekerSlice",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(fetchSeekerById.pending, state => {
                state.loading = true;
            })
            .addCase(fetchSeekerById.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(fetchSeekerById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchSeekerByEmail.pending, state => {
                state.loading = true;
            })
            .addCase(fetchSeekerByEmail.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(fetchSeekerByEmail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(checkSeeker.pending, state => {
                state.loading = true;
            })
            .addCase(checkSeeker.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(checkSeeker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchRecommendedUsers.pending, state => {
                state.loading = true;
            })
            .addCase(fetchRecommendedUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.recommendedUsers = action.payload;
            })
            .addCase(fetchRecommendedUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateSeeker.pending, state => {
                state.loading = true;
            })
            .addCase(updateSeeker.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(updateSeeker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(verifySeeker.pending, state => {
                state.loading = true;
            })
            .addCase(verifySeeker.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(verifySeeker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(roleUpdate.pending, state => {
                state.loading = true;
            })
            .addCase(roleUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.seeker = action.payload;
            })
            .addCase(roleUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const seekerActions = {
    fetchSeekerById,
    fetchSeekerByEmail,
    checkSeeker,
    fetchRecommendedUsers,
    updateSeeker,
    verifySeeker,
    roleUpdate
};

export default seekerSlice.reducer;
