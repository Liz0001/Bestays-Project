import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginState {
    //
}

const initialState: LoginState = {
    //
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {},
});

export const {} = loginSlice.actions;
export default loginSlice.reducer;
