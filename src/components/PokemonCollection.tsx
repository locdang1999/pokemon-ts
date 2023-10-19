import React from 'react';
import { PokemonAbilts, PokemonArr, PokemonDetail } from '../pokemonInterface';
import PokemonList from './PokemonList';
import "./pokemon.css";

interface Props {
    pokemons: PokemonAbilts[];
    pokemonDetail: PokemonDetail;
    setPokemonDetail: React.Dispatch<React.SetStateAction<PokemonDetail>>
}

const PokemonCollection: React.FC<Props> = (props) => {
    const { pokemons, pokemonDetail, setPokemonDetail } = props;

    const getPokemon = (id: number) => {
        if (pokemonDetail.isOpened) {
            return;
        }
        setPokemonDetail({
            id,
            isOpened: true
        });
    }

    return (
        <><section className={pokemonDetail.isOpened ? "collection-container-active" : "collection-container"}>
            {pokemonDetail.isOpened ? (
                <div className="overlay"></div>
            ) : (
                <div></div>
            )}
            {
                pokemons.map((pokemon, i: number) => {
                    return (
                        <div className='' key={i} onClick={() => getPokemon(pokemon.id)}>
                            <PokemonList key={pokemon.id}
                                name={pokemon.name}
                                id={pokemon.id}
                                image={pokemon.sprites.front_default}
                                abilities={pokemon.abilities}
                                pokemonDetail={pokemonDetail}
                                setPokemonDetail={setPokemonDetail} />
                        </div>
                    )
                })
            }</section></>
    )
}

export default PokemonCollection