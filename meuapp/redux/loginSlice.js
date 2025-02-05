import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
    email: '',
};

export const loginSlice = createSlice({
    name: 'login',
    initialState: initialValues,
    reducers: {
        reducerSetLogin: (state, action) => {
            state.email = action.payload;
        }
    }
});

export const { reducerSetLogin } = loginSlice.actions;

export default loginSlice.reducer;