import '../index.css'
import {useEffect, useState} from "react";
import { getPokemonList } from '../api/pokemonService';
import type { PokemonListItem } from '../interfaces/pokemon';
import Loading from "../components/Loading"
import PokemonCard from '../components/PokemonCard';

function Home() {
const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const data = await getPokemonList();
                setPokemons(data.results);
            } catch (err) {
                console.error("Erro ao buscar pokemons:", err)
            } finally {
                setLoading(false)
            }
        }

        fetchPokemons();
    }, []);

    if(loading) return <Loading/>;

  return <>
    <div className="p-6">
        <h1 className="text-[40px] font-bold mb-6 text-center">
            Pokedéx
        </h1>
    </div>

    <div className="grid grid-cols-2 px-20 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
    </div>
  </>;
}

export default Home;