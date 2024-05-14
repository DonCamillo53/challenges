import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?${limit}=&offset=${offset * limit}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  console.log(pokemon);
  return (
    <main>
      <button
        type="button"
        className="button"
        onClick={() => setOffset(offset - 1)}
      >
        Previous Page
      </button>
      <button
        type="button"
        className="button"
        onClick={() => setOffset(offset + 1)}
      >
        Next Page
      </button>
      <select>
        pokemon.map(())
      </select>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
