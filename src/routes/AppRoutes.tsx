import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home.tsx';
import PokemonDetails from '../pages/Pokemondetails.tsx';
import '../index.css';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
