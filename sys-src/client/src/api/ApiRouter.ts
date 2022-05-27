const SERVER = process.env.REACT_APP_SERVER;
const set = (route: string) => `${SERVER}${route}`;

export default class ApiRouter {
    static createHeaders = () => {
        const token = localStorage.getItem('token');
        return { headers: { 'x-auth-token': token ? token : '' } };
    };
    static getImageLink = (dbLink: string) => {
        return set(dbLink);
    };

    static Register = set('/user/register');
    static Login = set('/user/login');
    static AddReview = set('/film/addreview');
    static AddMovie = set('/admin/add-movie');
    static FetchUserData = set('/user/fetch-data');
    static GetMovieData = set('/admin/get-movie');
}
