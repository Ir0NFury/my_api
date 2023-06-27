import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserList } from "./type";

const initialState: IUserList = {
  isLoading: false,
  allUsers: [],
  error: "",
};

const userListReducer = createSlice({
  name: "userList",
  initialState,
  reducers: {
    getAllUsersStart(state) {
      state.isLoading = true;
    },
    getAllUsersSuccess(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.allUsers = action.payload;
    },
    getAllUsersError(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userListReducer;
