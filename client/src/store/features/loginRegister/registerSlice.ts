import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageStatus } from '../../../enums/pageStatus';
import { AppDispatch } from '../../store';
import instance from '../../../config/axios';
import { toast } from 'react-hot-toast';

interface RegisterState {
    registerStatus: PageStatus;
}

const initialState: RegisterState = {
    registerStatus: PageStatus.initial,
};

const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setRegisterStatus(state, action: PayloadAction<PageStatus>) {
            state.registerStatus = action.payload;
        },
    },
});

export function registerUser(newUserData: any) {
    return async function (dispatch: AppDispatch) {
        dispatch(setRegisterStatus(PageStatus.loading));

        try {
            const res = await instance.post(
                '/auth/register',
                { newUserData },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (res.status === 201) {
                toast.success('Account created!');
                dispatch(setRegisterStatus(PageStatus.success));
            } else {
                toast.error('Something went wrong. Try again later.');
                dispatch(setRegisterStatus(PageStatus.error));
            }
        } catch (error: any) {
            if (error.response.status == 500) {
                toast.error('Something went wrong. Try again later.');
            } else {
                toast.error(error.response.data.message);
            }
            dispatch(setRegisterStatus(PageStatus.error));
        }
    };
}

export const { setRegisterStatus } = registerSlice.actions;
export default registerSlice.reducer;
