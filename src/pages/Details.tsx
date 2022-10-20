import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/NavBar";
import Badge from "../components/Badge";
import { CardPokemonProps } from "../components/CardPokemon";
import api from "../services/api";
import { add, remove } from "../redux/favoriteSlice";
import { StoreState } from "../redux";

import { Container, Image, Card, Number, Title, Button } from "./Details.style";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const listaPokemonsFavoritos = useSelector(
    (state: StoreState) => state.favorite
  );
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState<CardPokemonProps>(
    {} as CardPokemonProps
  );

  function handleClickAdd() {
    dispatch(add(id));
  }

  function handleClickRemove() {
    dispatch(remove(id));
  }

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

          {!!listaPokemonsFavoritos.find(
            (item) => String(item) === String(id)
          ) ? (
            <button onClick={handleClickRemove}>Remover dos favoritos</button>
          ) : (
            <button onClick={handleClickAdd}>Adicionar aos favoritos</button>
          )}
        </Card>
      </Container>
    </>
  );
}

export default Details;
