export interface PokemonListItem {
    name: string;
    url: string;
}

export interface PokemonListResponse {
    results: PokemonListItem[];
}

export interface PokemonDetails {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: {
        type: {
            name: string;
        };
    }[];
    sprites: {
        other: {
            'official-artwork': {
                front_default: string;
            };
        };
    };
}
