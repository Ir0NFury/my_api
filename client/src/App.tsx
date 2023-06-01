import React, {FC, useEffect} from 'react';
import LoginForm from "./components/LoginForm";
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import userReducer from "./modules/user/reducer";
import userListReducer from "./modules/userList/reducer";

const App: FC = () => {
    const { isAuth, isLoading, userData } = useAppSelector(state => state.user)
    const { allUsers } = useAppSelector(state => state.userList)
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(localStorage.getItem('token')) {
            dispatch(userReducer.actions.userCheckAuthStart())
        }
    }, [])

    const logoutHandler = () => {
        dispatch(userReducer.actions.userLogoutStart())
    }

    const getAllUsersHandler = () => {
        dispatch(userListReducer.actions.getAllUsersStart())
    }

    if(isLoading) {
        return <div>Loading....</div>
    }

    if(!isAuth) {
       return  <LoginForm />
    }

    return (
        <div className="App">
            <div>Logged as {userData?.user?.email}</div>
            <button onClick={logoutHandler}>Logout</button>
            <button onClick={getAllUsersHandler}>Get all users!</button>
            {allUsers.map(user => (<div key={user.email}>{user.email}</div>))}
        </div>
    );
}

export default App;
