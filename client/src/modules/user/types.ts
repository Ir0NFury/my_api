export interface IUserMainData {
    isAuth: boolean;
    isLoading: boolean;
    userData: IUserData;
    error: string
}

export interface IUserData {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser {
    email: string;
    id: string;
    isActivated: boolean;
}
