import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface RegisterState {
    //
}

const initialState: RegisterState = {
    //
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {},
});

export const {} = registerSlice.actions;
export default registerSlice.reducer;
