import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk';
import loginRegisterReducer from './features/loginRegister/loginRegisterSlice';

const rootReducer = combineReducers({
    loginRegister: loginRegisterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, undefined, any>;

// https://stackoverflow.com/questions/43002444/make-axios-send-cookies-in-its-requests-automatically
// { withCredentials: true } or axios.defaults.withCredentials = true

// https://medium.com/developer-rants/session-cookies-between-express-js-and-vue-js-with-axios-98a10274fae7

// https://dev.to/akshatsinghania/express-session-cookie-not-working-react-axios-16d9

// needs to be sent with registration form
// const defaultTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// console.log(defaultTimeZone);
