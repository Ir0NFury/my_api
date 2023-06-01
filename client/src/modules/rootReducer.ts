import {combineReducers} from "redux";
import userReducer from "./user/reducer";
import userListReducer from "./userList/reducer";

const rootReducer = combineReducers({
    user: userReducer.reducer,
    userList: userListReducer.reducer
})

export default rootReducer;
