import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Overview from './components/Overview';
import Admin from './components/Admin';
import Login from './components/Authentication/Login';
import Registration from './components/Authentication/Registration';
import FilmDetails from './components/FilmDetails';
import TopAppBar from './components/TopAppBar/TopAppBar';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { fetchUserData, selectIsAdmin } from './redux/userSlice';

function App() {
    const dispatch = useAppDispatch();
    const isAdmin = useAppSelector(selectIsAdmin);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) dispatch(fetchUserData());
    }, [dispatch]);

    return (
        <BrowserRouter>
            <TopAppBar />
            <Routes>
                <Route path="/" element={<Overview />} />
                <Route path="/film/:filmId" element={<FilmDetails />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
