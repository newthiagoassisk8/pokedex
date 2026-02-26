import '../index.css'
import {useEffect} from "react";
import { getPokemonList, getPokemonDetails } from '../api/pokemonService';

function Home() {


    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const data = await getPokemonList();
                console.log(data.results);
            } catch (err) {
                console.error("Erro ao buscar pokemons:", err)
            }

            try {
                const data = await getPokemonDetails("bulbasaur");
                console.log(data);
            } catch (err) {
                console.error("Erro ao buscar pokemons:", err)
            }
        }

        fetchPokemons();
    }, [])

  return <>
    <h1 className="text-3xl font-bold underline" >Pokedex</h1>
  </>;
}

export default Home;