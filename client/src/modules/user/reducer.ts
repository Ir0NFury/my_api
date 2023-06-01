import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUserData, IUserMainData} from "./types";

const initialState: IUserMainData = {
    isAuth: false,
    isLoading: false,
    userData: {} as IUserData,
    error: ''
}

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLoginStart(state, action: PayloadAction<any>) {
            state.isLoading = true;
        },
        userLoginSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.isAuth = true;
            state.userData = action.payload
        },
        userLoginError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload
        },
        userRegisterStart(state, action: PayloadAction<any>) {
            state.isLoading = true;
        },
        userRegisterSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.isAuth = true;
            state.userData = action.payload
        },
        userRegisterError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload
        },
        userLogoutStart(state) {
            state.isLoading = true;
        },
        userLogoutSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.isAuth = false;
            state.userData = action.payload;
        },
        userLogoutError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload
        },
        userCheckAuthStart(state) {
            state.isLoading = true;
        },
        userCheckAuthSuccess(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.isAuth = true;
            state.userData = action.payload;
        },
        userCheckAuthError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export default userReducer
