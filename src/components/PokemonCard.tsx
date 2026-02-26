import type { PokemonListItem } from "../interfaces/pokemon";
import { Link } from "react-router-dom";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

const extractPokemonId = (url: string): string => {
  const parts = url.split("/");
  return parts[parts.length - 2];
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    const id = extractPokemonId(pokemon.url);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
        <div className="
            min-w-[150px]
            bg-white
            shadow-md
            rounded-xl
            m-1
            p-4
            text-center
            capitalize
            hover:shadow-xl
            hover:scale-105
            transition
            duration-300
            cursor-pointer
        ">
        <img
            src={imageUrl}
            alt={pokemon.name}
            className="mx-auto mb-2 w-20 h-20"
            />
        <h2 className="font-semibold">
            {pokemon.name}
            </h2>
        </div>
    </Link>
  );
};

export default PokemonCard