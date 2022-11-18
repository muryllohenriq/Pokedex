# Site Pokedex

Este é uma pokedex desenvolvida com react, typescript e mais outras bibliotecas, produzida durante o [Gama Experience - 44](https://gama.academy).

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

![Screenshot_1](https://user-images.githubusercontent.com/105292489/202736124-a5da8349-39dc-41ab-bace-3818f584ccea.jpg)
![Screenshot_2](https://user-images.githubusercontent.com/105292489/202736131-42eecaad-2895-412e-92df-c511f33a4e98.jpg)
![Screenshot_3](https://user-images.githubusercontent.com/105292489/202736133-248345c1-e640-4c44-9252-38c88838786a.jpg)

### Links

- Solution URL: [Here](https://github.com/muryllohenriq/Pokedex)
- Live Site URL: [Here](https://pokedex-gamma-pearl.vercel.app)

## My process

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
```css
export const Container = styled.div`
  height: calc(100vh - 4rem - 40px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;

  @media only screen and (max-width: 900px) {
    height: 100%;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 100%;
  
  @media only screen and (max-width: 900px) {
    max-width: 300px;
  }
`;
```
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
### Continued development

Quero trazer o modo escuro pra tela e melhorar a página de cada pokemon

### Useful resources

- [Resource 1](https://www.markdownguide.org) - Esse artigo me ajudou muito com o read-me.

## Author

- Website - [muryllohenriq](https://github.com/muryllohenriq)
- LinkedIn - [Muryllo Henrique](https://www.linkedin.com/in/muryllohenrique/)

## Acknowledgments

Amei a interação do react e a estilização utilizando styled-components.
