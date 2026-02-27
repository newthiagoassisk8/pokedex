import '../index.css';
import { useEffect, useState } from 'react';
import { getPokemonList } from '../api/pokemonService';
import type { PokemonListItem } from '../interfaces/pokemon';
import Loading from '../components/Loading';
import PokemonCard from '../components/PokemonCard';

function Home() {
    const [pokemons, setPokemons] = useState<PokemonListItem[]>([
        { name: '', url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png' },
    ]);
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                setLoading(true);
                const data = await getPokemonList();
                const newList = data.results;
                setPokemons((prevValue) => [...prevValue, ...newList]);
            } catch (err) {
                console.error('Erro ao buscar pokemons:', err);
            } finally {
                setLoading(false);
            }
        };
        fetchPokemons();
    }, [refresh]);

    function refreshPage() {
        setRefresh((prevValue) => !prevValue);
    }

    if (loading) return <Loading />;

    return (
        <>
            <button onClick={refreshPage}>recarregar</button>
            <div className="p-6">
                <h1 className="text-[40px] font-bold mb-6 text-center">Pokedéx</h1>
            </div>

            <div className="grid grid-cols-2 px-20 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {pokemons.map((pokemon) => (
                    <PokemonCard key={pokemon?.name} pokemon={pokemon} />
                ))}
            </div>
        </>
    );
}

export default Home;
