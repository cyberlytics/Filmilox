export interface IRegisterResponse {
    status: boolean;
}

export interface ILoginResponse {
    token: string;
    user: {
        username: string;
        email: string;
    };
}
