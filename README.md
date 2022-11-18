# Site Pokedex

Esta é uma pokedex desenvolvida com react, typescript e mais outras bibliotecas, produzida durante o [Gama Experience - 44](https://gama.academy).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

#### Tela principal
![Screenshot_1](https://user-images.githubusercontent.com/105292489/202736124-a5da8349-39dc-41ab-bace-3818f584ccea.jpg)
#### Tela de cada Pokemon
![Screenshot_2](https://user-images.githubusercontent.com/105292489/202736131-42eecaad-2895-412e-92df-c511f33a4e98.jpg)
#### Tela dos seus favoritos
![Screenshot_3](https://user-images.githubusercontent.com/105292489/202736133-248345c1-e640-4c44-9252-38c88838786a.jpg)

### Links

- Solution URL: [Here](https://github.com/muryllohenriq/Pokedex)
- Live Site URL: [Here](https://pokedex-gamma-pearl.vercel.app)

## My process

Foi meu primeiro projeto em react, eu não sabia nada sobre a biblioteca, e eu adorei. O processo de construção é divertido, interativo e a documentação é muito boa. Fazer com typescript deixa mais legal ainda. Criar os components deixa tudo mais limpo e funcional, já que posso reaproveitá-los em outras telas, e ainda estilizar estes components com o styled-components é muito limpo, só é preciso uma boa organização de pastas.

### Built with

- React
- Typescript
- Styled-components
- Redux
- Axios
- Cypress
- Storyboook
- Testing library react

### What I learned

```html
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
```
Essa lista foi muito importante pra eu conseguir encontrar os pokemons que eu queria de acordo com cada caractere digitado.
```css
export const Card = styled.div`
  width: 100%;
  min-height: 115px;
  background-color: #b9b8d3;
  border-radius: 10px;
  padding: 20px;

  position: relative;

  &.type--bug {
    background-color: #8bd674;
  }
  &.type--dark {
    background-color: #6f6e78;
  }
  &.type--dragon {
    background-color: #7383b9;
  }
```
Não para por aí... mas achei muito legal eu poder adicionar as cores dos pokemons de acordo com suas classes.
```js
      <div>
          <Number>
            #{String(props.id).padStart(3, "0")}
          </Number>
          {/* padStart = define o tamanho e completa a string com o padrão proposto, no caso "0" */}
          <Title>{props.name}</Title>
          {props.types.map((item, index) => {
            return <Badge key={index} name={item.type.name} />;
            {
              /* "key = {index}" pra impedir um erro no terminal */
            }
          })}
        </div>
```
Eu gostei muito dessa lógica pra numerar os pokemons e deixar estático o número de casas decimais.
### Continued development

Quero trazer o modo escuro pra tela e melhorar a página de cada pokemon

### Useful resources

- [Resource 1](https://www.markdownguide.org) - Esse artigo me ajudou muito com o read-me.
- [Resource 2](https://pt-br.reactjs.org/docs/getting-started.html) - Documentação do react.
- [Resource 3](https://styled-components.com/docs) - Documentação do styled-components.

## Author

- Website - [muryllohenriq](https://github.com/muryllohenriq)
- LinkedIn - [Muryllo Henrique](https://www.linkedin.com/in/muryllohenrique/)

## Acknowledgments

Aprendi a utilizar o react, construir elementos html junto com lógica e ainda estilizá-los e depois reaproveitar tudo digitando uma única linha de código. Quero mais disso!
