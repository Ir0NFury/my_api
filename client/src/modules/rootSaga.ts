import {all} from "redux-saga/effects";
import { saga as user } from './user/saga'
import { saga as userList } from './userList/saga'

export function* rootSaga() {
    yield all([
        user(),
        userList()
    ])
}
