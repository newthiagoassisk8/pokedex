import type { PokemonListItem } from "../interfaces/pokemon";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-1x p-4 text-center capitalize">
      {pokemon.name}
    </div>
  );
};

export default PokemonCard