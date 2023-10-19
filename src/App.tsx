import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PokemonCollection from './components/PokemonCollection';
import { Pokemon, PokemonArr, PokemonDetail } from './pokemonInterface';

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonArr[]>([]);
  const [nextUrl, setNextUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail>({
    id: 0,
    isOpened: false
  });

  const getData = (data: Pokemon[]) => {
    data.forEach(async (item: Pokemon, i: number) => {
      const resPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`);
      setPokemons((poke) => [...poke, resPoke.data]);
      setLoading(false);
    })
  }

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20");
      setNextUrl(res.data.next);
      getData(res.data.results);
    };
    return () => { getPokemon() };
  }, [])

  const nextPage = async () => {
    setLoading(true);
    const res = await axios.get(nextUrl);
    setNextUrl(res.data.next);
    getData(res.data.results);
  }

  return (
    <div className="App">
      <div className="container">
        <header className="pokemon-header">
          Pokemon
        </header>
        <PokemonCollection pokemons={pokemons} setPokemonDetail={setPokemonDetail} pokemonDetail={pokemonDetail} />
        {!pokemonDetail.isOpened?<div className="btn" onClick={nextPage}><button>{loading ? "Loadding..." : "Load more"}</button></div>:<div></div>}
      </div>
    </div>
  );
}

export default App;
