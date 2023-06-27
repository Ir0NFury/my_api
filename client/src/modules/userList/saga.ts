import { all, call, put, SagaReturnType, takeLatest } from "redux-saga/effects";
import userListReducer from "./reducer";
import UserService from "../../services/UserService";

type UserListServiceResponse = SagaReturnType<typeof UserService.fetchUsers>;

function* getAllUsers() {
  try {
    const response: UserListServiceResponse = yield call(
      UserService.fetchUsers
    );
    yield put(userListReducer.actions.getAllUsersSuccess(response.data));
  } catch (err: unknown) {
    yield put(
      userListReducer.actions.getAllUsersError(
        err instanceof Error ? err.message : "Unknown error"
      )
    );
  }
}

export function* saga() {
  yield all([
    takeLatest(userListReducer.actions.getAllUsersStart, getAllUsers),
  ]);
}
