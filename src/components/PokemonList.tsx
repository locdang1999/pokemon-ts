import React, { useEffect, useState } from 'react';
import "./pokemon.css";
import { PokemonDetail } from '../pokemonInterface';

interface Props {
  name: string;
  id: number;
  image: string;
  abilities?: {
    ability: string;
    name: string;
  }[] | undefined;
  pokemonDetail: PokemonDetail;
  setPokemonDetail: React.Dispatch<React.SetStateAction<PokemonDetail>>
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, pokemonDetail, setPokemonDetail } = props;
  const [isSelected, setIsSelected] = useState<boolean>(false);

  useEffect(() => {
    setIsSelected(id === pokemonDetail?.id);
  }, [pokemonDetail])

  const closeDetail = () => {
    setPokemonDetail({
      id: -1,
      isOpened: false
    })
  }

  return (
    <div className=''>
      {
        isSelected ? (
          <section className="pokemon-list-detailed">
            <div className="detail-container">
              <p className="detail-close" onClick={closeDetail}>X</p>
              <div className="detail-info">
                <img src={image} alt="pokeon" className='detail-img' />
                <p className="deatil-name">{name}</p>
              </div>
              <div className="div detail-skill">
                <p className="deatil-ab">Abilities:</p>
                {
                  abilities?.map((itm: any) => {
                    console.log(itm)
                    return <div className=''>{itm.ability.name}</div>
                  })
                }
              </div>
            </div>
          </section>
        ) : (
          <section className='pokemon-list-container'>
            <p className="pokemon-name">{name}</p>
            <img src={image} alt="pokemon" />
          </section>
        )
      }
    </div>
  )
}

export default PokemonList