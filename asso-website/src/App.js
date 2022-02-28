import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Page1 from './pages/Page1.js';


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/donations" element={<Donations />} />
                <Route path="/objectifs" element={<Objetifs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
