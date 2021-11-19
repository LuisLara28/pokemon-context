import React, { useState, useEffect } from "react";
import PokemonItem from "../../componentes/PokemonItem";
import CardContainer from "../../componentes/CardContainer";
const Home = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [newPokemonList, setNewPokemonList] = useState([]);

  useEffect(() => {
    const API = "https://pokeapi.co/api/v2/pokemon?limit=30&offset=0";
    const handlePokemonList = async () => {
      const request = await fetch(API);
      const result = await request.json();
      setPokemonList(result.results);
      //setNewPokemonList(result.results)
    };

    handlePokemonList();
  }, []);

  useEffect(() => {
    if (pokemonList.length > 0) {
      pokemonList.map(async (pokemon) => {
        const request = await fetch(pokemon.url);
        const { name, sprites, id } = await request.json();
        //console.log(name, sprites, id);

        const item = { name, sprites, id };
        setNewPokemonList((prevState) => [...prevState, item]);
      });
    }
  }, [pokemonList]);

  return (
    <div>
      <h2>Home</h2>

      <CardContainer>
        {newPokemonList?.map((pokemon) => (
          <PokemonItem
            key={pokemon.name}
            name={pokemon.name}
            img={pokemon.sprites.front_default}
            id={pokemon.id}
          />
        ))}
      </CardContainer>
    </div>
  );
};

export default Home;
