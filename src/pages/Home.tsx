import { useEffect, useState } from "react";
import CardPokemon, { CardPokemonProps } from "../components/CardPokemon";
import NavBar from "../components/NavBar";
import { Input, List, Title } from "./Home.style";
import api from "../services/api";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState<CardPokemonProps[]>([]);
  const [textoBusca, setTextoBusca] = useState("");

  async function getPokemonData() {
    const { data } = await api.get("pokemon?limit=151");

    const dadosCompletos = await Promise.all(
      data.results.map(async (result: { url: string }) => {
        const { data } = await api.get(result.url);

        return {
          id: data.id,
          name: data.name,
          types: data.types,
        };
      })
    );

    setPokemonList(dadosCompletos);
    setIsLoading(false);
  }

  useEffect(() => {
    getPokemonData();
  }, []);

  if (isLoading) {
    return <p>Carregando</p>;
  }

  return (
    <>
      <NavBar />
      <Title>Encontre todos os pokémons em um só lugar</Title>

      <Input
        type="text"
        placeholder="Busque pelo seu Pokemon ;) id ou nome"
        value={textoBusca}
        onChange={(event) => setTextoBusca(event.target.value)}
      />

      <List>
        {pokemonList
          .filter(
            (pokemon) =>
              pokemon.name.includes(textoBusca) ||
              String(pokemon.id) === textoBusca
          )
          .map((pokemon, index) => (
            <CardPokemon
              key={index}
              id={pokemon.id}
              name={pokemon.name}
              types={pokemon.types}
            />
          ))}
      </List>
    </>
  );
}

export default Home;
