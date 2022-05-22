import Axios from 'axios';
import ApiRouter from './ApiRouter';
import { ILoginResponse, IRegisterResponse } from '../model/IResponse';
import { IRegister } from '../model/IRegister';
import { ILogin } from '../model/ILogin';
import { IReview } from '../model/IReview';

export default class Backend {
    static register = async ({ email, username, password }: IRegister) => {
        try {
            const {
                data: { status },
            } = await Axios.post<IRegisterResponse>(ApiRouter.Register, {
                email,
                username,
                password,
            });
            return status;
        } catch (e) {
            throw e;
        }
    };

    static login = async ({ password, identifier }: ILogin) => {
        try {
            const {
                data: { token },
            } = await Axios.post<ILoginResponse>(ApiRouter.Login, {
                password,
                identifier,
            });
            localStorage.setItem('token', token);
        } catch (e) {
            throw e;
        }
    };

    static addreview = async ({ movieId, rating, comment }: IReview) => {
        try {
            await Axios.post(
                ApiRouter.AddReview,
                { movieId, rating, comment },
                ApiRouter.createHeaders()
            );
        } catch (e) {
            throw e;
        }
    };
}
