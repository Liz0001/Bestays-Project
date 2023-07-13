import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface LoginRegisterState {
    //
}

const initialState: LoginRegisterState = {
    //
};

const loginRegisterSlice = createSlice({
    name: 'loginRegister',
    initialState,
    reducers: {},
});

export const {} = loginRegisterSlice.actions;
export default loginRegisterSlice.reducer;
