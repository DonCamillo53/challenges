import { useState, useEffect } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    loadPokemon();
  }, []);

  if (!pokemons) {
    return <h1>loading</h1>;
  }
  return (
    <main>
      <ul>
        {pokemons.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
