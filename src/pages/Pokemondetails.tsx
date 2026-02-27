import '../index.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from '../api/pokemonService';
import type { PokemonDetails as PokemonDetailsType } from '../interfaces/pokemon';
import Loading from '../components/Loading';

function PokemonDetails() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState<PokemonDetailsType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!name) return;

        const fetchDetails = async () => {
            try {
                const data = await getPokemonDetails(name);
                setPokemon(data);
            } catch (err) {
                console.error('Erro ao buscar Detalhes', err);
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [name]);

    if (loading) return <Loading />;

    if (!pokemon) return <div>Pokemon não encontrado</div>;

    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center p-6">
                <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
                    <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>

                    <img
                        src={pokemon.sprites.other['official-artwork'].front_default}
                        alt={pokemon.name}
                        className="mx-auto w-48 h-48 mb-6"
                    />

                    <div className="mb-4">
                        <h2 className="font-semibold mb-2">Tipos</h2>
                        <div className="flex justify-center gap-2">
                            {pokemon.types.map((t) => (
                                <span
                                    key={t.type.name}
                                    className="bg-gray-500 px-3 py-1 rounded-full capitalize text-sm"
                                >
                                    {t.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-between text-lg">
                        <p>Altura: {pokemon.height}</p>
                        <p>Peso: {pokemon.weight}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PokemonDetails;
