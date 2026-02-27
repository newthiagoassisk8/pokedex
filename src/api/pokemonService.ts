import axios from 'axios';
import type { PokemonListResponse, PokemonDetails } from '../interfaces/pokemon.ts';

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});

export const getPokemonList = async (): Promise<PokemonListResponse> => {
    const response = await api.get('/pokemon?limit=151');
    return response.data;
};

export const getPokemonDetails = async (name: string): Promise<PokemonDetails> => {
    const response = await api.get(`/pokemon/${name}`);
    return response.data;
};
