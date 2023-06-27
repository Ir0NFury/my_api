import { all, takeLatest, call, put, SagaReturnType } from "redux-saga/effects";
import userReducer from "./reducer";
import AuthService from "../../services/AuthService";
import { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../http";
import { AuthResponse } from "../../models/response/AuthResponse";

type LoginServiceResponse = SagaReturnType<typeof AuthService.login>;
type RegisterServiceResponse = SagaReturnType<typeof AuthService.registration>;

function* loginUser(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const response: LoginServiceResponse = yield call(
      AuthService.login,
      action.payload
    );
    localStorage.setItem("token", response.data.accessToken);
    yield put(userReducer.actions.userLoginSuccess(response.data.user));
  } catch (err: unknown) {
    yield put(
      userReducer.actions.userLoginError(
        err instanceof Error ? err.message : "Unknown error"
      )
    );
  }
}

function* registerUser(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const response: RegisterServiceResponse = yield call(
      AuthService.registration,
      action.payload
    );
    localStorage.setItem("token", response.data.accessToken);
    yield put(userReducer.actions.userRegisterSuccess(response.data));
  } catch (err: unknown) {
    yield put(
      userReducer.actions.userRegisterError(
        err instanceof Error ? err.message : "Unknown error"
      )
    );
  }
}

function* logoutUser() {
  try {
    yield call(AuthService.logout);
    localStorage.removeItem("token");
    yield put(userReducer.actions.userLogoutSuccess({}));
  } catch (err: unknown) {
    yield put(
      userReducer.actions.userRegisterError(
        err instanceof Error ? err.message : "Unknown error"
      )
    );
  }
}

function* checkAuth() {
  try {
    const response: LoginServiceResponse = yield axios.get<AuthResponse>(
      `${API_URL}/refresh`,
      { withCredentials: true }
    );
    localStorage.setItem("token", response.data.accessToken);
    yield put(userReducer.actions.userCheckAuthSuccess(response.data));
  } catch (err: unknown) {
    yield put(
      userReducer.actions.userCheckAuthError(
        err instanceof Error ? err.message : "Unknown error"
      )
    );
  }
}

export function* saga() {
  yield all([takeLatest(userReducer.actions.userLoginStart, loginUser)]);
  yield all([takeLatest(userReducer.actions.userRegisterStart, registerUser)]);
  yield all([takeLatest(userReducer.actions.userLogoutStart, logoutUser)]);
  yield all([takeLatest(userReducer.actions.userCheckAuthStart, checkAuth)]);
}
