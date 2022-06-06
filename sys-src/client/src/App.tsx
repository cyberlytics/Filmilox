import { Route, Routes } from 'react-router-dom';
import Overview from './components/Overview/Overview';
import Admin from './components/Admin';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import FilmOverview from './components/FilmOverview';
import TopAppBar from './components/TopAppBar/TopAppBar';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUserData, selectIsAdmin } from './redux/userSlice';
import SearchResult from './components/Search/SearchResult';

function App() {
    const dispatch = useAppDispatch();
    const isAdmin: boolean = useAppSelector(selectIsAdmin);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <>
            <TopAppBar />
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/film/:filmId" element={<FilmOverview />} />
                {isAdmin && <Route path="/admin" element={<Admin />} />}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/search" element={<SearchResult />} />
            </Routes>
        </>
    );
}

export default App;
