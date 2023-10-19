export interface Pokemon {
    name: string,
    url: string
}

export interface PokemonArr {
    name: string,
    id: number,
    sprites: {
        front_default: string
    }
}

export interface PokemonDetail {
    id: number,
    isOpened: boolean
}

export interface PokemonAbilts extends PokemonArr {
    abilities?: {
        ability: string;
        name: string;
    }[]
}