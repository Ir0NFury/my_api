export interface IUserList {
    isLoading: boolean,
    error: string,
    allUsers: IAllUsers[]
}

export interface IAllUsers {
    email: string
    password: string,
    isActivated: boolean,
    activationLink: string,
}
