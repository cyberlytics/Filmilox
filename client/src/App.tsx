import {BrowserRouter, Routes, Route} from "react-router-dom";
import Overview from "./components/Overview";
import Admin from "./components/Admin";
import Login from "./components/Login";
import Registration from "./components/Registration";
import FilmDetails from "./components/FilmDetails";

function App() {
    return (
        <div>
            <div className="bg-sky-200 p-8 shadow">
                <p className="text-center text-4xl font-bold">Filmilox</p>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Overview />} />
                    <Route path="/film/:filmId" element={<FilmDetails />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
