import axios from 'axios';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) => {
        setPokemon(response.data.results);
      });
  }, []);
  return (
    <div>
      {pokemon.map((poke, index) => {
        return <div key={index}> {poke.name} </div>;
      })}
    </div>
  );
};

export default App;
