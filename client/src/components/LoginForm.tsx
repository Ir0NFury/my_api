import React, {FC, useState} from 'react';
import {useAppDispatch} from "../hooks/redux";
import userReducer from "../modules/user/reducer";

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const dispatch = useAppDispatch();

    const onEmailHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const onPasswordHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(e.target.value)
    }

    const onSubmitHandler = () => {
        dispatch(userReducer.actions.userLoginStart({email, password}))
    }

    const onRegisterHandler = () => {
        dispatch(userReducer.actions.userRegisterStart({email, password}))
    }

    return (
        <div>
            <input type="text" placeholder="Email" value={email} onChange={onEmailHandler} />
            <br />
            <input type="password" placeholder="Password" value={password} onChange={onPasswordHandler} />
            <br />
            <br />
            <br />
            <button disabled={!email || !password} onClick={onSubmitHandler}>Login</button>
            <br />
            <br />
            <br />
            <button onClick={onRegisterHandler}>Register</button>
            <br />
            <br />
            <br />
            <button>Logout</button>
        </div>
    );
};

export default LoginForm
