import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Donations from "./pages/Donations";
import Objetifs from "./pages/Objetifs";


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
