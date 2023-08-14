import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { PageStatus } from '../../../enums/pageStatus';
import { AppDispatch } from '../../store';
import instance from '../../../config/axios';

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
        console.log('in registerUser:', newUserData);

        try {
            const res = await instance.post(
                '/auth/register',
                { newUserData },
                { headers: { 'Content-Type': 'application/json' } }
            );
            console.log('in registerUser, (res):', res);
            if (res.status === 201) {
                console.log('Success');

                dispatch(setRegisterStatus(PageStatus.success));
                // toast
            } else {
                dispatch(setRegisterStatus(PageStatus.error));
                // toast
            }
        } catch (error: any) {
            // console.log('In registerUser Error:', error.request.responseText);

            dispatch(setRegisterStatus(PageStatus.error));
            // toast
        }
    };
}

export const { setRegisterStatus } = registerSlice.actions;
export default registerSlice.reducer;
