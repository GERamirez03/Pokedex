import React from 'react';
import Pokecard from './Pokecard';
import defaultPokemon from './defaultPokemon';

const Pokedex = ({ pokemonArray = defaultPokemon }) => (
    <>
        <h2>Pokedex</h2>
        { pokemonArray.map( pokemon => <Pokecard key={pokemon.id}
            id={pokemon.id} name={pokemon.name} type={pokemon.type} />)}
    </>
)

export default Pokedex;