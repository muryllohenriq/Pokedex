import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import { CardPokemonProps } from "../components/CardPokemon";
import { Container, Image, Card, Number, Title } from "./Details.style";
import api from "../services/api";
import Badge from "../components/Badge";

function Details() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<CardPokemonProps>(
    {} as CardPokemonProps
  );

  async function getPokemonData() {
    const { data } = await api.get("pokemon/" + id);

    setPokemonData({
      id: data.id,
      name: data.name,
      types: data.types,
    });
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
      <NavBar hasGoBack />

      <Container>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={pokemonData.name}
        />

        <Card
          className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}
        >
          <Number>#{String(id).padStart(3, "0")}</Number>
          <Title>{pokemonData.name}</Title>
          {pokemonData.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />;
          })}
        </Card>
      </Container>
    </>
  );
}

export default Details;
