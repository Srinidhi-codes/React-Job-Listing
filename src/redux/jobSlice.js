import { createSlice } from '@reduxjs/toolkit';

export const jobSlice = createSlice({
    name: 'job',
    initialState: {
        job: [],
    },
    reducers: {
        setJobList: (state, action) => {
            state.job = action.payload;
        },
    },
});
export const { setJobList, nameFilter } = jobSlice.actions;
export default jobSlice.reducer;
