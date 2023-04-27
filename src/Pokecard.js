import React from 'react';

const Pokecard = ({ id, name, type }) => (
    <>
        <h4>{name}</h4>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={`${name}`} />
        <p>Type: {type}</p>
    </>
)

export default Pokecard;